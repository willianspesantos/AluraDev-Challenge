const novoProjeto = document.querySelector('[data-botaoAdicionar]')


novoProjeto.addEventListener('click', ()=>{
    const codigo = document.querySelector('[data-projeto]')
    const valor = codigo.textContent
    console.log(valor)
})

   