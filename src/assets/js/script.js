// JavaScript to handle hover and change the image
const attendeeItems = document.querySelectorAll('.attendee-item');
const imageFrame = document.getElementById('attendee-image');

attendeeItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Change the image when hovering over an attendee item
        const imageName = item.getAttribute('data-image');
        imageFrame.src = `src/assets/images/${imageName}`;
    });
});