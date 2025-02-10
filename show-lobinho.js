const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

let lobos = JSON.parse(localStorage.getItem('lobos'))
lobos.forEach(lobo => {
    if (lobo.id == id) {
        document.querySelector("h1").innerHTML = lobo.nome
    }
})

function adotar() {
    window.location.href = `testeAdotar.html?id=${encodeURIComponent(id)}`
}

function excluir() {
    novosLobos = lobos.filter(lobo => lobo.id != id)
    localStorage.setItem('lobos', JSON.stringify(novosLobos))
}