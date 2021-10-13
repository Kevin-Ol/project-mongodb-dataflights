# Projeto MongoDB Dataflights

Projeto feito como critério avaliativo na escola de programação **Trybe**.

Projeto para praticar querys em um banco de dados não-relacional MongoDB. Nele foi possível aprender a estrutura de um banco de dados não relacional, 
consultar, criar, e deletar dados através de queries, bem como filtrar, ordenar, e criar consultas maleáveis utilizando operadores de comparação e operadores 
lógicos através do MongoDB.

## Instruções para reproduzir o projeto

### Pré requisitos

1. Possuir `mongodb` instalado

2. Clone o repositório
  * `git clone git@github.com:Kevin-Ol/project-mongodb-dataflights.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd project-mongodb-dataflights`

3. Instale as dependências
  * `npm install`

---

### Instruções para restaurar o banco de dados `dataFlights`

1. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro com uma mensagem como ***Connection refused***, 
tente reiniciar sua instância.

2. Agora que você tem certeza de que a sua instância está no ar e que você está conectado a ela, digite `exit`. Você voltará ao terminal para iniciar a importação dos dados.

3. Na raiz do diretório do projeto, execute o seguinte comando que fará a restauração da base de dados `dataFlights`:
    ```sh
    DBNAME=dataFlights ./scripts/resetdb.sh assets
    ```

  * A execução desse script criará um banco de dados chamado `dataFlights` e importará os dados para a coleção `voos`.

---

### Instruções para testar queries

Para executar localmente os testes, é preciso escrever o seguinte no seu terminal, estando na raiz do diretório do projeto:
```sh
./scripts/evaluate.sh
```

Esse script passará por **todos os desafios** e imprimirá um relatório indicando se passou ou não para cada desafio. Como a execução do script **envolve restauração da base de dados `dataFlights`** de um teste para outro, recomenda-se esperar pela sua execução completa.

Para executar somente o teste de um desafio, execute o comando abaixo, substituindo N pelo númedo do desafio

```sh
./scripts/evaluate.sh desafioN
```

---

# Requisitos do projeto

Todos os arquivos devem estar dentro de uma pasta chamada `challenges` na raíz do projeto.

1 - Retorne a quantidade de documentos inseridos na coleção `voos`.

2 - Retorne os 10 primeiros documentos com voos da empresa `AZUL`.

3 - Retorne a quantidade de voos da empresa `AZUL`.

4 - Retorne a quantidade de voos da empresa `GOL`.

5 - Retorne o `vooId` do décimo ao décimo segundo documento da coleção `voos`.

6 - Retorne apenas os campos `empresa.sigla`, `empresa.nome` e `passageiros` do voo com o campo `vooId` igual a `756807`.

7 - Retorne a quantidade de voos em que o ano seja menor do que `2017`.

8 - Retorne a quantidade de voos em que o ano seja maior do que `2016`.

9 - Retorne a quantidade de voos entre os anos de `2017` e `2018`.

10 - Retorne apenas os **10** primeiros documentos com voos da empresa `GOL` do ano de `2017`. Exiba apenas os campos `vooId`, `empresa.nome`, `aeroportoOrigem.nome`, `aeroportoDestino.nome`, `mes` e `ano`.

11 - Retorne a quantidade de documentos em que o campo `aeroportoDestino.pais` não seja igual a `ESTADOS UNIDOS`.

12 - Retorne a quantidade de documentos em que o campo `aeroportoDestino.pais` seja igual a `BRASIL`, `ARGENTINA` ou `CHILE`.

13 - Retorne a quantidade de documentos em que o campo `aeroportoDestino.continente` não seja igual a `EUROPA`, `ÁSIA` e `OCEANIA`.

14 - Retorne o total de voos em que o país de origem não seja `BRASIL`.

15 - Retorne o total de voos com mais de 20 `decolagens`.

16 - Retorne o total de voos em que o campo `natureza` possui o valor `Internacional`.

17 - Retorne o total de voos em que o campo `natureza` possui o valor `Doméstica`.

18 - Retorne o `vooId`, `mes` e `ano` do primeiro voo com mais de `7000` passageiros pagos.

19 - Retorne o `vooId` do primeiro voo em que o campo `litrosCombustivel` exista.

20 - Retorne o `vooId` do primeiro voo em que o campo `rtk` não exista.

21 - Retorne o `vooId` do primeiro voo em que o campo `litrosCombustivel` seja maior ou igual a `1000`.

22 - Retorne o `vooId` do primeiro voo em que a empresa seja `DELTA AIRLINES` ou `AMERICAN AIRLINES`, a sigla do aeroporto de origem seja `SBGR` e a sigla do aeroporto de destino seja `KJFK`.

23 - Retorne o `vooId` e `litrosCombustivel` do primeiro voo em que o campo `litrosCombustivel` **não seja maior do que** `1000` e o campo `litrosCombustivel` exista.

24 - Retorne o `vooId`, `empresa.nome` e `litrosCombustivel` do primeiro voo em que `litrosCombustivel` **não seja maior do que** `600` **e** a empresa **não seja** `GOL` **ou** `AZUL`, **e** o campo `litrosCombustivel` exista.

25 - Remova todos os voos da empresa `AZUL` em que a quantidade de combustível seja menor do que `400`. Informe a quantidade de documentos removidos.

26 - Remova todos os voos da empresa `GOL` em que a quantidade de passageiros pagos esteja entre `5` e `10`, incluindo os casos em que a quantidade é `5` e `10`. Informe a quantidade de documentos removidos.

27 - Retorne a quantidade total de voos de natureza `Doméstica` que a empresa `PASSAREDO` possui, via uso de uma nova coleção chamada `resumoVoos`.

Para isso, escreva no arquivo `desafio27.js` duas queries, **nesta ordem**:

1. Conte quantos voos da empresa `PASSAREDO` cujo campo `natureza` possua valor igual a `Doméstica` e crie uma query que insira na coleção `resumoVoos` um documento com os campos: `empresa` (nome da empresa) e `totalVoosDomesticos` (o total retornado anteriormente).

2. Em uma segunda query, retorne a `empresa` e o `totalVoosDomesticos` do primeiro documento presente na coleção `resumoVoos` em que a empresa seja `PASSAREDO`.

28 - Retorne a quantidade total de voos de natureza `Doméstica` que a empresa `LATAM AIRLINES BRASIL` possui, via uso de uma nova coleção chamada `resumoVoos`.

Para isso, escreva no arquivo `desafio28.js` duas queries, **nesta ordem**:

1. Conte quantos voos da empresa `LATAM AIRLINES BRASIL` cujo campo `natureza` possua valor igual a `Doméstica` e crie uma query que insira na coleção `resumoVoos` um documento com os campos: `empresa` (nome da empresa) e `totalVoosDomesticos` (o total retornado anteriormente).

2. Em uma segunda query, retorne a `empresa` e o `totalVoosDomesticos` do primeiro documento presente na coleção `resumoVoos` em que a empresa seja `LATAM AIRLINES BRASIL`.
