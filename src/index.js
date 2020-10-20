const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',    
};

function decode(expr) {
    let arr = [];  
  let array = expr.split('');
  for (let i = 0; i<array.length; i+=10) {
    arr.push(expr.slice(i,i+10));
  }

  let result = arr.map( function (el) {
    if (el === '**********') {return ' '}
    else {
      let arrNew = [];  
      let arrayNew = el.split('');
      for (let i = 0; i<arrayNew.length; i+=2) {
        console.log(el.slice(i,i+2));
        if (el.slice(i,i+2) === '00') {continue}
          else if (el.slice(i,i+2) === '10') {arrNew.push('.')}
               else if (el.slice(i,i+2) === '11') {arrNew.push('-')}
      } return MORSE_TABLE[arrNew.join('')];              
    }
  });

  return result.join('');
}


module.exports = {
    decode
}