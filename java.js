const textDisplay = document.getElementById('text')
const phrases = ['Welcome to BMM Group', 'Your Professional Service Partner', 'On a large scale infrastructre', '700+ Project Under Maintainance', 'Total Value of 245M Dollar ']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * ( 50-30) +30
  const normalSpeed = Math.random() * (30 -20) + 100
  const time = isEnd ? 1000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()