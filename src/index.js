module.exports = function check(str, bracketsConfig) {
    // your solution
    const bracketsVar = {
        [')']: '(',
        [']']: '[',
        ['}']: '{',
        ['|']: '|',
        ['2']: '1',
        ['4']: '3',
        ['6']: '5',
        ['7']: '7',
        ['8']: '8',
    }
    let newStack = []
    for (let i = 0; i < str.length; i++) {
        let curBr = str[i]
        if (curBr === '(' || curBr === '[' || curBr === '{' || curBr === '1' || curBr === '3' || curBr === '5') {
              newStack.push(curBr)
        } else if (curBr === '|' || curBr === '7' || curBr === '8') {
          let lastSym = newStack[newStack.length - 1]
          if (lastSym === curBr) {
              newStack.pop()
          } else {
              newStack.push(curBr)
          }
        } else if (curBr === ')' || curBr === ']' || curBr === '}' || curBr === '2'|| curBr === '4'|| curBr === '6'){
          if (!newStack.length) {
              newStack.push(curBr)
          } else {
              let lastSym = newStack[newStack.length - 1]
              for (let key in bracketsVar) {
                  if (bracketsVar[key] === lastSym && bracketsVar[curBr] === lastSym) {
                      newStack.pop()
                  }
              }
          }    
          }
    }
    return newStack.length === 0
  }
