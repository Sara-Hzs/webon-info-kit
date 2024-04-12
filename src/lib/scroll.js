export function scrollTo(node) {
    node.addEventListener('click', event => {
        event.preventDefault();
        const targetId = node.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}