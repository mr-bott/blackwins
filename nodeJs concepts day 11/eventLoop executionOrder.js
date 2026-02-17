const fs=require('fs')

console.log('Program has started'); //top level

//2nd phase 
fs.readFile('./Files/input.txt', () => {
  console.log('File read complete!');
 
  //3rd phase 
  setTimeout(() => {
    console.log('Timer callback executed');
  }, 0);

  //2nd phase 
  setImmediate(() => {
    console.log('SetImmediate callback executed');
  });

  //higher priority
  process.nextTick(() => {
    console.log('Process.nextTick callback executed');
  });
});

console.log('Program has completed'); //top level

// Mainly Four Phases 
// 1.Timers 
// 2.IO,Polling
// 3.setImmadiate
// 4.Closed callbacks 