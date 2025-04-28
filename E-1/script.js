const modalOpen = document.querySelector('.notice > ul > li:first-child');
const modal = document.querySelector('dialog');
modalOpen.addEventListener('click', (e) =>{
    modal.showModal();
})