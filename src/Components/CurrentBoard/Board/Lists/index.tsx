import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../Store/reducer";
import {
  CurrentboardActions,
  CurrentboardLocalState,
} from "../../utils/reducer";
import {
  DragDropContext,
  Droppable,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import CreateList from "../CreateList";
import List from "./List";
import { listAction } from "../../../../Store/List/actions";
import { List as ListType } from "../../../../Store/List/types";

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

  const createNewListArraySortedByOrder = (
    allLists: Array<ListType>,
    { draggableId, destination, source }: DropResult
  ): Array<ListType> => {
    return allLists
      .map((list: ListType) => {
        if (draggableId === list._id && destination) {
          list.order = destination.index;
        } else {
          if (
            destination &&
            source.index < list.order &&
            destination.index >= list.order
          ) {
            list.order -= 1;
          }
          if (
            destination &&
            source.index > list.order &&
            destination.index <= list.order
          ) {
            list.order += 1;
          }
        }
        return list;
      })
      .sort((a: ListType, b: ListType) => a.order - b.order);
  };

  // TODO: Refact
  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const { destination, source, type } = result;
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
