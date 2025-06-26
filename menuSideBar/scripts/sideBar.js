const elementsToCollapse = ['.sideBar', '.links', '.title', '.text'];

function closeSideBar() {
    elementsToCollapse.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('collapsed');
        });
    });

    
}

function openSideBar() {
    elementsToCollapse.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.remove('collapsed');
        });
    });
}