export function debounce(fn: (...args: any[]) => any, delay: number) {
  let timer = 0;
  return function() {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this);
    }, delay);
  };
}