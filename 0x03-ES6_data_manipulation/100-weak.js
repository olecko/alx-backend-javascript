export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const currentCount = weakMap.get(endpoint);
    weakMap.set(endpoint, currentCount + 1);

    if (currentCount + 1 >= 5) {
      const error = new Error('Endpoint load is high');
      error.fileName = './100-weak.js';
      error.lineNumber = 16;
      throw error;
    }
  }
}
