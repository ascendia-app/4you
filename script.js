const starContainer = document.getElementById('star-container');
const starCount = 50;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Randomize position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Randomize size
    const size = Math.random() * 3;
    
    // Randomize animation delay so they don't pulse at the same time
    const delay = Math.random() * 5;

    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${delay}s`;

    starContainer.appendChild(star);
}
