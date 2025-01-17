const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => hightlightCups(idx));
});

function hightlightCups(idx) {
  if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--;
  }
  smallCups.forEach((cup, index) => {
    if (index <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 330}px`;
    percentage.innerText = `${fullCups / totalCups * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    listers.innerText = `${2 - (250 * fullCups / 1000)}L`;
  }
}
