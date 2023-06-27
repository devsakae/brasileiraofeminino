
# ⚽️ Brasileirão Feminino A1

Sistema em React (frontend e backend) de gestão do Campeonato Brasileiro Feminino de 2023 (Série A1).

(Atualizado até a 2a rodada, em 07/março/2023)
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://portfolio.sakae.social)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/rodrigosakae)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Sakae)


## Instruções de utilização

1. Clone o projeto

- Usando [Github-Cli](https://cli.github.com/):
```bash
  gh repo clone devsakae/brasileiraofeminino
```
- Usando SSH:
```bash
  git clone git@github.com:devsakae/brasileiraofeminino.git
```
Após isso, acesse a pasta do projeto:
```bash
  cd brasileiraofeminino
```

2. Instale as dependências
```bash
  npm install
```

3. Rode com Docker (docker-compose na pasta app/)
```bash
  cd app/ 
  docker-compose up -d
```

O projeto está preparado para rodar na portão 3000 (padrão) http://localhost:3000
## Documentação da API

#### ✅ Retorna todos os times

```http
  GET /teams
```

#### ✅ Retorna um único time (pelo id)

```http
  GET /teams/${id}
```

#### ✅ Devolve um token após login

```http
  POST /login
```

Necessário informar um objeto no body com os parâmetros abaixo definidos:

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. O email inicial é _admin@admin.com_ |
| `password` | `string` | **Obrigatório**. A senha inicial é _secret_admin_ |

#### ✅ Retorna o role do usuário logado

```http
  GET /login/role
```
🛑 Para esta rota, você precisará informar o token no Headers da requisição.


#### ✅ Busca todas as partidas

```http
  GET /matches
```

#### ✅ Busca todas as partidas em andamento

```http
  GET /matches?inProgress=${boolean}
```

Informe _true_ para partidas em andamento ou _false_ para partidas finalizadas.


#### ✅ Inserindo uma nova partida

```http
  POST /matches
```

Essa rota recebe os parâmetros abaixo em seu body, com validações do token e dos ids (que existam e que não sejam iguais).

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `homeTeamId`      | `number` | **Obrigatório**. O ID do time mandante |
| `awayTeamId`      | `number` | **Obrigatório**. O ID do time visitante |
| `homeTeamGoals`      | `number` | **Obrigatório**. O número de gols marcado pelo mandante |
| `awayTeamGoals`      | `number` | **Obrigatório**. O número de gols marcado pelo visitante |

#### ✅ Editar partida

```http
  PATCH /matches/${id}
```

| `homeTeamGoals`      | `number` | **Obrigatório**. O número de gols marcado pelo mandante |
| `awayTeamGoals`      | `number` | **Obrigatório**. O número de gols marcado pelo visitante |

#### ✅ Finalizar partida em andamento

```http
  PATCH /matches/${id}/finish
```
Esta rota finaliza a partida em andamento de número _${id}_.


## Stacks utilizadas

*Frontend*: React

*Backend*: NodeJs, Express, Joi
## Licença

[MIT](https://choosealicense.com/licenses/mit/)

