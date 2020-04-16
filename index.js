let takeANumber = (katzDeliLine, newPerson) => {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}


let nowServing = katzDeliLine => {
  if (katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + ".";
    // katzDeliLine.shift();
    
  } else if (katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`
  }
}


let currentLine = katzDeliLine => {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
    
  }else {
    let newLine = ''
    for (let i = 0; i < katzDeliLine.length - 1; i++) {
      let person = katzDeliLine[i];
      newLine += toString(i + 1) + '. ' + person + ','
     
    }
  }
  return  
}

