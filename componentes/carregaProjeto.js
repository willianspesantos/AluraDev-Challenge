const mural = document.querySelector('[data-mural]')
new function() {
    mostraProjetos()
}

function mostraProjetos() {
    if(localStorage == 0) return

    let projetos = []
    for(let c = 0; c < localStorage.length; c++) {

        projetos.push(JSON.parse(localStorage.getItem(c)))
        
        //criando os elementos para o mural
        const muralProjetos = document.createElement('div')
        muralProjetos.classList.add('caixa-projetos')
          
        //adicionando o filho
        
        mural.appendChild(muralProjetos)
                
        muralProjetos.innerHTML = `
        <div class="caixa-projeto-textarea caixa-cor-${projetos[c].detalhesProjeto.cor}">
            <a href="../index.html" class="projetos__link" data-id="${projetos[c].id}">
                <pre class="projetos__pre">
                    <code class=" hjls ${projetos[c].detalhesProjeto.projetoLinguagem} projetos__code" contenteditable="true">
                    </code>
                </pre>           
            </a>
                          
        </div>           
        <div class="caixa-projeto-descricao">
            <h2 class="container__projetos___titulo">${projetos[c].detalhesProjeto.projetoNome}</h2>
            <p class="container__projetos___descricao">${projetos[c].detalhesProjeto.projetoDescricao}</p>
        </div>
        <div class="caixa-projeto-footer">
            <span class="span-botoes">
                <button class="botao-balao">
                    <img src="../asseds/img/botao-balao.png" alt="botao de comentarios">
                </button>
                <h4>9</h4>
                <button class="botao-coracao">
                    <img src="../asseds/img/botao-coracao.png" alt="botao amei o projeto">
                </button>
                <h4>3</h4>
            </span>
            <span class="cabecalho__perfil">
                <img src="../asseds/img/foto-perfil.png" alt="foto perfil do usuario logado" class="cabecalho__perfil___imagem">
                <h2 class="cabecalho__perfil___usuario">@Harry</h2>
            </span>
        </div>                                        
    `
    
    const codigoHtml = document.querySelector(`[data-id="${projetos[c].id}"]`)
    codigoHtml.querySelector('code').innerText = projetos[c].detalhesProjeto.codigo
    }    

}
