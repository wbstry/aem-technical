export default function decorate(block) {
    Array.from(block.children).forEach((row, i) => {
       if (i === 0) {
           row.classList.add('faq-header');
       } else {
           row.classList.add('faq-question');
           const questionElements = Array.from(row.children);

           questionElements[0].classList.add('faq-question-title');
           questionElements[1].classList.add('faq-question-answer');

           questionElements[0].addEventListener('click', (e) => {
               questionElements[1].classList.toggle('active');
           })
       }
    });
}
