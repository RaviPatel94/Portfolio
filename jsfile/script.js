document.addEventListener('mousemove', moveEyes);

function moveEyes(event) {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach(eye => {
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    const deltaX = event.clientX - eyeCenterX;
    const deltaY = event.clientY - eyeCenterY;
    const angle = Math.atan2(deltaY, deltaX);
    const moveDistance = 2; 
    const xMove = Math.cos(angle) * moveDistance;
    const yMove = Math.sin(angle) * moveDistance;
    eye.style.transform = `translate(${xMove}px, ${yMove}px)`;
  });
}

const catimg = document.querySelector('.catimg')

catimg.addEventListener("click", function grab(){
    catimg.style.cursor="grabbing";
    setTimeout(function(){catimg.style.cursor="grab";}, 200);
} )