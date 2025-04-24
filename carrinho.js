let carrinho = [];
const carrinhoBtn = document.getElementById('carrinhoBtn');
const carrinhoModal = document.querySelector('.carrinho-modal');
const listaCarrinho = document.getElementById('lista-carrinho');
const totalCompra = document.getElementById('total-compra');

function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({...produto, quantidade: 1});
    }

    atualizarCarrinho();
}

function atualizarCarrinho() {
    listaCarrinho.innerHTML = carrinho.map(item => `
        <div class="item-carrinho">
            <h4>${item.nome}</h4>
            <p>Quantidade: ${item.quantidade}</p>
            <p>preco: R$ ${(item.desconto * item.quantidade).toFixed(2)}</p>
        </div>
    `).join('');

    const total = carrinho.reduce((acc, item) => acc + (item.desconto * item.quantidade), 0);
    totalCompra.textContent = total.toFixed(2);
    carrinhoBtn.textContent = `Minha Cesta (${carrinho.length})`;
}


carrinhoBtn.addEventListener('click', () => {
    carrinhoModal.classList.toggle('active');
});

document.getElementById('fecharCarrinho').addEventListener('click', () => {
    carrinhoModal.classList.remove('active');
});

renderizarProdutos();