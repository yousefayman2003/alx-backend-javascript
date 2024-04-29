export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const n = weakMap.get(endpoint);
    if (n >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, n + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
};
