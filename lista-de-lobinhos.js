const objetosPorPagina = 4
let paginaAtual = 1

function anterior() {
    if (paginaAtual > 1) {
        paginaAtual--
        listar()
    }
}

function proximo() {
    const totalPaginas = Math.ceil(lobos.length / objetosPorPagina);
    if (paginaAtual < totalPaginas) {
        paginaAtual++
        listar()
    }
}

function listar() {
    lista.innerHTML = ""
    const adotados = document.querySelector("#adotados")
    const inicio = (paginaAtual - 1) * objetosPorPagina
    const fim = inicio + objetosPorPagina
    let lobosPagina = []
    lobos.forEach(lobo => {
        if ((adotados.checked && lobo.adotado) || (!adotados.checked)) {
            if (lobo.nome.toUpperCase().includes(nome.toUpperCase())) {
                lobosPagina.push(lobo)
            }}
    })
    lobosPagina = lobosPagina.slice(inicio, fim)

    
    lobosPagina.forEach(lobo => {
        const h1 = document.createElement('h1')
        h1.innerHTML = lobo.nome

        const botao = document.createElement('button')
        if (lobo.adotado) {
            botao.style.backgroundColor = "red"
            botao.innerHTML = "Adotado"
        } else {
            botao.style.backgroundColor = "green"
            botao.style.cursor = "pointer"
            botao.innerHTML = "Adotar"
            botao.addEventListener('click', () => {
                window.location.href = `teste2.html?id=${encodeURIComponent(lobo.id)}`
            })
        }
        lista.append(h1, botao)
    })
}

let lobos = JSON.parse(localStorage.getItem('lobos'))
console.log(lobos.length)
let lista = document.querySelector("#lista")
const urlParams = new URLSearchParams(window.location.search)
let nome = urlParams.get('nome')
if (nome == null) {
    nome = ""
} else {
    const input = document.querySelector("#pesquisa")
    input.value = nome
}
const adotados = document.querySelector("#adotados")
adotados.addEventListener("click", () => {
    listar()
})

listar()