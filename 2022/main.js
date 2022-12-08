/*
Advent of Code 1
*/

let arr = document.querySelector('pre').innerHTML
arr = arr.split('\n\n')
arr = arr.map(item => item.includes('\n') ? item = item.split('\n').reduce((a,b) => a + +b, 0) : +item)
Math.max(...arr)

/*
Advent of Code 2
*/

arr = arr.sort((a,b) => b - a)
arr[0] + arr[1] + arr[2]

/*
Advent of Code 3
*/

let sum = 0
let arr = document.querySelector('pre').innerHTML
arr = arr
      .split('\n')
      .forEach(item => item == 'A X' ? sum += 1 + 3
                    :  item == 'B X' ? sum += 1 + 0
                    :  item == 'C X' ? sum += 1 + 6
                    :  item == 'A Y' ? sum += 2 + 6
                    :  item == 'B Y' ? sum += 2 + 3
                    :  item == 'C Y' ? sum += 2 + 0
                    :  item == 'A Z' ? sum += 3 + 0
                    :  item == 'B Z' ? sum += 3 + 6
                    :  item == 'C Z' ? sum += 3 + 3
                    :  sum += 0)

/*
Advent of Code 4
*/

let sum = 0
let arr = document.querySelector('pre').innerHTML
arr = arr
      .split('\n')
      .forEach(item => item == 'A X' ? sum += 3 + 0
                    :  item == 'B X' ? sum += 1 + 0
                    :  item == 'C X' ? sum += 2 + 0
                    :  item == 'A Y' ? sum += 1 + 3
                    :  item == 'B Y' ? sum += 2 + 3
                    :  item == 'C Y' ? sum += 3 + 3
                    :  item == 'A Z' ? sum += 2 + 6
                    :  item == 'B Z' ? sum += 3 + 6
                    :  item == 'C Z' ? sum += 1 + 6
                    :  sum += 0)

/*
Advent of Code 5
*/

let arr = document.querySelector('pre').innerHTML
arr = arr.split('\n')
arr = arr
        .map(item => item.slice(0, item.length / 2).split('')
          .filter(a => item.slice(item.length / 2)
          .includes(a))[0])
arr.pop()
arr = arr
        .map(item => /[A-Z]/.test(item) ? item.charCodeAt() - 38 : item.charCodeAt() - 96)
        .reduce((a,b) => a + b, 0)

/*
Advent of Code 6
*/

let arr = document.querySelector('pre').innerHTML
arr = arr.split('\n')
arr.pop()
let group = []
let sum = 0
for (let i = 0; i < arr.length; i += 3) {
    group = arr
            .slice(i, i + 3)
            .map(item => item.split(''))
            .sort((a,b) => a.length - b.length)
    console.log(group)
    group[0].some(item => {
        if (group[1].includes(item) && group[2].includes(item)) {
            if (/[A-Z]/.test(item)) {
                sum += item.charCodeAt() - 38
                return `${item}: ${sum}`
            } else if (/[a-z]/.test(item)) {
                sum += item.charCodeAt() - 96
                return `${item}: ${sum}`
            }
        }
    })
}


/*
Advent of Code 7
*/

let arr = document.querySelector('pre').innerHTML
arr = arr.split('\n')
arr.pop()
arr = arr.map(item => item.split(',').map(n => n.split('-')))
let count = 0
arr.forEach(item => {
  if ( (+item[0][0] <= +item[1][0] && +item[0][1] >= +item[1][1] ) || (+item[1][0] <= +item[0][0] && +item[1][1] >= +item[0][1]) ) {
      count += 1
      console.log(item)
      console.log(count)
  }
})

/*
Advent of Code 8
*/

let arr = document.querySelector('pre').innerHTML
arr = arr.split('\n')
arr.pop()
arr = arr.map(item => item.split(',').map(n => n.split('-')))
let count = 0
arr.forEach(item => {
  if ( (+item[1][0] <= +item[0][0] && +item[0][0] <= +item[1][1]) || (+item[0][0] <= +item[1][0] && +item[1][0] <= +item[0][1]) ) {
      count += 1
      console.log(item)
      console.log(count)
  }
})

/*
Advent of Code 9
*/

