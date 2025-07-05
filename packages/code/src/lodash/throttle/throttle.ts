export function throttle(fn: (...args: any[]) => any, delay: number) {
  let enable = true;
  return function() {
    enable && setTimeout(() => {
      fn.apply(this);
      enable = true;
    }, delay);
    enable = false;
  };
}