const fs = require('fs');
const v8 = require('v8');

const writeLine = () => {
  return `Line!, Line!, Line!, Line!\n`
}

const checkMemoryNative = () => {
  console.log("Memory Usage: ", process.memoryUsage())
}

const printHeapStats = () => {
  console.log('Heap Status', v8.getHeapSpaceStatistics())
}

const usage = 100000000
let text =  'Start'


for (let i = 0; i < usage; i++) {
  fs.writeFile('memory.txt',writeLine(), 'utf-8', ()=>{
    console.log('Will I ever print')
  });
  if (i % 1000000 === 0) {
    checkMemoryNative();
    printHeapStats();
  }
}

