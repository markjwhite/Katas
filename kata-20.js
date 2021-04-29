const blocksAway = function(directions) {
  const output = { east: 0, north: 0 };
  let orientation = "start";
  let position = [0, 0];
  for (let i = 0; i < directions.length; i++) {

    if (directions[i] === 'right' && orientation === "start") {
      orientation = "r";
      position[0] += directions[i + 1];
    } else if (directions[i] === 'left' && orientation === 'start') {
      orientation = 'up';
      position[1] += directions[i + 1];
    } else if (directions[i] === 'left' && orientation === 'r') { //orientation right
      orientation = 'up';
      position[1] += directions[i + 1];
    } else if (directions[i] === 'right' && orientation === 'r') {
      orientation = 'down';
      position[1] -= directions[i + 1];
    } else if (directions[i] === 'left' && orientation === 'l') { //orientation left
      orientation = 'down';
      position[1] -= directions[i + 1];
    } else if (directions[i] === 'right' && orientation === 'l') {
      orientation = 'up';
      position[1] += directions[i + 1];
    } else if (directions[i] === 'left' && orientation === 'up') { //orientation up
      orientation = 'l';
      position[0] -= directions[i + 1];
    } else if (directions[i] === 'right' && orientation === 'up') {
      orientation = 'r';
      position[0] += directions[i + 1];
    } else if (directions[i] === 'left' && orientation === 'down') { //orientation down
      orientation = 'r';
      position[0] += directions[i + 1];
    } else if (directions[i] === 'right' && orientation === 'down') {
      orientation = 'l';
      position[0] -= directions[i + 1];
    }
  }
  output.east = position[0];
  output.north = position[1];
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
