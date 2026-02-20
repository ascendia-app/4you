function openNote(message) {
    const overlay = document.getElementById('note-overlay');
    const text = document.getElementById('popup-text');
    
    text.innerText = message;
    overlay.style.display = 'flex';
}

// Close popup when clicking anywhere on the overlay
document.getElementById('note-overlay').addEventListener('click', function() {
    this.style.display = 'none';
});
