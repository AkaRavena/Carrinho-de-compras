let valorTotalCompraLista = [];
let parenteLista = document.getElementById("lista-produtos");
let parenteBotaoLimpar = document.getElementsByClassName("botoes-wrapper")[0];

function adicionar(){
    let Produto =  document.getElementById("produto").value;
    let quantidade = parseInt(document.getElementById("quantidade").value);
    
    const itens ={
        "Fone de ouvido - R$100" : {item : "Fone de ouvido" , precoUnitario : 100},
        "Celular - R$1400" : {item : "Celular" , precoUnitario : 1400 },
        "Oculos VR - R$5000" : {item : "Oculos VR" , precoUnitario : 5000},
    }

    let item = itens[Produto].item;
    let precoUnitario =itens[Produto].precoUnitario;
    
    console.log (precoUnitario);
    let valor = quantidade * precoUnitario;

    if(quantidade > 0 && itens[Produto]){
        let listaAdd = document.createElement("section");
        listaAdd.classList.add("carrinho__produtos__produto");
        listaAdd.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${item} <span class="texto-azul">R$${valor}</span>`
        novoItem = parenteLista.appendChild(listaAdd);

        valorTotalCompraLista.push(valor);
        carrinho();
        document.getElementById("quantidade").value = "";
        parenteBotaoLimpar.children[1].classList.remove("botao-limpar");
        parenteBotaoLimpar.children[1].classList.add("botao-adicionar");

    }
}

function carrinho (){
    let valorTotalCompra = valorTotalCompraLista.reduce(function (acumulador, valorAtual) { return acumulador + valorAtual; }, 0);
    let carrinhoTotal = document.getElementsByClassName("carrinho__total")[0];
    carrinhoTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${valorTotalCompra}</span>`;
}

function limpar (){
    valorTotalCompraLista = [];
    carrinho();
    parenteLista.innerHTML = "";
    parenteBotaoLimpar.children[1].classList.remove("botao-adicionar");
    parenteBotaoLimpar.children[1].classList.add("botao-limpar");
}