import { images } from './images.js'

const img = document.getElementById('motoScroll')
const sectionAnimation = document.getElementById('animation')
const MAX_FRAMES = 150

const updateImage = (frame) => {
  const src = images?.[frame]?.p
  img.src = src
}

updateImage(0)

let maxScroll = sectionAnimation.scrollHeight - window.innerHeight

window.addEventListener('resize', () => {
  maxScroll = sectionAnimation.scrollHeight - window.innerHeight
})

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY
  const frame = Math.floor(scrollPosition / maxScroll * MAX_FRAMES)

  updateImage(frame < 151 ? frame : 150)
})
