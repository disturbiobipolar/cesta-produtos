const container = document.getElementById('container-produtos');

produtos.forEach(produto => {
    const divProduto = document.createElement('div');
    divProduto.className = 'produto';
    
    divProduto.innerHTML = `
        <img src="${produto.foto}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <div class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
        <button onclick="adicionarAoCarrinho(${produto.id})">Comprar</button>
    `;
    
    container.appendChild(divProduto);
});