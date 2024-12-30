export function logSolution(title: string, tests: { args: any[], result: any }[]) {
    console.group(`%c${title}`, 'color: #4CAF50; font-size: 16px; font-weight: bold;');
    tests.forEach(({ args, result }) => {
      console.log(
        '%cOverload %d args (%s): %c%s',
        'color: #2196F3; font-weight: bold;',
        args.length,
        args.join(', '),
        'color: #000;',
        result
      );
    });
    console.groupEnd();
  }