// solitions
import { overload } from "./overload";
import { logSolution } from "../common";

const testOverload = overload([
  () => 100500,
  (a, b) => a + b,
  (a, b, c) => a * b * c
])

logSolution('Overload Solution', [
  { args: [], result: testOverload() },
  { args: [1, 2], result: testOverload(1, 2) },
  { args: [2, 3, 4], result: testOverload(2, 3, 4) },
])