import { bubbleSort } from "../sorting/bubble-sort";

describe("Bubble Sort", () => {
  test("should sort array correctly", () => {
    expect(bubbleSort([64, 34, 25, 12, 22, 11, 90])).toEqual([
      11, 12, 22, 25, 34, 64, 90,
    ]);
  });
});
