// estiliza o código com a biblioteca highlight

const botaoHighlight = document.querySelector('.container__principal___botao')
const linguagem = document.querySelector('.container__personalizar___selecao-linguagem')
const araeaDoCodigo = document.querySelector('.container__principal___textarea')
const botaoCor1 = document.querySelector('.cor1')
const botaoCor2 = document.querySelector('.cor2')
const botaoCor3 = document.querySelector('.cor3')

//adiciona a classe do tipo de linguagem que  esta sendo utizada para o código
function mudaLinguagem() {
    const codigo = document.querySelector('code')
    codigo.innerHTML = `<code class="hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
    araeaDoCodigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', ()=> {
    mudaLinguagem()
})

botaoHighlight.addEventListener('click', ()=> {
    const codigo = document.querySelector('code')
    hljs.highlightBlock(codigo)
})

const botaoCor = [botaoCor1, botaoCor2, botaoCor3]


for (let c = 0; c < botaoCor.length; c++) {
    botaoCor[c].addEventListener('click', (evento) =>{        
            const botaoCor = evento.target    
            botaoCor.classList.toggle('ativo')
            const codigo = document.querySelector('code')
            codigo.classList.toggle(`hljs${c}`)        
    })
}