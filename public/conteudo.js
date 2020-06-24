const modalCurso=document.querySelector('.modal-curso-overlay')
const cardsCurso=document.querySelectorAll('.card-curso')
const maximize=document.querySelector('.modal-curso').classList


for(let card of cardsCurso){
    card.addEventListener("click", function () {
        RocketID=card.getAttribute('id')
        modalCurso.classList.add('active')
        document.querySelector('.iframe-curso').src=`https://rocketseat.com.br/${RocketID}`
    })
    
}

document.querySelector('.close-curso-modal').addEventListener("click",function () {
    modalCurso.classList.remove('active')
})


document.querySelector('.maximize').addEventListener("click", function () {
  // document.querySelector('.modal-curso').classList.toggle('max')
  maximize.contains('max') ? maximize.remove('max'): maximize.add('max')
 
})