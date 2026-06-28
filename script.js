// 1. BARRA DE PROGRESSO
const progressBar = document.getElementById('progress-bar')
window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight
    const progresso = (window.scrollY / total) * 100
    progressBar.style.width = progresso + '%'
})

// 2. REVEAL
document.querySelectorAll('section, .projeto, .card').forEach(el => {
    el.classList.add('reveal')
})
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel')
            observer.unobserve(entry.target)
        }
    })
}, { threshold: 0.1 })
document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

// 3. CARDS COMPETÊNCIAS
const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('ativo')
    })
})

// 4. MENU MOBILE
const menuToggle = document.getElementById('menuToggle')
const menuUl = document.querySelector('#menu ul')
menuToggle.addEventListener('click', () => {
    menuUl.classList.toggle('aberto')
})
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => menuUl.classList.remove('aberto'))
})

// 10. INFO PROJETO DESLIZANDO
const botoes = document.querySelectorAll('.btn-projeto')
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const info = botao.nextElementSibling
        info.classList.toggle('ativo')
    })
})