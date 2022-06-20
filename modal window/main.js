var btnOpen = document.getElementById('btn_open');
var modal = document.getElementById('wrapper__modal');

var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btn_close');

btnOpen.addEventListener('click',function(){
    modal.classList.add('active');
});

function closeModal(){
    modal.classList.remove('active');
}

overlay.addEventListener('click',closeModal);
btnClose.addEventListener('click',closeModal);


