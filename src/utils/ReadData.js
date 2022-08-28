export const ReadData = (item) => {
  let posts = JSON.parse(localStorage.getItem("posts"));
  return item;
};
