﻿# Too Long Didn't Read Dictionary of Algorithms and Data Structures
> Repository dedicated to a breakdown of data structures and algorithms into short snippets and layman terms.
## Table of Contents

- [Time Complexity](#Time-Complexity )
  - [Big O](#Big-O)
  - [Big Omega](#Big-Omega)
  - [Big Theta](#Big-Theta)
- [Space Complexity](#Space-Complexity )
- [Algorithms](#Algorithms)
  - [Binary Search](#Binary-Search-)
- [Data Structures](#Data-Structures)
- [Contributing](#contributing)
- [License](#license)


## Time Complexity

Time complexity is the computational complexity that it takes for a program/function to iterate through the operations by the algorithms in that program.
### Big O
Big O specifcally describes the upper bound of time, or **best case scenario**.

![alt text](Images/bigOCheatSheet.JPG "Binary search vs Sequential Search")
> Refrence: https://www.bigocheatsheet.com/
### Big Omega
Big Omega descripes the opposite of Big O. It descripes the lowest bound of time, or **worst case scenario**.
### Big Theta


## Space Complexity

###
```
#TODO

```

## Algorithms

### Searching :
***
#### Binary Search :
##### Description: 
Also known as **half-interval search**, **logarithmic search**, or **binary chop**. It is a search algorithm that finds the positon of a target value within a **_sorted_** array.
##### Functionality:
Binary search performs a search comparing the target value against a pivot point (middle of the array) and divides the search space in 2 after every comparison. If they are not equal (middle of the array == target value) then you remove the half that the target value could not be in and perform the search again until the value is found. If the search ends with the remaining half being empty then the target is not in the array.

![alt text](Images/binarySearch.gif "Binary search vs Sequential Search")

##### Performance:
+ Worst-Case time complexity:		O(log n)
+ Best-case time complexity:		Ω(1)
+ Worst-case space complexity:		O(1)

##### Example:
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```




### Sorting :

***
#### Bubble Sort :
##### Description: 
Also known as **sinking sort**. It is a sorting algorithm that loops through an array until it is sorted by swaping adjacent elements in either ascending or descending order.
##### Functionality:
You start looping through the array swapping elements based on if they are supposed to be in ascending or descending order. You keep passing through the list until it is sorted. The elements "bubble" to the top. The algroithm is slow and impractial for most problems.

![alt text](Images/bubbleSort.gif "Bubble Sort Example")

##### Performance:
+ Worst-Case time complexity:		O(n^2)
+ Best-case time complexity:		Ω(n)
+ Worst-case space complexity:		O(1)

##### Example:
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

***
#### Insertion Sort :
##### Description: 
One of the simplest sorting algorithms. You divide your array into two portions, a sorted one and an unsorted one. On each pass the next unsorted array element is compared with all of the sorted elements and moved into its proper position.
##### Functionality:
Insertion sort consists of n -1 passes. For pass = 2 through n, insertion sort ensures that the elements in position 1 through p are in sorted order. 

![alt text](Images/insertionSort.gif "Insertion Sort Example")
> A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list. With each iteration one element (red) is removed from the "not yet checked for order" input data and inserted in-place into the sorted list.
> Refrence: https://en.wikipedia.org/wiki/Insertion_sort

##### Performance:
+ Worst-Case time complexity:		O(n^2)
+ Best-case time complexity:		Ω(n)
+ Worst-case space complexity:		O(1)

##### Example:
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```






```
#TODO
```

## Data Structures

```
#TODO
```



## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.



## License

[MIT © Olaf Adrian Minkowicz.](LICENSE)