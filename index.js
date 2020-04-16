let takeANumber = (katzDeliLine, newPerson) => {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}


let nowServing = katzDeliLine => {
  if (katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + ".";
    
  } else if (katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`
  }
}


// let currentLine = katzDeliLine => {
//   if (katzDeliLine.length === 0) {
//     return `The line is currently empty.`
    
//   }else {
//     let newLine = '';
//     for (let i = 0; i < katzDeliLine.length - 1; i++) {
//       newLine += (i + 1) + '. ' + katzDeliLine[i] + ', '
     
//     }
//     newLine = newLine.slice(0, -2);
//   }
//   return newLine;
// }


function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var output = "";
    for(var i = 0; i < katzDeliLine.length; i++) {
        output += (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
    output = output.slice(0, -2);
    return `The line is currently: ${output}`;
  } else {
    return "The line is currently empty.";
  }
}
