// Write a JavaScript program to find the diagonal of a square where the length of each
//side is 9.
const diagonalOfsquare = num => {
  return Math.sqrt(2) * num
}
let result1 = diagonalOfsquare(9)


// Write a JavaScript program to find the area of a triangle where lengths of the three of its
// sides are 5, 6 and 7
const areaOfTriangle = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 2
}
let result2 = areaOfTriangle(5, 6, 7)


// Write a JavaScript program to find the circumference and surface area of a circle whose
// radius is 4
const areaOfCircle = num => {
  let PI = 3.14
  return num * PI
}
let result3 = areaOfCircle(4)


// Write a JavaScript program that accepts two integers and displays the larger of the two.
const twoIntegers = (a, b) => {
  if (a > b) {
    return a
  } else {
    return b
  }
}



// Write a JavaScript program that checks whether an integer is an even or an odd number.

const oddOrEven = int => {
  if (int % 2 === 0) {
    return 'It is even'
  } else {
    return 'It is odd'
  }
}


// Assignment (Main JavaScript Project)
let computerSelection = (computerPlay = () => {
  let arr = ['paper', 'rock', 'scissors']
  let random = Math.floor(Math.random() * arr.length)
  return arr[random]
})
let playerSelection = prompt('Do you choose rock, paper or scissors?')

const game = () => {
  for (let i = 0; i < 5; i++) {
    let compare = (playRound = (playerSelection, computerSelection) => {
      let choice = ['paper', 'rock', 'scissors']

      if (playerSelection === computerSelection) {
        return 'The result is a tie!'
      } else if (playerSelection === choice[1]) {
        if (computerSelection === choice[2]) {
          return 'The result: rock wins'
        } else if (computerSelection === choice[0]) {
          return 'The result: paper wins'
        }
      } else if (playerSelection === choice[0]) {
        if (computerSelection === choice[2]) {
          return 'The result: scissors win'
        } else if (computerSelection === choice[1]) {
          return 'The result: paper wins'
        }
      } else if (playerSelection === choice[2]) {
        if (computerSelection === choice[0]) {
          return 'The result: scissors win'
        } else if (computerSelection === choice[1]) {
          return 'The result: rock wins'
        }
      }
    })
    console.log(compare(playerSelection, computerSelection()))
  }
}
game()
