function hideSectionsWithDelay() {
    setTimeout(() => {
        const sidebarColumn = document.querySelector('[data-testid="sidebarColumn"]');
        if (sidebarColumn) {
            const sectionElements = sidebarColumn.querySelectorAll('section');
            if (sectionElements.length > 0) {
                sectionElements.forEach(section => {
                    section.style.display = 'none';
                });
            }
        }
    });
}

window.onload = function () {
    hideSectionsWithDelay();
};

document.addEventListener('DOMContentLoaded', function () {
    hideSectionsWithDelay();
});

const observer = new MutationObserver(() => {
    console.log('Mutation observed');
    hideSectionsWithDelay();
});
observer.observe(document.body, { childList: true, subtree: true });
