// let carrinho = [];
// let total = 0;
// const entrega = 3.00; // Valor fixo da entrega

// function adicionar(item, preco) {
//   const existente = carrinho.find(i => i.item === item);
//   if (existente) {
//     existente.qtd += 1;
//   } else {
//     carrinho.push({ item, preco, qtd: 1 });
//   }
//   atualizarCarrinho();
// }

// function remover(item) {
//   const index = carrinho.findIndex(i => i.item === item);
//   if (index !== -1) {
//     if (carrinho[index].qtd > 1) {
//       carrinho[index].qtd -= 1;
//     } else {
//       carrinho.splice(index, 1);
//     }
//   }
//   atualizarCarrinho();
// }

// function atualizarCarrinho() {
//   const lista = document.getElementById('lista');
//   lista.innerHTML = '';
//   total = 0;

//   carrinho.forEach(i => {
//     const li = document.createElement('li');
//     li.innerHTML = `${i.qtd}x ${i.item} - R$ ${(i.preco * i.qtd).toFixed(2)}
//     <button onclick="remover('${i.item}')">Remover</button>`;
//     lista.appendChild(li);
//     total += i.preco * i.qtd;
//   });

//   const totalFinal = total + entrega;

//   document.getElementById('total').textContent = totalFinal.toFixed(2);
// }

// function montarMensagem() {
//   let mensagem = 'Pedido de Lanches Gourmet:\n\n';
//   carrinho.forEach(i => {
//     mensagem += `${i.qtd}x ${i.item} - R$ ${(i.preco * i.qtd).toFixed(2)}\n`;
//   });
//   mensagem += `\nEntrega: R$ ${entrega.toFixed(2)}\n`;
//   mensagem += `Total: R$ ${(total + entrega).toFixed(2)}\n`;

//   document.getElementById('pedidoFinal').value = mensagem;
//   return true;
// }







let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let total = 0;
const entrega = 3.00;

atualizarCarrinho();

// ➕ Adicionar item
function adicionar(item, preco) {
    const existente = carrinho.find(i => i.item === item);
    if (existente) {
        existente.qtd += 1;
    } else {
        carrinho.push({ item, preco, qtd: 1 });
    }
    salvarCarrinho();
    atualizarCarrinho();
}

// ➖ Remover item
function remover(item) {
    const index = carrinho.findIndex(i => i.item === item);
    if (index !== -1) {
        if (carrinho[index].qtd > 1) {
            carrinho[index].qtd -= 1;
        } else {
            carrinho.splice(index, 1);
        }
    }
    salvarCarrinho();
    atualizarCarrinho();
}

// 💾 Salvar no LocalStorage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// 🔄 Atualizar carrinho e textarea automaticamente
function atualizarCarrinho() {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';
    total = 0;

    let mensagem = '🍔 Pedido de Lanches Gourmet:\n\n';

    carrinho.forEach(i => {
        const li = document.createElement('li');
        li.innerHTML = `${i.qtd}x ${i.item} - R$ ${(i.preco * i.qtd).toFixed(2)}
        <button onclick="remover('${i.item}')">Remover</button>`;
        lista.appendChild(li);

        total += i.preco * i.qtd;
        mensagem += `${i.qtd}x ${i.item} - R$ ${(i.preco * i.qtd).toFixed(2)}\n`;
    });

    const totalFinal = total + entrega;

    mensagem += `\n📦 Entrega: R$ ${entrega.toFixed(2)}\n`;
    mensagem += `💰 Total: R$ ${totalFinal.toFixed(2)}\n`;

    document.getElementById('total').textContent = totalFinal.toFixed(2);
    document.getElementById('pedidoFinal').value = mensagem;
}

// 📝 Montar mensagem final com dados do cliente (para enviar)
function montarMensagem() {
    let mensagem = document.getElementById('pedidoFinal').value;

    const nome = document.querySelector('input[name="nome"]').value;
    const telefone = document.querySelector('input[name="telefone"]').value;
    const rua = document.querySelector('input[name="rua"]').value;
    const numero = document.querySelector('input[name="numero"]').value;
    const bairro = document.querySelector('input[name="bairro"]').value;
    const complemento = document.querySelector('input[name="complemento"]').value;
    const pagamento = document.querySelector('select[name="pagamento"]').value;

    mensagem += `\n📍 Entrega para: ${nome}, Tel: ${telefone}\n`;
    mensagem += `Endereço: Rua ${rua}, Nº ${numero}, Bairro ${bairro}, ${complemento}\n`;
    mensagem += `💳 Pagamento: ${pagamento}\n`;

    document.getElementById('pedidoFinal').value = mensagem;

    // 🗑️ Limpa o carrinho após finalizar
    limparCarrinho();

    return true;
}

// 🗑️ Limpar carrinho manual (se desejar)
function limparCarrinho() {
    carrinho = [];
    salvarCarrinho();
    atualizarCarrinho();
}
