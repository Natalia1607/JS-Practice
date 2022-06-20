const tabs = document.getElementById('tabs');
const contents = document.querySelectorAll('.content');
const nameCat = document.querySelectorAll('.name');

const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
        if(contents[i].dataset.content === currTab) {
            contents[i].classList.add('active');
        }
    }
    for(let i = 0; i < nameCat.length; i++) {
        nameCat[i].classList.remove('active');
        if(nameCat[i].dataset.name === currTab) {
            nameCat[i].classList.add('active');
        }
    }
})

