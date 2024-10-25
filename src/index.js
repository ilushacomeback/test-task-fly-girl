(function init() {
  const girl = document.querySelector('.girl');
  const hole = document.querySelector('.black-hole');

  const animationHole = (e) => {
    if (e.animationName === 'holeBig') {
      girl.style.animation = 'girl 3s';
    } else {
      hole.removeEventListener('animationend', animationHole);
    }
  };

  const animationGirl = () => {
    hole.style.animation = 'holeSmall 3s';
    hole.style.width = '30%';
    hole.style.height = '5%';
    girl.style.bottom = '20px';
    girl.style.animation = 'levitate 8s ease 0s infinite';
    girl.removeEventListener('animationend', animationGirl);
  };

  hole.addEventListener('animationend', animationHole);
  girl.addEventListener('animationend', animationGirl);
})();
