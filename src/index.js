module.exports = function check(str, bracketsConfig) {
   const openElement = ['(', '[', '{', '1', '3', '5'];
    const closeElement = {
       ')': '(',
       '}': '{',
       ']': '[',
       '2': '1',
       '4': '3',
       '6': '5',
    }
   let buffer = [];
   for (let i in str) {
       const element = str[i];
 
       if (openElement.includes(element) || (element === '|' || element === '7' || element === '8') && !buffer.includes(element)) {
          buffer.push(element);
       } else {
          if (buffer.length === 0) {
             return false;
          }
          const copy = buffer[buffer.length - 1];
 
          if (closeElement[element] === copy || (element === "|" || element === "7" || element === "8")) {
             buffer.pop();
          } else {
             return false;
          }
       }
    }
 
    return buffer.length === 0;
}
