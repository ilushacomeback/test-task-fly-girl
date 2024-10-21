(function init() {
    const girl = document.querySelector('.girl')

    girl.addEventListener('animationend', () => {
        girl.style.bottom = '20px'
        girl.style.animation = 'two 2s linear 0s infinite'
    })
})()