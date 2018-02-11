var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  for (var i = 0; i < katzDeliLine.length; i++) {
    katzDeliLine.push(name);
    console.log("Welcome, "+ `${katzDeli[i]}`+ ". You are number "+(i+1)+ " in line." )
  }
}

