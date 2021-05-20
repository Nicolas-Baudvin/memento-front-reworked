import { DropResult } from "react-beautiful-dnd";
import { List as ListType } from "../../../../../Store/List/types";
import { Task } from "../../../../../Store/Tasks/types";

export const createNewListArraySortedByOrder = (
  allLists: Array<ListType>,
  { draggableId, destination, source }: DropResult
): Array<ListType> => {
  return allLists
    .map((list: ListType) => {
      if (draggableId === list._id && destination) {
        list.order = destination.index;
      } else {
        if (destination) {
          if (source.index < list.order && destination.index >= list.order) {
            list.order -= 1;
          }
          if (source.index > list.order && destination.index <= list.order) {
            list.order += 1;
          }
        }
      }
      return list;
    })
    .sort((a: ListType, b: ListType) => a.order - b.order);
};

export const createNewTaskArraySortedByOrder = (
  tasksToSort: Array<Task>,
  sourceList: ListType,
  { destination, draggableId, source }: DropResult
) =>
  tasksToSort
    .map((task: Task) => {
      if (destination) {
        if (task._id === draggableId) {
          task.order = destination.index;
          task._id = `${sourceList._id}-${destination.index}`;
        } else {
          if (task.order <= destination.index && task.order > source.index) {
            task.order -= 1;
            task._id = `${sourceList._id}-${task.order}`;
          }

          if (task.order >= destination.index && task.order < source.index) {
            task.order += 1;
            task._id = `${sourceList._id}-${task.order}`;
          }
        }
      }
      return task;
    })
    .sort((a, b) => a.order - b.order);

export const createSortedDestinationTasks = (
  destinationList: ListType | undefined,
  { destination, draggableId }: DropResult
) => {
  return (
    destination &&
    destinationList?.tasks
      .map((task) => {
        if (task.order >= destination.index && task._id !== draggableId) {
          task.order += 1;
          task._id = `${destinationList._id}-${task.order}`;
        }
        if (task._id === draggableId) {
          task.order = destination.index;
          task._id = `${destinationList._id}-${task.order}`;
        }
        return task;
      })
      .sort((a, b) => a.order - b.order)
  );
};

export const createSortedSourceTasks = (
  tasksToSort: Array<Task>,
  sourceList: ListType,
  { draggableId, source }: DropResult
) => {
  return tasksToSort
    .filter((task) => task._id !== draggableId)
    .map((task) => {
      if (task.order > source.index) {
        task.order -= 1;
        task._id = `${sourceList._id}-${task.order}`;
      }
      return task;
    })
    .sort((a, b) => a.order - b.order);
};
