# Charlie - Plataforma de E-commerce Personalizada.

Bem-vindo ao **Charlie**, a plataforma de e-commerce que permite que qualquer pessoa crie sua própria loja virtual de forma simples e personalizada. Com **Charlie**, você pode começar a vender seus produtos online em poucos minutos, sem precisar de conhecimentos avançados de programação ou design.

## Funcionalidades Principais

- **Cadastro de Produtos**: Adicione, edite e organize seus produtos com facilidade, incluindo descrições, imagens e preços.
- **Gestão de Pedidos**: Gerencie seus pedidos e seu estoque tendo controle das informações sobre suas vendas.
- **Integração com Pagamentos**: Conecte sua loja com a **Stripe** para transações de forma segura.
- **Visão Geral**: Tenha uma visualização geral das informações da sua loja, como as transações, itens do estoque e a quantidade de vendas de forma simples e compacta.

## Tecnologias Utilizadas

- **Frontend**: React.ts com Styled Components (Tailwind e Shadcn)
- **Backend**: Node.js e Typescript
- **Banco de Dados**: MySQL (Prisma)
- **Autenticação**: Clerk e JWT (JSON Web Token)
- **Pagamentos**: Integração com Stripe

## Como Iniciar
### Pré-requisitos

- Node.js instalado
- Conta no [Railway](https://railway.app) ou outros plataformas que façam conexões com o banco de dados.
- Conta do [Cloudinary](https://cloudinary.com) para hospedagem de fotos do sistema
- Conta do [Clerk](https://clerk.com) para autenticação de login do sistema 
- Conta no [Stripe](https://stripe.com/br?utm_campaign=AMER_BR_en_Google_Search_Brand_Brand_EXA-15088005049&utm_medium=cpc&utm_source=google&ad_content=603963803239&utm_term=stripe&utm_matchtype=e&utm_adposition=&utm_device=c&gad_source=1&gclid=Cj0KCQjwrKu2BhDkARIsAD7GBosBpO4yw3uZsJRi31gh3U3qk_JvQKR2vFdCXVq4QSKJx-gB742T4c4aAujjEALw_wcB) para integração de pagamentos

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/KaueLui/Charlie.git
   ```

2. Navegue até o diretório do projeto:
    ```bash
   cd Charlie
   ```
3. Instale as dependências:
    ```bash
   npm install
   ```

4. Crie e configure o arquivo `.env` com suas credenciais:
    ```bash
   Em charlie-admin:

   #Informações para conexão do Clerk
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    #Banco de Dados
    DATABASE_URL=""
    #Banco de Dados para imagens
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
    #Pagamentos
    STRIPE_API_KEY=
    FRONTEND_STORE_URL=
    STRIPE_WEBHOOK_SECRET=
   ```

   ```bash
   Em charlie-store:

   #Configurações de perfil
    NEXT_PUBLIC_API_URL=
    NEXT_BILLBOARD_API_URL=""
    #Configurações de perfil
    STORE_NAME_URL=""
    STORE_DESC_URL=""
   ```

   ```bash
   Banco de Dados local (php - em desenvolvimento):

   CREATE DATABASE IF NOT EXISTS charlie_user;
   
   CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

5. Execute os comandos para formar os dados no banco:
    ```bash
   npx prisma generate & npx prisma db push
   ```
6. Em charlie-admin e charlie-store, execute o comando para iniciar a aplicação:
    ```bash
   npm run dev
   ```
 7. Primeiro acesse a `charlie-admin` e crie sua loja, logo em seguida acesse `charlie-store` e veja sua loja com os itens que você cadastrou
#

 ### Este é o repositório conjunto do sistema, para ver o repositório com todos os commits e etapas do processo de criação:

- [Clarlie-Admin](https://github.com/KaueLui/Charlie-Admin)
- [Clarlie-Store](https://github.com/KaueLui/Charlie-Store)