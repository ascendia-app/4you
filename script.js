document.addEventListener('mousemove', function(e) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.color = '#fff';
    
    document.body.appendChild(sparkle);

    // Fade and remove
    setTimeout(() => {
        sparkle.style.transition = '0.5s';
        sparkle.style.opacity = '0';
        sparkle.style.transform = 'translateY(20px)';
    }, 100);

    setTimeout(() => {
        sparkle.remove();
    }, 600);
});
