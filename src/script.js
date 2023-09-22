const rigth = document.querySelector('.rigth')
const left = document.querySelector('.left')
const container = document.querySelector('.container')

rigth.addEventListener('mouseenter', () => container.classList.add('hover-rigth'))
rigth.addEventListener('mouseleave', () => container.classList.remove('hover-rigth'))

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
