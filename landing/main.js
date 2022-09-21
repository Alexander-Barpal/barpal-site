const body = document.getElementById('body')
const cont = document.getElementById('cont')
const modalCont = document.getElementById('modalCont');

(() => {
  const modalBtns = Array.from(document.querySelectorAll('modal-button'));
  modalBtns.forEach(btn => {
    btn.onclick = function() {
      const modal = btn.getAttribute('data-modal');
      modalCont.style.display = 'block';
      modalCont.classList.add('backgroundIn');
      document.getElementById(modal).classList.add('modalIn');
      cont.classList.add('shrink');
      body.style.overflow = 'hidden';
    }
  });
  
  const closeBtns = Array.from(document.querySelectorAll(".close"));
  closeBtns.forEach(btn => {
    btn.onclick = function() {
      let modal = btn.closest('.modal');
      modal.classList.add('modalOut');
      modalCont.classList.add('backroundOut');
      cont.classList.add('expand');
      modal.style.display = "none";
      body.style.overflow = 'visible';
      
    }
  });
  
  window.onclick = function(event) {
    if (event.target.className === "modal") {
      //event.target.style.display = "none";
      modal.classList.add('modalOut');
      modalCont.classList.add('backroundOut');
      cont.classList.add('expand');
      modal.style.display = "none";
      body.style.overflow = 'visible';
    }
  }
  })();









/*
function openModal(id){
  
  modalId = id
  modalCont.style.display = 'block';
  modalCont.classList.add('backgroundIn');
  modal = document.getElementById(id);
  modal.classList.add('modalIn');
  body.classList.add('modal-active');
  cont.classList.add('shrink');
}

function closeModal() {
  modal = document.getElementById(modalId);
  modal.classList.add('modalOut');
  modalCont.classList.add('backroundOut');
  cont.classList.add('expand');
  body.classList.remove('modal-active');
  modalCont.style.display = 'hidden';
}

window.onclick = function(event){
  console.log('button clicked')
  modal = document.getElementById(modalId);
  if (event.target == modal) {
    modalCont.classList.add('backroundOut');
    modal.classList.add('modalOut');
    cont.classList.add('expand');
    body.classList.remove('modal-active');
    modalCont.style.display = 'hidden';
  }
}

var modalId;
var modal;*/