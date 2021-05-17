import { TaskAction } from "./types";

const optsByRoute = (action: TaskAction, opts: any) => ({
  create: {
    url: process.env.REACT_APP_CREATE_TASK,
    method: "post",
    data: {
      list: action.payload.list,
      desc: action.payload.taskName,
      boardID: opts.current?._id,
      _id: opts._id,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
  delete: {
    url: process.env.REACT_APP_DELETE_TASK,
    method: "delete",
    data: {
      sourceList: action.payload.list,
      boardID: opts.current?._id,
      taskID: action.payload?.task?._id,
      _id: opts._id,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
  order: {
    url: process.env.REACT_APP_PATCH_TASK_ORDER,
    method: "patch",
    data: {
      listID: action.payload.list._id,
      boardID: opts.current?._id,
      tasks: action.payload?.tasks,
      _id: opts._id,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
  desc: {
    url: process.env.REACT_APP_PATCH_TASK_DESC,
    method: "patch",
    data: {
      listID: action.payload.list._id,
      boardID: opts.current?._id,
      taskID: action.payload?.task?._id,
      newDesc: action.payload.newDesc,
      _id: opts._id,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
  importance: {
    url: process.env.REACT_APP_PATCH_TASK_IMPORTANCE,
    method: "patch",
    data: {
      listID: action.payload.list._id,
      boardID: opts.current?._id,
      taskID: action.payload?.task?._id,
      importance: action.payload.importance,
      _id: opts._id,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
  author: {
    url: process.env.REACT_APP_PATCH_TASK_AUTHOR,
    method: "patch",
    data: {
      listID: action.payload.list._id,
      boardID: opts.current?._id,
      taskID: action.payload?.task?._id,
      author: action.payload.author,
      _id: opts._id,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
});

export default optsByRoute;
