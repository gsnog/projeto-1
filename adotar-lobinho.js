let lobos = JSON.parse(localStorage.getItem('lobos'))
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
let h1 = document.querySelector('h1')
lobos.forEach(lobo => {
    if (lobo.id == id) {
        h1.innerHTML = lobo.nome
    }
})

function adotar() {
    lobos.forEach(lobo => {
        if (lobo.id == id) {
            lobo.adotado = true
            lobo.nomeDono = document.querySelector("input[name='nome']")
            lobo.idadeDono = document.querySelector("input[name='idade']")
            lobo.emailDono = document.querySelector("input[name='email']")
        }
    })
    localStorage.setItem('lobos', JSON.stringify(lobos))
    window.location.href = teste.html
}