interface Merge {
    (collection_1: number[], collection_2: number[], collection_3: number[]): number[];
}

export const merge: Merge = (collection_1, collection_2, collection_3) => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9]