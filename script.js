//Part One

const PI = 3.1415;
const radius = 5
const area = PI * radius * radius;
const plantSpace = 0.8;
const maxCap = area / plantSpace;
const plant = 20;

let weeks = 1 //change later
let futurePlants = plant * (2 ** weeks);

if (futurePlants > maxCap * 0.8) {
    console.log('Pruning Needed')
} else if (futurePlants >= maxCap * 0.5) {
    console.log('Growth Acceptable')
} else {
    console.log('More plants needed')
}

weeks = 2

weeks = 3

// Part two

const plants100 = 100
weeks = 10
futurePlants = plants100 * (2 ** weeks)

console.log(futurePlants)

futurePlants = 102400

console.log(futurePlants * plantSpace)

let newArea = 81920

let newRadius = (newArea / PI)**.5

console.log(newRadius)

newRadius = 161.4829

// Part Three

try {
    const requiredSpace = plants100 * plantSpace;

    if (requiredSpace > area) {
        throw 'Error: Area too small for all plants';
    }

    console.log('All plants fit');
} catch (error) {
    console.log(error);
}
