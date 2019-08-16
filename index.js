var i=0
function takeANumber(currentLine) {
  currentLine.push(i++)
  return `Welcome, you are number ${i}.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return `There is nobody waiting to be served!`
  } else { 
    var userNumber = katzDeliLine.shift()
    return `Currently serving ${userNumber}.`
  }
}

function currentLine(katzDeliLine) {
  var newArray = []
  if (katzDeliLine.length===0) {
    return `The line is currently empty.`
  } else {
    for (let i=0; i<katzDeliLine.length; i++) {
      newArray.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${newArray}`
  }
}