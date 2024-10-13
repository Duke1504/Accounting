document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("mainImage");
    
    const options = document.querySelectorAll('input[name="option"]');
    options.forEach(option => {
        option.addEventListener("change", function () {
            if (option.id === "option1") {
                mainImage.src = "./img/1.png";
            } else if (option.id === "option2") {
                mainImage.src = "./img/2.png";
            } else if (option.id === "option3") {
                mainImage.src = "./img/3.png";
            } else if (option.id === "option4") {
                mainImage.src = "./img/4.png";
            }
        });
    });
});

function toggleAnswer(button) {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
    const span = button.querySelector('span');
    span.textContent = faqItem.classList.contains('active') ? '-' : '+';
}
