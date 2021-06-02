//salva no localStorage os codigos digitados nos campos

const novoProjeto = document.querySelector('[data-botaoAdicionar]')
const nomeProjeto = document.querySelector('[data-nome-projeto]')
const descricaoProjeto = document.querySelector('[data-descricao-projeto]')
const tipoLinguagem = document.querySelector('[data-linguagem]')
const codigo = document.querySelector('[data-projeto]')
let numeroId = 1

// guarda no localStorage quando clicado no botao salvar
novoProjeto.addEventListener('click', ()=>{
    const projeto = montaProjeto()    
    salvaLocalStorage(projeto)
    
})

if(localStorage.length > 0) {
    numeroId = localStorage.length
}

//monta em formato objeto as informações dos campos
function montaProjeto() {
    let projetoSalvo = {
        'id': adicionaId(),
        'detalhesProjeto':{
            'projetoNome': nomeProjeto.value,
            'projetoDescricao': descricaoProjeto.value,
            'projetoLinguagem': tipoLinguagem.value,
            'codigo': codigo.textContent
        }
    }
    return projetoSalvo
}

//adiciona o id para a chave do localStorage
function adicionaId() {
    if(localStorage.length == 0){
        return 0
    } else {
        if (localStorage.length == numeroId) {
            let novoId = numeroId
            numeroId++
            return novoId
        }
    }
}

// salva e converte para formato string no localStorage
function salvaLocalStorage(objetoJSON) {
    localStorage.setItem(objetoJSON.id, JSON.stringify(objetoJSON))
}
   