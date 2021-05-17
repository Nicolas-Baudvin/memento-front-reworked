import { ListAction } from "./types";

const optsByRoute = (action: ListAction, opts: any) => ({
  order: {
    url: process.env.REACT_APP_CHANGE_LIST_ORDER,
    method: "patch",
    data: {
      _id: opts._id,
      listsUpdated: action.payload.lists,
      boardID: opts.current?._id,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
  title: {
    url: process.env.REACT_APP_CHANGE_LIST_NAME,
    method: "patch",
    data: {
      boardID: opts.current?._id,
      _id: opts._id,
      list: action.payload?.list,
      newTitle: action.payload?.newName,
    },
    headers: {
      authorization: `Bearer ${opts.token}`,
    },
  },
  delete: {
    method: "delete",
    url: process.env.REACT_APP_DELETE_LIST,
    data: {
      boardID: opts.current?._id,
      listID: action.payload?.list?._id,
      _id: opts._id,
    },
    headers: {
      authorization: `Bearer ${opts.token}`,
    },
  },
  create: {
    url: process.env.REACT_APP_CREATE_LIST,
    method: "post",
    data: {
      _id: opts._id,
      ...action.payload,
      boardID: opts.current?._id,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
});

export default optsByRoute;