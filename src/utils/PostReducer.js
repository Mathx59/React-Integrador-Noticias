export const PostReducer = (state = [], action) => {
  switch (action.type) {
    case "create":
      let idPost = new Date().getTime();
      let user = JSON.parse(localStorage.getItem("user"));

      let data = { ...action.payload, id: idPost, user: user.username };
      return [data, ...state];

    case "delete":
      return state.filter((post) => post.id !== action.payload);

    default:
      return state;
  }
};
