export const PromiseAll = <T>(promises: Array<Promise<T>>) => {
  return new Promise<Array<T>>((resolve, reject) => {
    const results = Array(promises.length).fill(null);
    let successCount = 0;

    promises.forEach((promise, index) => {
      promise
        .then(res => {
          results[index] = res;
          if (++successCount === promises.length) resolve(results);
        })
        .catch(e => {
          reject(e);
        });
    });
  });
};