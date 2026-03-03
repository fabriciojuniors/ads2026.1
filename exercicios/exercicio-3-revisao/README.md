# Atividade Prática: Galeria de Desenvolvedores 🚀

## Objetivo
Consolidar os conhecimentos adquiridos sobre construção de listas dinâmicas (`FlatList`), gerenciamento de estado local (`useState`), captura de inputs de texto (`TextInput`), interatividade de toque (`TouchableOpacity`/`Pressable`) e renderização de sobreposições visuais (`Modal`).

---

## Requisitos do Aplicativo

Você deverá criar um aplicativo em React Native que funcione como um catálogo interativo de perfis de desenvolvedores. O app deve conter os seguintes comportamentos e estruturas:

### 1. A Interface Principal (Pesquisa)
* No topo da tela inicial, adicione um campo de texto (`TextInput`) estilizado para funcionar como uma barra de pesquisa.
* Este campo deve permitir que o usuário digite o nome de um desenvolvedor para filtrá-lo na lista.

### 2. A Lista de Perfis (`FlatList`)
* Crie um *array* de objetos (estado) no seu código simulando um banco de dados de desenvolvedores. Cada objeto deve ter:
  * `id` (numérico ou string)
  * `nome` (string)
  * `tecnologia` (string, ex: "React Native", "Java", "PostgreSQL")
  * `urlImagem` (string com a URL de um avatar genérico)
* Utilize o componente `FlatList` para renderizar esses dados.
* **Regra de Layout:** A lista deve ser exibida obrigatoriamente em **2 colunas** (utilize a propriedade `numColumns={2}`).
* **Tratamento de Lista Vazia:** Utilize a propriedade `ListEmptyComponent` para exibir uma mensagem elegante (ex: *"Nenhum desenvolvedor encontrado"*) caso a pesquisa não retorne resultados.

### 3. Interação do Card
* Cada item renderizado pela sua `FlatList` (o "card" do desenvolvedor) deve ser encapsulado por um componente `TouchableOpacity` ou `Pressable`.
* Ao tocar no card de um desenvolvedor, o aplicativo deve abrir um `Modal` com os detalhes daquele perfil.

### 4. O Perfil Detalhado (`Modal`)
* O `Modal` deve surgir com uma animação de baixo para cima (`animationType="slide"`) e ter o fundo semi-transparente para dar destaque ao conteúdo central (`transparent={true}`).
* Dentro do Modal, exiba o perfil ampliado contendo:
  * A `Image` do desenvolvedor (maior do que a renderizada na lista).
  * O `nome` e a `tecnologia` principal.
  * Um botão fictício "Contratar" que, ao ser clicado, emita um `Alert` informando: *"Proposta enviada para [Nome do Desenvolvedor]!"*.
* O Modal **deve** conter um botão (ícone ou texto) estilizado para ser fechado e retornar à tela inicial.

---

## 🌟 Desafio Extra (Opcional)

Para tornar a experiência do usuário (UX) ainda mais profissional, utilize o componente `KeyboardAvoidingView` e a API `Platform` para garantir que o teclado do celular não cubra a barra de pesquisa ou os itens do topo quando o usuário for digitar.