let one = ['Z', 'P', 'B', 'Q', 'M', 'D', 'N']
let two = ["V", "H", "D", "M", "Q", "Z", "L", "C"]
let three = ["G", "Z", "F", "V", "D", "R", "H", "Q"]
let four = ["N", "F", "D", "G", "H"]
let five = ["Q", "F", "N"]
let six = ["T","B","F","Z","V","Q","D"]
let seven = ["H","S","V","D","Z","T","M","Q"]
let eight = ["Q","N","P","F","G","M"]
let nine = ["M","R","W","B"]

let group = {one, two, three, four, five, six, seven, eight, nine}

let dir = document.querySelector('pre').innerHTML
dir = dir.split('\n').slice(10)
dir.pop()

let numOfBoxes = dir.map(item => +item.split(' ')[1])
let from = dir.map(item => +item.split(' ')[3])
let to = dir.map(item => +item.split(' ')[5])

function numToStr(arr) {
  return arr.map(item => item == 1 ? 'one' : item == 2 ? 'two' : item == 3 ? 'three' : item == 4 ? 'four' : item == 5 ? 'five' : item == 6 ? 'six' : item == 7 ? 'seven' : item == 8 ? 'eight' : 'nine')
}

from = numToStr(from)
to = numToStr(to)

for (let i = 0; i < dir.length; i++) {
  group[to[i]].unshift( ...group[from[i]].slice(0,numOfBoxes[i]).reverse() )
  group[from[i]] = group[from[i]].slice(numOfBoxes[i])
}

/*
Advent of Code 10
*/

let one = ['Z', 'P', 'B', 'Q', 'M', 'D', 'N']
let two = ["V", "H", "D", "M", "Q", "Z", "L", "C"]
let three = ["G", "Z", "F", "V", "D", "R", "H", "Q"]
let four = ["N", "F", "D", "G", "H"]
let five = ["Q", "F", "N"]
let six = ["T","B","F","Z","V","Q","D"]
let seven = ["H","S","V","D","Z","T","M","Q"]
let eight = ["Q","N","P","F","G","M"]
let nine = ["M","R","W","B"]

let group = {one, two, three, four, five, six, seven, eight, nine}

let dir = document.querySelector('pre').innerHTML
dir = dir.split('\n').slice(10)
dir.pop()

let numOfBoxes = dir.map(item => +item.split(' ')[1])
let from = dir.map(item => +item.split(' ')[3])
let to = dir.map(item => +item.split(' ')[5])

function numToStr(arr) {
  return arr.map(item => item == 1 ? 'one' : item == 2 ? 'two' : item == 3 ? 'three' : item == 4 ? 'four' : item == 5 ? 'five' : item == 6 ? 'six' : item == 7 ? 'seven' : item == 8 ? 'eight' : 'nine')
}

from = numToStr(from)
to = numToStr(to)

for (let i = 0; i < dir.length; i++) {
  group[to[i]].unshift( ...group[from[i]].slice(0,numOfBoxes[i]) )
  group[from[i]] = group[from[i]].slice(numOfBoxes[i])
}

/*
Advent of Code 11
*/

let str = document.querySelector('pre').innerHTML
let sp = ''
for (let i = 0; i < str.length - 6; i++) {
    sp = str.slice(i, i + 4)
    if ( [...new Set(sp.split(''))].join('') == sp ) {
        console.log(i + 4)
        break
    }
}

/*
Advent of Code 12
*/

let str = document.querySelector('pre').innerHTML
let sp = ''
for (let i = 0; i < str.length - 16; i++) {
    sp = str.slice(i, i + 14)
    if ( [...new Set(sp.split(''))].join('') == sp ) {
        console.log(i + 14)
        break
    }
}

/* incomplete
Advent of Code 13
*/

let arr = document.querySelector('pre').innerHTML.split('\n')
arr = arr.filter(item => /\d/.test(item))
arr = arr.map(item => +item.replace(/[^\d]/g,''))

/*
Advent of Code 14
*/


/*
Advent of Code 15
*/

let edge = document.querySelector('pre').innerHTML.split('\n')
edge.pop()
edge = (edge[0].length * 2) + ((edge.length - 2) * 2)

/*
Advent of Code 16
*/