let lobos = JSON.parse(localStorage.getItem('lobos'))
document.querySelector("button").addEventListener("click", () => {
    lobos.push({
        id: lobos.length + 1,
        nome: document.querySelector("input[name='nome']").value,
        idade: document.querySelector("input[name='idade']").value,
        descricao: document.querySelector("textarea").value,
        imagem: document.querySelector("input[name='foto']").value,
        adotado: false
    })
    localStorage.setItem('lobos', JSON.stringify(lobos))
})