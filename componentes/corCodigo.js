const selecionarCor = document.querySelector('[data-opcaoCor]')

selecionarCor.addEventListener('change', (evento)=>{
    const opcaoCor = evento.target
    const opcao = opcaoCor.value
    const corFundo = document.querySelector('[data-caixa-container]')
    for (let c = 0; c < 4; c++) {
        corFundo.classList.remove(`caixa-cor-${c}`)
    }
    corFundo.classList.add(`caixa-cor-${opcao}`)    
})
