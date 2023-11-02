export function exhaustive(x: never, funcName: string) {
  console.error(`Unexpected or unhandled case {${x}} is {${funcName}}`);
}
