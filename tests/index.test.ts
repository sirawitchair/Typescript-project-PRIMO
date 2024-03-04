import { merge } from "../src/index";

describe("testing index file", () => {
    test("the result must not have duplicated number in the array", () => {
        expect(merge([1,2,3,4,5,10], [5,6,7,8,9,10], [15,14,13,12,11,10])).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
    });
});
