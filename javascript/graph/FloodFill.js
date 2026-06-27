/**
 * 733. Flood Fill
 *
 * You are given an image represented by an m x n grid of integers image, where
 * image[i][j] represents the pixel value of the image. You are also given three
 * integers sr, sc, and color. Your task is to perform a flood fill on the image
 * starting from the pixel image[sr][sc]. To perform a flood fill:
 * 1. Begin with the starting pixel and change its color to color.
 * 2. Perform the same process for each pixel that is directly adjacent (pixels
 *    that share a side with the original pixel, either horizontally or vertically)
 *    and shares the same color as the starting pixel.
 * 3. Keep repeating this process by checking neighboring pixels of the updated
 *    pixels and modifying their color if it matches the original color of the
 *    starting pixel.
 * 4. The process stops when there are no more adjacent pixels of the original
 *    color to update.
 * Return the modified image after performing the flood fill.
 * 
 * Example 1:
 * Input: image = [[1,1,1],
 *                 [1,1,0],
 *                 [1,0,1]],
 * sr = 1, sc = 1, color = 2
 * Output: [[2,2,2],
 *          [2,2,0],
 *          [2,0,1]]
 * Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., 
 * the red pixel), all pixels connected by a path of the same color as the starting 
 * pixel (i.e., the blue pixels) are colored with the new color. Note the bottom 
 * corner is not colored 2, because it is not 4-directionally connected to the 
 * starting pixel.
 * 
 * Constraints:
 * m == image.length
 * n == image[i].length
 * 1 <= m, n <= 50
 * 0 <= image[i][j], color < 216
 * 0 <= sr < m
 * 0 <= sc < n
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

let dir = [0, 1, 0, -1, 0];

var floodFill = function(image, sr, sc, color) {
    if (image[sr][sc] == color) {
        return image;
    }
    fill(image, sr, sc, image[sr][sc], color);
    return image;
}

/**
 * 如果当前元素坐标[sr,sc]没有越界且当前元素和color1值一样，则将该元素值设置为color2，
 * 然后在当前元素的上下左右四个方向分别通过递归进行相同的处理
 */
var fill = function(image, row, col, color1, color2) {
    if (row < 0 || row >= image.length || col < 0 || col >= image[0].length ||
            image[row][col] != color1) {
        return;
    }
    image[row][col] = color2;
    for (let i = 0; i < dir.length - 1; i++) {
        fill(image, row + dir[i], col + dir[i + 1], color1, color2);
    }
}

var main = function() {
    let image = [[1,1,1],
                 [1,1,0],
                 [1,0,1]];
    let sr = 1;
    let sc = 1;
    let color = 2;
    console.log('sr: ' + sr + ', sc: ' + sc + ', color: ' + color);
    print2dArray(image);
    print2dArray(floodFill(image, sr, sc, color));
}

main();
