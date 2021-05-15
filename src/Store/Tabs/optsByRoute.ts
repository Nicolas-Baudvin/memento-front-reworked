const optsByRoute = (action: any, opts: any) => ({
  delete: {
    url: process.env.REACT_APP_DELETE_BOARD,
    method: "delete",
    data: {
      board: action.payload,
      _id: opts._id,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
  create: {
    url: process.env.REACT_APP_CREATE_BOARDS,
    method: "post",
    data: {
      _id: opts._id,
      username: opts.username,
      email: opts._email,
      image: action.payload?.image,
      title: action.payload?.title,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
  get: {
    url: process.env.REACT_APP_GET_BOARDS,
    method: "post",
    data: {
      _id: opts._id,
      email: opts.email,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
});

export default optsByRoute;