const menuToggle = document.getElementById('menuToggle')
const menuUl = document.querySelector('#menu ul')

menuToggle.addEventListener('click', () => {
    menuUl.classList.toggle('aberto')
})

document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => menuUl.classList.remove('aberto'))
})

const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('ativo')
    })
})

const botoes = document.querySelectorAll('.btn-projeto')

botoes.forEach(botao => {

    botao.addEventListener('click', () => {

        const info = botao.nextElementSibling

        info.classList.toggle('ativo')

    })

})