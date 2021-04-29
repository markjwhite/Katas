const PI = Math.PI;

//function for sphere volume
const sphereVolume = (radius) => {
  return (4 / 3) * PI * Math.pow(radius, 3);
};

//function for cone volume
const coneVolume = (radius, height) => {
  return 1 / 3 * PI * Math.pow((radius), 2) * (height);
};

//function for prism volume
const prismVolume = (height, width, depth) => {
  return (height) * (width) * (depth);
};

//finds sum of specified volume
totalVolume = (solids) => {
  let vol = 0;
  for (const solid of solids) {
    if (solid.type === 'sphere') {
      vol += sphereVolume(solid.radius);
    } else if (solid.type === 'cone') {
      vol += coneVolume(solid.radius, solid.height);
    } else if (solid.type === 'prism') {
      vol += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return vol;
};

// shape objects
const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

//object we are going to calculate
const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(totalVolume(duck));

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);