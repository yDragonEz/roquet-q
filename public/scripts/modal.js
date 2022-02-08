export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')
    

    cancelButton.addEventListener("click", close)

    function open(){
        //functionalidade de inserir active na modal
        modalWrapper.classList.add('active');
    }
    function close(){
        //funcionalidade de remover active da modal
        modalWrapper.classList.remove('active');
    }

    return{
        open
    }
}