//salva no localStorage os codigos digitados no campo principal

const novoProjeto = document.querySelector('[data-botaoAdicionar]')

novoProjeto.addEventListener('click', ()=>{
    
    let codigos = JSON.parse(localStorage.getItem('codigos')) || []
    const codigo = document.querySelector('[data-projeto]')
    const valor = codigo.textContent
    let codigosAtualizados = [...codigos, valor]
    codigos.push(valor)
    localStorage.setItem('codigos', JSON.stringify(codigosAtualizados))    
})

   