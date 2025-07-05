export const _instanceof = (target: any, Fn: any) => {
  let proto = target.__proto__;
  const prototype = Fn.prototype;

  while(proto !== null) {
    if (proto === prototype) return true;
    proto = proto.__proto__;
  }

  return false;
};
