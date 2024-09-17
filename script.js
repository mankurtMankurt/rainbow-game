document.addEventListener('DOMContentLoaded', () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const messageBox = document.getElementById('message');
    const rainbowColors = document.querySelectorAll('.rainbow .color');

    document.querySelectorAll('.object').forEach(object => {
        object.addEventListener('click', () => {
            const color = object.getAttribute('data-color');
            
            if (colors.includes(color)) {
                const colorIndex = colors.indexOf(color);
                
                if (rainbowColors[colorIndex].style.backgroundColor === 'grey') {
                    rainbowColors[colorIndex].style.backgroundColor = color;
                    messageBox.textContent = `Great! You found the ${color} color!`;
                } else {
                    messageBox.textContent = `You've already found the ${color} color.`;
                }
            }
            
            if (Array.from(rainbowColors).every(col => col.style.backgroundColor !== 'grey')) {
                messageBox.textContent = 'Hooray! You completed the rainbow!';
            }
        });
    });
});
