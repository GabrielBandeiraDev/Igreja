# Igreja - Site do Acampamento Cristão 

#site 

[ibcd.vercel.app](https://ibcd.vercel.app/)

Este é um projeto de um site desenvolvido sem fins lucrativos para um acampamento cristão, utilizando **Next.js** para o frontend e **Flask** para o backend. O objetivo do projeto é fornecer informações e facilitar a interação com os participantes do acampamento.

## Tecnologias Utilizadas

- **Frontend**: 
  - [Next.js](https://nextjs.org/) - Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).
  - [React](https://reactjs.org/) - Biblioteca JavaScript para construção da interface de usuário.
  
- **Backend**: 
  - [Flask](https://flask.palletsprojects.com/) - Microframework para o desenvolvimento de APIs e serviços web.
  
- **Outras Tecnologias**:
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Estilização de páginas.
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Linguagem de programação utilizada tanto no frontend quanto no backend.
  - [Bootstrap](https://getbootstrap.com/) - Framework CSS para design responsivo e componentes prontos.

## Funcionalidades

- **Página inicial**: Exibe informações sobre o acampamento cristão, incluindo data, horário e detalhes do evento.
- **Cadastro de participantes**: Permite que os participantes se inscrevam online para o acampamento.
- **Agenda**: Mostra a programação completa do acampamento.
- **Contato**: Formulário para enviar mensagens à organização do evento.

## Como Rodar o Projeto

### 1. Configuração do Backend (Flask)

#### Pré-requisitos:

- Python 3.8 ou superior.
- Dependências do Flask.

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/igreja.git
cd igreja/backend

# Criar um ambiente virtual
python -m venv venv
source venv/bin/activate  # no Linux/Mac
venv\Scripts\activate     # no Windows

# Instalar as dependências do backend
pip install -r requirements.txt

# Rodar o servidor Flask
flask run
