export const generateNextId = (tasks) => {
  let newId;
  do {
    newId = tasks.length + 1;
  } while (checkId(newId, tasks));

  return newId;
};

export const checkId = (id, tasks) => {
  return tasks.filter((f) => f.id === id).length !== 0;
};
