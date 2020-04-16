let takeANumber = (katzDeliLine, newPerson) => {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

let nowServing = katzDeliLine => {
  if (katzDeliLine.length > 0) {
    return `Currently serving` + katzDeliLine.shift() + `.`;
    // katzDeliLine.shift();
    
  } else {
    return `There is nobody waiting to be served!`
  }
}