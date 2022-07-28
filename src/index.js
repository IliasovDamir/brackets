module.exports = function check(str, bracketsConfig) {
 
  let bracketsConfigOpen = bracketsConfig.flat()
  let br0 = [];
  let br1 = []; 

  for (let i = 0; i < bracketsConfigOpen.length; i++) {
    if (i % 2 === 0) {
      br0.push(bracketsConfigOpen[i]);
    } else {
      br1.push(bracketsConfigOpen[i]);
    }
  }

  let stack = [];    
  for (let i = 0; i < bracketsConfigOpen.length; i++) {
    if (i % 2 == 0) {
      br0.push(bracketsConfigOpen[i])
    }
  }
  let array = str.split('');
  for (let i = 0; i < array.length; i++) {
    let top = stack[stack.length - 1];
    if (br1.includes(array[i]) && br0.indexOf(top) == br1.indexOf(array[i])) {
      stack.pop();
    }
    else {
      stack.push(array[i]);
    }
  }
  return stack.length === 0;
}