var matrix = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
];

var val1 = document.getElementById("f1"),
  val2 = document.getElementById("f2"),
  left = 1,
  right = -1,
  selected,
  leftN,
  rightN,
  topN,
  botN,
  topRight,
  topLeft,
  botRight,
  botLeft,
  sum;

function set() {
  selected = matrix[val1.value][val2.value];

  leftN = matrix[val1.value][val2.value - left] || 0;

  rightN = matrix[val1.value][val2.value - right] || 0;

  topN = matrix[val1.value - left][val2.value] || 0;

  topRight = matrix[val1.value - left][val2.value - right] || 0;

  topLeft = matrix[val1.value - left][val2.value - left] || 0;

  botN = matrix[val1.value - right][val2.value] || 0;

  botRight = matrix[val1.value - right][val2.value - right] || 0;

  botLeft = matrix[val1.value - right][val2.value - left] || 0;

  p3.innerHTML =
    "Selected: " +
    selected +
    "<br/>" +
    "Left: " +
    leftN +
    "<br/>" +
    "Right: " +
    rightN +
    "<br/>" +
    "Top: " +
    topN +
    "<br/>" +
    "Top right: " +
    topRight +
    "<br/>" +
    "Top left: " +
    topLeft +
    "<br/>" +
    "Bottom: " +
    botN +
    "<br/>" +
    "Bottom right: " +
    botRight +
    "<br/>" +
    "Bottom left: " +
    botLeft;

  sum =
    selected +
    leftN +
    rightN +
    topN +
    topRight +
    topLeft +
    botN +
    botRight +
    botLeft;
  p12.innerHTML = "Sum: " + sum;
}
