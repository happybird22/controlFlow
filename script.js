//Part One

const PI = 3.1415;
const radius = 5
const area = PI * radius * radius;
const plantSpace = 0.8;
const maxCap = area / plantSpace;
const plant = 20;

let weeks = n //fill in later
let futurePlants = plant * (2 ** weeks);

if (futurePlants > maxCap * 0.8) {
    console.log('Pruning Needed')
} else if (futurePlants >= maxCap * 0.5) {
    console.log('Growth Acceptable')
} else {
    console.log('More plants needed')
}


