// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)


function vowelIndices(word){
    let arr = word.split('')
    let finalArr = []
    arr.forEach((x, i) => {
      if (x.toLowerCase() === 'a'){
        finalArr.push(i+1)
      } else if (x.toLowerCase() === 'e'){
        finalArr.push(i+1)
      } else if (x.toLowerCase() === 'i'){
        finalArr.push(i+1)
      } else if (x.toLowerCase() === 'o'){
        finalArr.push(i+1)
      } else if (x.toLowerCase() === 'y'){
        finalArr.push(i+1)
      } else if (x.toLowerCase() === 'u'){
        finalArr.push(i+1)
      }
    })
    return finalArr
  }
  