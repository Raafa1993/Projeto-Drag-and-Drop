/**APP*/
const cards = document.querySelectorAll('.card') // Seleciona todos os card
const dropzones = document.querySelectorAll('.dropzone') // Seleciona todos os card

//DRAGSTART quando começa a arrar o elemento
//DRAG quando o elemento esta sendo arrastado
//DRAGEND quando o elemento para de ser arrastado

/**Cartoes*/
cards.forEach(card => { // função que percorre cada card
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    //console.log('CARD: Start dragging')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}

function drag() {
    //console.log('CARD: Is dragging')
}

function dragend() {
    //console.log('CARD: Stop drag!')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')
}

/* Local onde os cartões serão soltos */

//GRAGENTER quando o elemento for solto na zona
//DRAGOVER quando o elemento estiver emcima do elemento onde ele for solto
//DRAGLEAVE quando o elemento sair de onde ele precisava ser solto
//DROP quando o elemento for solto

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
    //console.log('dropzone: Entrou na zona')
}

function dragover() {
    //console.log('dropzone: Estou na zona')
    this.classList.add('over')

    // pegue o cartão
    const cardBegingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBegingDragged)
}

function dragleave() {
    //console.log('dropzone: Saiu da zona')
    this.classList.remove('over')
}

function drop() {
    //console.log('dropzone: Solto')
    this.classList.remove('over')
}