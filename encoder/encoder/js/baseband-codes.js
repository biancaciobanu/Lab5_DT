/* function getManchesterLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
} */

 // Return to zero method
function getReturnToZeroEncoding(bits) {
  var result  = [];
  for (var i = 0; i < bits.length; i++) {
      if (parseInt(bits[i].value) == 1) symbol = '_-';
      if (parseInt(bits[i].value) == 0) symbol = '__';
      result.push(symbol);
  }
  return result;
}


// Non Return to zero  
function getNRZEncoding(bits){
  var result = [];
  for (var i = 0; i < bits.length; i++) {
      if (parseInt(bits[i].value) == 1) symbol = ' - ';
      else if (parseInt(bits[i].value) == 0) symbol = ' _ ';
      result.push(symbol);
      
  }
  return result;
}

// Non Return to zero  
function getNRZEncoding(bits){
  var result = [];
  for (var i = 0; i < bits.length; i++) {
      if (parseInt(bits[i].value) == 1) symbol = '--';
      else if (parseInt(bits[i].value) == 0) symbol = '__';
      result.push(symbol);
      
  }
  return result;
}


//No return to zero mark
function getNRZMEncoding(bits){
  var result = [];
  if (parseInt(bits[0].value) == 1) symbol = '--';
  else if (parseInt(bits[0].value0) == 0)symbol = '__';  
  for (var i = 1; i < bits.length; i++) {
		   if (parseInt(bits[i].value) == 1 && parseInt(bits[i-1].value) == 1) symbol = '__';
	  else if (parseInt(bits[i].value) == 1 && parseInt(bits[i-1].value) == 0) symbol = '--';
	  else if (parseInt(bits[i].value) == 0 && parseInt(bits[i-1].value) == 1) symbol = '--';
	  else if (parseInt(bits[i].value) == 0 && parseInt(bits[i-1].value) == 0) symbol = '__';
      result.push(symbol); 
  }
  return result;
}

//Non return to zero space
function getNRZSEncoding(bits){
  var result = [];
  if (parseInt(bits[0].value) == 1) symbol = '--';
  else if (parseInt(bits[0].value0) == 0)symbol = '__';  
  for (var i = 1; i < bits.length; i++) {
		   if (parseInt(bits[i].value) == 0 && parseInt(bits[i-1].value) == 1) symbol = '__';
	  else if (parseInt(bits[i].value) == 0 && parseInt(bits[i-1].value) == 0) symbol = '--';
	  else if (parseInt(bits[i].value) == 1 && parseInt(bits[i-1].value) == 1) symbol = '--';
	  else if (parseInt(bits[i].value) == 1 && parseInt(bits[i-1].value) == 0) symbol = '__';
      result.push(symbol); 
  }
  return result;
}

//Biphase level
function getBLEncoding(bits){
  var result = [];
  if (parseInt(bits[0].value) == 1) symbol = '--';
  else if (parseInt(bits[0].value0) == 0)symbol = '__';  
  for (var i = 1; i < bits.length; i++) {
		   if (parseInt(bits[i].value) == 1) symbol = '-_';
	  else if (parseInt(bits[i].value) == 0) symbol = '_-';	  
  }
  return result;
}

