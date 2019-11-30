const insertionSort = arr => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let cv = arr[i];
        let j;

        for (j = i - 1; j >= 0 && arr[j] > cv; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = cv;
    }
    return arr;
};


let arr = [21, 4, 1, 2, 8, 11, 92, 22, 10, 5];
console.log(insertionSort(arr));
