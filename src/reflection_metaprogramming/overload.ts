// Function to create reloads based on number of arguments
type OverloadFunction = (...args: any[]) => any;

export function overload(handlers: OverloadFunction[]) {
  return function (...args: any[]) {
    for (const handler of handlers) {
      if (handler.length === args.length) {
        return handler(...args);
      }
    }
    throw new Error(`No overload defined for ${args.length} arguments.`);
  };
};
