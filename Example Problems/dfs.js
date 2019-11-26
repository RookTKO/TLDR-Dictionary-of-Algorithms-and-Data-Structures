/*
 * DFS
 *
 * Flood Fill Problem
 *
* Problem Description:
* An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).
*
* Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, 
* and a pixel value newColor, "flood fill" the image.
*
* To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the 
* starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally 
* to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all 
* of the aforementioned pixels with the newColor.
*
* At the end, return the modified image.
 *
 * Test Case:
 * nums = [-1,0,3,5,9,12]
 * target = 9
 *
*/

/**
 * @param {number[][]} image
 * @param {number} sr - source row
 * @param {number} sc - source column
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    //Testcase if color is the same as newColor
    if (newColor == image[sr][sc]) {
        return image;
    }
    const currentColor = image[sr][sc];
    fill(image, sr, sc, currentColor, newColor);

    return (image);
};

function fill(image, sr, sc, currentColor, newColor) {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length ||
        image[sr][sc] == newColor || image[sr][sc] != currentColor) {
        return image;
    }

    image[sr][sc] = newColor
    fill(image, sr - 1, sc, currentColor, newColor); // up
    fill(image, sr + 1, sc, currentColor, newColor); // down
    fill(image, sr, sc + 1, currentColor, newColor); // right
    fill(image, sr, sc - 1, currentColor, newColor); // left
}
let image = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], sr = 0, sc = 0, newColor = 2;
floodFill(image, sr, sc, newColor);