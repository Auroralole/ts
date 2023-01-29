
import { Merge } from "./merge.js";
describe("Merge", () => {
  let merge: Merge;

  beforeEach(() => {
    merge = new Merge();
  });

  it("should merge two sorted arrays", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];

    const result = merge.merge(collection_1, collection_2);

   
  });

  it("should handle an empty first array", () => {
    const collection_1: number[] = [];
    const collection_2 = [2, 4, 6];

    const result = merge.merge(collection_1, collection_2);

    
  });

  it("should handle an empty second array", () => {
    const collection_1 = [1, 3, 5];
    const collection_2: number[] = [];

    const result = merge.merge(collection_1, collection_2);

  });

  it("should handle two empty arrays", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];

    const result = merge.merge(collection_1, collection_2);

    
  });
});
