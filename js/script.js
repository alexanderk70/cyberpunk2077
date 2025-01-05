let ibg = document.querySelectorAll('.ibg')
for (let i = 0; i < ibg.length; i++) {
  if (ibg[i].querySelector('img')) {
    ibg[i].style.backgroundImage =
      'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'
  }
}
// -----------------------------------------------------------------------

let firstBlock = document.querySelector('.first-block')

setInterval(nextBG, 3500)

function nextBG() {
  if (firstBlock.style.backgroundImage == 'url("/img/firstBlock/BG1.jpg")') {
    firstBlock.style.backgroundImage = 'url("/img/firstBlock/BG2.jpg")'
  } else if (
    firstBlock.style.backgroundImage == 'url("/img/firstBlock/BG2.jpg")'
  ) {
    firstBlock.style.backgroundImage = 'url("/img/firstBlock/BG3.jpg")'
  } else if (
    firstBlock.style.backgroundImage == 'url("/img/firstBlock/BG3.jpg")'
  ) {
    firstBlock.style.backgroundImage = 'url("/img/firstBlock/BG1.jpg")'
  }
}

// -----------------------------------------------------------------------

let checkbox = document.querySelector('.form-block__checkbox')

checkbox.addEventListener('click', okCheckbox)

function okCheckbox(e) {
  this.classList.toggle('active')
  if (this.classList.contains('active')) {
    this.firstElementChild.checked = true
  } else {
    this.firstElementChild.checked = false
  }
}

// ----------------------------------------------------------------------
const parent_original = document.querySelector('.game-block .container')
const parent = document.querySelector('.game-block__flexTitle')
const item = document.querySelector('.game-block__images-block')

window.addEventListener('resize', function (event) {
  const viewport_width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  )
  if (viewport_width <= 600) {
    if (!item.classList.contains('done')) {
      parent.insertBefore(item, parent.children[1])
      item.classList.add('done')
    }
  } else {
    if (item.classList.contains('done')) {
      parent_original.insertBefore(item, parent_original.children[2])
      item.classList.remove('done')
    }
  }
})
