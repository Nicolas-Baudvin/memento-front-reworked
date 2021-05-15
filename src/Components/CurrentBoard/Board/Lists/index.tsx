import { useEffect } from "react";
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
import { useState } from "react";
import { updateCurrentBoardLists } from "../../../../Store/List/actions";

interface ListProps {
  localDispatch: React.Dispatch<CurrentboardActions>;
  state: CurrentboardLocalState;
}

const Lists = ({ localDispatch, state }: ListProps) => {
  const { current } = useSelector((state: RootState) => state.boards);
  const [lists, setLists] = useState(current?.lists);
  const dispatch = useDispatch();

  useEffect(() => {
    setLists(current?.lists);
  }, [current?.lists]);

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (current && current.lists) {
      if (type === "column") {
        const allLists = current.lists;
        let newListArray = allLists
          .map((list) => {
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
          .sort((a, b) => a.order - b.order);
        if (newListArray.length) {
          setLists(newListArray);
          dispatch(updateCurrentBoardLists(newListArray));
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
                lists.map((list, i) => (
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
