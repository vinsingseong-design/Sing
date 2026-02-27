document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing-text");
    const text = "Vinsinggz.";
    let index = 0, isDeleting = false;

    const typingSpeed = 200;
    const deletingSpeed = 70;
    const pauseAfterType = 1500;

    function typeLoop() {
        if (!typingElement) return;

        if (!isDeleting && index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeLoop, typingSpeed);

        } else if (isDeleting && index > 0) {
            typingElement.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(typeLoop, deletingSpeed);

        } else if (!isDeleting && index === text.length) {
            setTimeout(() => isDeleting = true, pauseAfterType);
            setTimeout(typeLoop, pauseAfterType);

        } else if (isDeleting && index === 0) {
            isDeleting = false;
            setTimeout(typeLoop, 500);
        }
    }

    typeLoop();
});
