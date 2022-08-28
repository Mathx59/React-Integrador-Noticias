export const useInit = (data) => {
  const loadPage = () => {
    if (!localStorage.getItem("login")) {
      localStorage.setItem("login", false);
    }

    data.map((post) => {
      localStorage.setItem("posts", JSON.stringify(data));
    });
  };

  const loadData = () => {
    let data = JSON.parse(localStorage.getItem("posts")) || [];
    return data;
  };
  return {
    loadPage,
    loadData,
  };
};
