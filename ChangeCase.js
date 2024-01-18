const Input = ["MA", "SA", "I", "SCH", "OOL"]


// function to convert a character to lower case

convertChar=(char)=> char.toLowerCase()

// function to convert a given word to lower case using covertChar function

convertWord=(word)=> word.split('').map(convertChar).join('');


// function to convert an array of strings to array of lower case strings using convertWord function

convertArray=(arr)=>arr.map(convertWord)

const Output=convertArray(Input)


console.log(Output)





