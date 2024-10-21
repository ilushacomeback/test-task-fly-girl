(function init() {
    const girl = document.querySelector('.girl')

    girl.addEventListener('animationend', () => {
        girl.style.bottom = '20px'
        girl.style.animation = 'levitate 8s ease 0s infinite'
    })
})()