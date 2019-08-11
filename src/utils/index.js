export const loadData = (...task) => {
  let promises = [];
  task.forEach(item => {
    let promise = new Promise((resolve, reject) => {
      item.then(resolve).catch(resolve);
    });
    promises.push(promise);
  });
  return Promise.all(promises);
};
