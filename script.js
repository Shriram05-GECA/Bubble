
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  document.body.appendChild(bubble);

  // Random bubble size and color
  const size = Math.random() * 60 + 20;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  // Random position along the bottom of the viewport
  bubble.style.left = `${Math.random() * 100}vw`;

  // Assign a color border (some with rainbow effect)
  if (Math.random() > 0.7) {
    bubble.style.borderImage = 'linear-gradient(45deg, red, orange, yellow, green, blue, purple) 1';
    bubble.style.borderImageSlice = 1;
  } else {
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33a1', '#a133ff'];
    bubble.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
  }

  // Bubble popping effect
  bubble.addEventListener('click', () => {
    document.getElementById('popSound').play();
    bubble.style.transform = 'scale(0)';
    bubble.style.transition = 'transform 0.2s ease-out';
    bubble.addEventListener('transitionend', () => bubble.remove());
  });

  // Remove bubble after it exits the viewport
  bubble.addEventListener('animationend', () => bubble.remove());
}

// Generate bubbles at random intervals
setInterval(createBubble, 700);
