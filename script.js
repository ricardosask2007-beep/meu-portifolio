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