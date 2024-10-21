document.getElementById('heartButton').addEventListener('click', function(e) {
    const button = e.target;
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
  
    const x = e.clientX - button.offsetLeft;
    const y = e.clientY - button.offsetTop;
  
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
  
    button.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 1000);
  });
  