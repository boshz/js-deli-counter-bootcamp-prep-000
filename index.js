var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  for (var i = 0; i < katzDeliLine.length; i++) {
    katzDeliLine.push(name);
    console.log("Welcome, "+ `${katzDeli[i]}`+ ". You are number "+(i+1)+ " in line." )
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 1) {
    return "The line is currently: 1. "+katzDeliLine;
  } else if
}