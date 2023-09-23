# reddit-clone

## Sumário

- [reddit-clone](#reddit-clone)
  - [Sumário](#sumário)
  - [*To-do list*](#to-do-list)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Galeria](#galeria)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## *To-do list*

- [X] Remover `styled-components`
- [X] Aplicar tema escuro na tela de carregamento
- [X] Adicionar o _dropdown_ da tela inicial
- [X] Criar o componente `Post`
- [X] Adicionar animação nos números
- [ ] Adicionar as outras pilhas de navegação
- [ ] Corrigir o bug das animações assíncronas na tela de carregamento
- [ ] Criar uma função para mudar aleatoriamente o número de votos de cada post

## Motivação

Este app é um reflexo do meu esforço em explorar e testar a biblioteca de interface de usuário [restyle](https://github.com/Shopify/restyle) em um ambiente prático. Durante o processo, busquei compreender profundamente suas nuances e capacidades. Inicialmente, o restyle se revelou uma ferramenta simplificada e intuitiva para o design de interfaces, tornando a estilização de componentes uma tarefa ágil.

No entanto, à medida que o projeto avançava e a complexidade das interfaces crescia, encontrei desafios significativos. Em particular, quando lidava com componentes que demandavam uma extensa personalização com várias propriedades CSS, deparei-me com a necessidade de recorrer a `StyleSheet`, uma abordagem à moda antiga, para alcançar os resultados desejados. Esse ponto de inflexão me levou a questionar a eficácia do restyle em lidar com situações mais complexas de estilização.

Embora o restyle tenha a vantagem de centralizar detalhes importantes, como paleta de cores, espaçamentos e fontes tipográficas, em uma única constante para todos os componentes integrados ao framework, essa unificação não se mostrou suficiente para superar suas limitações em comparação com outras bibliotecas estabelecidas.

Em retrospectiva, percebi que muitas das funcionalidades que o restyle oferece já são habilmente executadas pelo [styled-components](https://styled-components.com/), tornando-o uma escolha mais robusta e versátil para a estilização de componentes. Portanto, embora tenha sido uma experiência educativa explorar o restyle, não fiquei totalmente satisfeito com sua adequação para projetos mais complexos e desafiadores.

Este foi o terceiro repositório de código apresentado no [Curso Superior de TSI](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) do IFMS como requisito para obtenção da nota parcial das atividades da unidade curricular Programação para Dispositivos Móveis II.

| [&larr; Repositório anterior](https://github.com/mdccg/muzy-simple-calc) | [Próximo repositório &rarr;](#) |
|-|-|

## Pilha de tecnologia

| Papel | Tecnologia |
|-|-|
| Biblioteca de desenvolvimento | [React Native](https://reactnative.dev/) |
| Bundler | [Expo](https://expo.dev/) | 
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Biblioteca de interface de usuário | [restyle](https://github.com/Shopify/restyle) |

Os créditos pelas mídias disponibilizadas estão disponíveis [aqui](./assets/README.md).

## Galeria

![Tela inicial do Reddit com tela claro aplicado](./docs/light-theme.jpg)
![Tela inicial do Reddit com tela escuro aplicado](./docs/dark-theme.jpg)

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional);
- Dispositivo móvel:
  - [Expo Go](https://expo.dev/client).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);
   
3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Execute o seguinte comando para iniciar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```

5. Uma vez iniciado, aparecerá um QR Code. Você deve escaneá-lo com o aplicativo [Expo Go](https://expo.dev/client), disponível para Android e iOS;

6. Como alternativa, você pode executar o app no seu navegador, pressionando o atalho `w`. Entretanto, alguns módulos podem não funcionar na versão web do app.