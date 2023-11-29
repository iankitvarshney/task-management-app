export const getLocalStorageData = () => {
  const items = JSON.parse(localStorage.getItem("tasks"));
  if (items) {
    return items;
  } else {
    return [];
  }
};
