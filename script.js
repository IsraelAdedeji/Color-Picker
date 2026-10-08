const pickButton = document.getElementById('pickButton')
const resultText = document.getElementById('result')

pickButton.addEventListener('click', async () => {
    try {
        const eyeDropper = new Eyedropper();
        const picked = await eyeDropper.open();
        resultText.textContent = picked.sRGBHex;
    } catch (error) {
        resultText.textContent = 'Cancelled';
    }
});