const _ = {
  /*clamp(num, minX, maxX){//MY IMPLEMENTATION 
  if(num >= minX && num <= maxX){
    return num
  }else if(num < minX){
    return minX
  }else if(num > maxX){
    return maxX
  }
  */
  clamp(num, min, max){ 
   return Math.min(Math.max(num, min), max)
  }, //CODECAD IMPLEMENTATION
                                      /////////////////INRANGE
    inRange(num, init, fin){
      var start = init
      var end = fin
      if(fin === undefined){
        start = 0;
        end = init
      } else if (fin < init){
        start = fin
        end = init
      }
      if (num < end && num >= start){
        return true
      } else {
        return false
      }
      
    },
  ////////////////////////words
  words(strArr){
   return strArr.split(' ');
  },
  /////////////////////////pad
  pad(string, amount){
    if(string.length < amount){
      var padded = " "
     padded = padded.repeat(Math.floor((amount - string.length)/2)) + string + padded.repeat(Math.ceil((amount-string.length)/2))
      return padded
    } else { return string}
  },
  ////////////////////////////////////has
  has(object, key){
    var hasValue = false;
    if (object[key] !== undefined){
      hasValue = true;
    } return hasValue;
  },
  //////////////////////////////invert
  invert(object){
    var inversionObj = {}
    var objectVals = Object.values(object);
    var objectKeys = Object.keys(object);
    for(let i = 0; i<objectKeys.length; i++){
      inversionObj[objectVals[i]] = objectKeys[i];
      }
    return inversionObj;
  },
  ///////////////////////////////findKey
  /* This is an OVERLY LENGTHY solution. A better use would have been to use a for...in loop to iterate through each element of an object. In this solution, keys and values were turned into 2 seperate arrays, and were evaluated using a for loop to iterate through each array. */
  findKey(object, func){
    var keys = Object.keys(object);
    var values = Object.values(object);
    var matchFound = false
    var matchAtValue = undefined
    var i = 0
    console.log(keys)
    console.log(values)
  for (i;i<values.length;i++){
    if(func(values[i]) === true){
      matchFound = true;
      matchAtValue= i;
      break;
    }
  }
     
   
     if (matchFound === true){
      return keys[matchAtValue]
    } else { return undefined}
      } ,
  ////////////////////////////////////////DROP
  drop(array, numToDrop){
    var droppedArray = array
    if (isNaN(numToDrop)){
      droppedArray.splice(0,1)}
    else{droppedArray.splice(0, numToDrop)}
    return droppedArray
  },
///////////////////////////////////////DROPWHILE
  //PredicateFunc: xxxxx(currentElement, currentIndex, wholeArray)
 
  dropWhile(array,func){
       var droppedArray = array;
    var falseTrigger = false;
    var falseIndex = 0
    var i = 0
    while(falseTrigger === false && i < array.length){
      if(func(array[i],i,array)===false){
        falseTrigger = true;
        falseIndex = i;
        }i++}
    if (falseTrigger === false) {
      this.drop(array, array.length)
    } else{ return this.drop(array,falseIndex )}
 
    },
  chunk(array,size){
  var chunkySize = size
  if(size === undefined){
    chunkySize = 1}
  var toChunk = array.length
  var chunked = []
  while(toChunk > 0){
  var chunkyBits = array.splice(0,chunkySize)
  chunked.push(chunkyBits);
  toChunk -= chunkySize
  }
    return chunked
      
    }
      
    }
   
  
  
  

  



// Do not write or modify code below this line.
module.exports = _ 
