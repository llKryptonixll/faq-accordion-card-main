const openAccordionButtons = document.querySelectorAll(".accordion_button");
openAccordionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        handleClick(index)
    });
}) 

function handleClick(index) {
    const accordions = document.querySelectorAll(".accordion_content");
    accordions.forEach((accordion) => {
        accordion.classList.add("opacity-0", "h-0", "scale-0");

        const faq_question = accordion.parentNode.childNodes[1].childNodes[1];
        faq_question.classList.remove("font-bold", "text-very_dark_desaturated_blue");

        const arrowIcon = accordion.parentNode.childNodes[1].childNodes[3];
        arrowIcon.classList.remove("rotate-[180deg]");
    });
    accordions[index].classList.add("opacity-1");
    accordions[index].classList.remove("opacity-0", "h-0", "scale-0");

    const faq_question = accordions[index].parentNode.childNodes[1].childNodes[1];
    faq_question.classList.add("font-bold", "text-very_dark_desaturated_blue");

    const arrowIcon = accordions[index].parentNode.childNodes[1].childNodes[3];
    arrowIcon.classList.add("rotate-[180deg]");
}