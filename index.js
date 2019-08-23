// test 1
const shout = string =>{
  return string.toUpperCase();
};

// test 2
const whisper = string =>{
  return string.toLowerCase();
};

// test 3
const logShout = string =>{
  console.log(string.toUpperCase());
};

// test 4
const logWhisper = string =>{
  console.log(string.toLowerCase());
};

// test 5
var sayHiToGrandma = string =>{
  let newString = string.toLowerCase()
  if (string === newString){
    return "I can\'t hear you!!"
  }
}

// test 6
var sayHiToGrandma = string =>{
  let newString = string.toUpperCase()
  if(string === newString){
    return "YES INDEED!"
  }
}

// test 7
var sayHiToGrandma = string =>{
  const greeting = "I love you, Grandma."
  if(string === greeting){
    return "I love you, too."
  }
}

  
