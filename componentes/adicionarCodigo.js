const mural = document.querySelector('[data-mural]')

function adicionaMural() {
    //criando os elementos para o mural
    const muralProjetos = document.createElement('div')
    muralProjetos.classList.add('caixa-projetos')

    const divisaoCodigo = document.createElement('div')
    divisaoCodigo.classList.add('caixa-projeto-textarea')

    const codigo = document.createElement('textarea')
    codigo.classList.add('container__projetos___textarea')

    //adicionando os filhos

    mural.appendChild(muralProjetos)
    muralProjetos.appendChild(divisaoCodigo)
    divisaoCodigo.appendChild(codigo)

}

const botao = document.querySelector('.botao-balao')

botao.addEventListener('click', adicionaMural)