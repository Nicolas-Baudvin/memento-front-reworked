import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../Store/reducer";
import {
  CurrentboardActions,
  CurrentboardLocalState,
} from "../../utils/reducer";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import CreateList from "../CreateList";
import List from "./List";
import { listAction } from "../../../../Store/List/actions";
import { List as ListType } from "../../../../Store/List/types";
import { Task } from "../../../../Store/Tasks/types";
import { taskAction } from "../../../../Store/Tasks/actions";
import {
  createNewListArraySortedByOrder,
  createNewTaskArraySortedByOrder,
  createSortedDestinationTasks,
  createSortedSourceTasks,
} from "./Utils";

interface ListProps {
  localDispatch: React.Dispatch<CurrentboardActions>;
  state: CurrentboardLocalState;
}

const Lists = ({ localDispatch, state }: ListProps) => {
  const { current } = useSelector((State: RootState) => State.boards);
  const [lists, setLists] = useState(current?.lists);
  const dispatch = useDispatch();

  useEffect(() => {
    setLists(current?.lists);
  }, [current?.lists]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, type, draggableId } = result;
    const sourceList = lists?.filter(
      (list) => list._id === source.droppableId
    )[0];
    const destinationList = lists?.filter(
      (list) => list._id === destination?.droppableId
    )[0];
    const tasksToSort = sourceList?.tasks;
    const sourceTask = tasksToSort?.filter(
      (task: Task) => task._id === draggableId
    )[0];

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (current && current.lists) {
      if (type === "column") {
        const newListsArray = createNewListArraySortedByOrder(
          current.lists,
          result
        );
        if (newListsArray.length) {
          setLists(newListsArray);
          dispatch(listAction({ lists: newListsArray }, "order"));
        }
      }
    }

    if (type === "task" && tasksToSort && sourceTask && sourceList) {
      if (destination && destination.droppableId === sourceList._id) {
        const newSortedTasks: Array<Task> = createNewTaskArraySortedByOrder(
          tasksToSort,
          sourceList,
          result
        );

        sourceList.tasks = newSortedTasks;
        const newListsArray =
          lists?.map((list) => {
            if (list._id === sourceList._id) {
              list = sourceList;
            }
            return list;
          }) || [];
        setLists(newListsArray);
        dispatch(
          taskAction({ tasks: newSortedTasks, list: sourceList }, "order")
        );
      } else {
        const sourceSortedTasks = createSortedSourceTasks(
          tasksToSort,
          sourceList,
          result
        );
        destinationList?.tasks.push(sourceTask);
        const destinationSortedTasks = createSortedDestinationTasks(
          destinationList,
          result
        );

        const newListsArray =
          lists?.map((list) => {
            if (list._id === sourceList._id) {
              list.tasks = sourceSortedTasks;
            }
            if (destinationSortedTasks && list._id === destinationList?._id) {
              list.tasks = destinationSortedTasks;
            }
            return list;
          }) || [];
        if (newListsArray.length) {
          setLists(newListsArray);
          dispatch(listAction({ lists: newListsArray }, "order"));
        }
      }
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          type="column"
          droppableId="all-columns"
          direction="horizontal"
        >
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="currentboard-content-lists"
            >
              {lists &&
                lists.map((list: ListType, i: number) => (
                  <List key={i} list={list} index={list._id} />
                ))}
              {provided.placeholder}
              <CreateList localDispatch={localDispatch} state={state} />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Lists;
