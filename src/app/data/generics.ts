export interface Dictionary<T>{
    [key: string] : T
  }
  export function isType<T>(
    value: any,
    primitiveType?: string,
    constructorFn?: new (...args: any[]) => T
  ): value is T {
    if (primitiveType && typeof value === primitiveType) return true;
    if (constructorFn && value instanceof constructorFn) return true;
    return false;
  }