document.addEventListener('DOMContentLoaded', () => {
    carregarVaquinhas();
  });
  
  async function carregarVaquinhas() {
    try {
      const response = await fetch('http://localhost:3000/vaquinhas');
      const vaquinhas = await response.json();
        
      const vaquinhasContainer = document.getElementById('vaquinhas');
      vaquinhasContainer.innerHTML = '';
  
      vaquinhas.forEach(vaquinha => {
        const card = `
          <div class="col-md-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${vaquinha.titulo}</h5>
                <p class="card-text">${vaquinha.descricao}</p>
                <p class="card-text"><strong>Meta:</strong> R$ ${vaquinha.meta.toFixed(2)}</p>
                <button class="btn btn-primary" onclick="doar('${vaquinha._id}')">Doar</button>
              </div>
            </div>
          </div>
        `;
        vaquinhasContainer.innerHTML += card;
      });
    } catch (erro) {
      console.error('Erro ao carregar vaquinhas:', erro);
    }
  }
  
  function doar(vaquinhaId) {
    // Exibir o formulário de pagamento
    document.getElementById('paymentForm').style.display = 'block';
    window.vaquinhaId = vaquinhaId; // Salva o ID da vaquinha para uso no pagamento
  }
  
  // Configurar o Stripe com a chave pública recebida do back-end
    const stripe = Stripe(stripePublicKey);
    const elements = stripe.elements();
    const cardElement = elements.create('card');
    cardElement.mount('#card-element');
  
  // Processar o pagamento
  document.getElementById('stripeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const { token, error } = await stripe.createToken(cardElement);
  
    if (error) {
      document.getElementById('card-errors').textContent = error.message;
    } else {
      const amount = document.getElementById('amount').value;
      const vaquinhaId = window.vaquinhaId;
  
      try {
        const response = await fetch('http://localhost:3000/pagamentos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            valor: amount,
            moeda: 'brl',
            descricao: `Doação para vaquinha ${vaquinhaId}`,
            token: token.id,
          }),
        });
  
        const data = await response.json();
        if (response.ok) {
          alert('Pagamento realizado com sucesso!');
          document.getElementById('paymentForm').style.display = 'none';
        } else {
          alert(data.erro || 'Erro ao processar pagamento');
        }
      } catch (erro) {
        console.error('Erro ao processar pagamento:', erro);
        alert('Erro ao processar pagamento');
      }
    }
  });