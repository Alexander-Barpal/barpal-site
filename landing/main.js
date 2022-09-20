

const body = document.getElementById('body')
const cont = document.getElementById('cont')
const modalCont = document.getElementById('modalCont');



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
var modal;