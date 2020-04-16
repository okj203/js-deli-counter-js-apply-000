let takeANumber = (katzDeliLine, newPerson) => {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

let nowServing = katzDeliLine => {
  return `Currently serving ${katzDeliLine[0]}`;
  katzDeliLine.shift(katzDeliLine);
}