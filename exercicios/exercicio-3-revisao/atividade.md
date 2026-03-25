Criar um aplicativo de dois níveis onde o usuário vê uma lista de categorias de viagem e, ao clicar, navega para uma lista de destinos específicos, podendo acessar os detalhes de cada um.

### 🏗️ Estrutura de Arquivos Sugerida
O Expo Router usa o sistema de arquivos para definir rotas. Sua pasta `app/` deve ficar assim:

```text
app/
├── _layout.tsx         (Layout principal com Tabs ou Stack)
├── index.tsx           (Página inicial: Categorias)
├── category/
│   ├── _layout.tsx     (Layout secundário para manter um header personalizado)
│   └── [id].tsx        (Rota dinâmica: Lista de destinos da categoria)
└── details/
    └── [name].tsx      (Rota dinâmica: Detalhes do destino)
```

---

## 🛠️ Passo a Passo da Atividade

### 1. Configurar o Layout Global (`app/_layout.tsx`)
Utilize o componente `Stack` do Expo Router para gerenciar a navegação em pilha.
* **Dica:** Defina títulos globais e cores para o header aqui.

### 2. Página Inicial com Categorias (`app/index.tsx`)
Crie uma lista simples (ex: "Praias", "Montanhas", "Cidades Históricas").
* **Ação:** Ao clicar em uma categoria, use o componente `<Link />` ou o hook `useRouter` para navegar passando um ID.
* **Exemplo de Rota:** `/category/praias`.

### 3. Rota Dinâmica e Parâmetros (`app/category/[id].tsx`)
Nesta tela, você deve capturar o parâmetro da URL.
* Use o hook `useLocalSearchParams` para ler o `id`.
* Exiba o ID no título da página para confirmar que o parâmetro foi passado corretamente.



### 4. Layout Aninhado (`app/category/_layout.tsx`)
Crie um layout específico para a pasta de categorias. 
* **Exercício:** Tente adicionar um botão de "Ajuda" ou um ícone fixo no header apenas para as telas que estiverem dentro dessa pasta.

### 5. Detalhes do Destino (`app/details/[name].tsx`)
Navegue para esta tela passando múltiplos parâmetros se possível (ex: nome e clima).
* **Desafio Extra:** Use o `router.replace()` em vez de `push()` para simular uma confirmação de reserva onde o usuário não pode "voltar" para o formulário.

---

## 📝 Requisitos Técnicos para Praticar
Para considerar a atividade concluída, garanta que você aplicou:
1.  **Link Component:** Para navegação declarativa.
2.  **useLocalSearchParams:** Para capturar os dados da URL.
3.  **Screen Options:** Personalizar títulos e botões de voltar via código dentro de cada página.
4.  **Agrupamento (opcional):** Tente usar grupos de rotas como `(tabs)` ou `(auth)` para entender como esconder pastas da URL.

---

### Exemplo de Código para o Link:
```tsx
import { Link } from 'expo-router';

// Na sua lista de categorias
<Link href={{
  pathname: "/category/[id]",
  params: { id: 'praias' }
}}>
  Ver Praias
</Link>
```

**Gostaria que eu gerasse o código inicial de algum desses arquivos específicos para você começar?**