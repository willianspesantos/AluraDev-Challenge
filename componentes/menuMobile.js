const botao = document.querySelector('[data-botao-mobile]')

botao.addEventListener('click', ()=>{
    const botaoAtivo = document.querySelector('[data-menu-ativo]')
    botaoAtivo.classList.toggle('m-ativo')
})