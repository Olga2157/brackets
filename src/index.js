module.exports = function check(str, bracketsConfig) {
  let closedToOpen = new Map();
  let stack = [];
  // initialise close to open bracket map
  for (let config of bracketsConfig) {
      closedToOpen.set(config[1], config[0]);
  }
  for (let i=0; i<str.length; i++) {
      let curBracket = str[i];
      // open bracket === closed bracket
      if (closedToOpen.get(curBracket) === curBracket) {
          if (curBracket === stack[stack.length - 1]) {
              // everything is fine, remove last elem and go to the next elem
              stack.pop();
          } else {
              // put open bracket to the stack
              stack.push(curBracket);
          }
      }
      // if bracket is open bracket
      else if (!closedToOpen.has(curBracket)) {
          // put open bracket to the stack
          stack.push(curBracket);
      } else {
          if (closedToOpen.get(curBracket) === stack[stack.length - 1]) {
              // everything is fine, remove last elem and go to the next elem
              stack.pop();
          } else {
              // last bracket(closed bracket) is not closing last open bracket
              return false;
          }
      }
  }
  if (stack.length === 0) {
      return true;
  } else {
      return false;
  }
  // return stack.length === 0;
};