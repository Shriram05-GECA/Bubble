<script>
  // Function to create a new bubble
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);

    // Random size
    const size = Math.random() * 60 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random position along the bottom
    bubble.style.left = `${Math.random() * 100}vw`;

    // Random color (some with rainbow gradient)
    if (Math.random() > 0.8) {
      bubble.style.borderImage = 'linear-gradient(45deg, red, orange, yellow, green, blue, purple) 1';
      bubble.style.borderImageSlice = 1;
    } else {
      const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33a1', '#a133ff'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      bubble.style.borderColor = randomColor;
    }

    // Bubble pop effect
    bubble.addEventListener('click', () => {
      const popSound = document.getElementById('popSound');
      popSound.play();

      // Remove bubble on click
      bubble.style.transform = 'scale(0)';
      bubble.style.transition = 'transform 0.2s ease-out';
      bubble.addEventListener('transitionend', () => bubble.remove());
    });

    // Remove bubble after it exits the viewport
    bubble.addEventListener('animationend', () => bubble.remove());
  }

  // Generate bubbles at random intervals
  setInterval(createBubble, 500);
</script>
