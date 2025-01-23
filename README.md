# Vaquinha Online

Um projeto de API integrada com meio de pagamento (Stripe) para criação e gerenciamento de vaquinhas online. Desenvolvido com Node.js, Express, MongoDB e Bootstrap, este projeto permite que usuários criem vaquinhas, façam doações e acompanhem o progresso das metas.

---

## Funcionalidades Principais

- **Criação de Vaquinhas**: Os usuários podem criar vaquinhas com título, descrição e meta financeira.
- **Doações Seguras**: Integração com o Stripe para processamento de pagamentos.
- **Autenticação de Usuários**: Sistema de login e registro com JWT (JSON Web Tokens).
- **Front-End Responsivo**: Interface desenvolvida com Bootstrap para uma experiência amigável em dispositivos móveis e desktop.

---

## Tecnologias Utilizadas

- **Back-end**: Node.js, Express, MongoDB, Mongoose.
- **Front-end**: HTML, CSS (Bootstrap), JavaScript.
- **Pagamentos**: Stripe API.
- **Autenticação**: JWT, bcryptjs.

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado.
- MongoDB instalado ou uma conexão com um banco de dados MongoDB.
- Conta no Stripe para obter as chaves de API.

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/vaquinha-online.git

2. Navegue até a pasta do projeto:
    ```bash
    cd vaquinha-online
3. Instale as dependências:
    ```bash
    npm install
4. Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente:
  
MONGODB_URI=sua_string_de_conexao_mongodb
STRIPE_SECRET_KEY=sua_chave_secreta_do_stripe
STRIPE_PUBLIC_KEY=sua_chave_publica_do_stripe
JWT_SECRET=sua_chave_secreta_jwt
PORT=3000

5. Inicie o servidor
    ```bash
    node src/index.js
6. Acesse o front-end em http://localhost:3000.

## Como Contribuir

Contribuições são bem-vindas! Siga os passos abaixo para contribuir com o projeto:

### 1. Faça um Fork do Repositório
- Acesse o repositório no GitHub: [Vaquinha Online](https://github.com/seu-usuario/vaquinha-online).
- Clique no botão **Fork** no canto superior direito da página.
- Isso criará uma cópia do repositório na sua conta do GitHub.

### 2. Clone o Repositório Forkado
- No terminal, execute o seguinte comando para clonar o repositório forkado para sua máquina local:
  ```bash
  git clone https://github.com/seu-usuario/vaquinha-online.git

### 3. Navegue até a Pasta do ProjetO
```bash
cd vaquinha_online

# Passo 4: Crie uma Nova Branch
git checkout -b minha-feature

# Passo 5: Faça as Alterações
# Edite os arquivos do projeto conforme necessário.

# Passo 6: Adicione e Commit as Mudanças
git add .
git commit -m "Adicionando nova funcionalidade"

# Passo 7: Envie as Mudanças para o Seu Fork
git push origin minha-feature

# Passo 8: Abra um Pull Request
# Acesse o repositório forkado no GitHub e clique em "Compare & pull request".



