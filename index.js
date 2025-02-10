let lobos = JSON.parse(localStorage.getItem('lobos'))

document.querySelector('div.exemplo1 div h4').innerHTML = lobos[0].nome
document.querySelector('div.exemplo1 div p.idade').innerHTML = `Idade: ${lobos[0].idade} anos`
document.querySelector('div.exemplo1 div p:not(.idade)').innerHTML = lobos[0].descricao

document.querySelector('div.exemplo2 div h4').innerHTML = lobos[1].nome
document.querySelector('div.exemplo2 div p.idade').innerHTML = `Idade: ${lobos[1].idade} anos`
document.querySelector('div.exemplo2 div p:not(.idade)').innerHTML = lobos[1].descricao