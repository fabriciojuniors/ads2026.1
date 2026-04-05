# 📝 Atividade Prática: Sistema de Cadastro de Posts

### **Parte 1: Criar o Schema de Validação (Zod)**

Crie um arquivo `post.schema.ts` na pasta schemas com as seguintes validações:

**Campos obrigatórios:**
- `title` (string): mínimo 5 caracteres, máximo 100 caracteres
- `body` (string): mínimo 10 caracteres, máximo 500 caracteres  
- `userId` (number): deve ser um número positivo

**Campos opcionais:**
- `tags` (array de strings): cada tag deve ter entre 2 e 20 caracteres

**Mensagens de erro personalizadas** para cada validação.

---

### **Parte 2: Criar o Hook de Requisição (Fetch)**

No arquivo useFetch.ts, adicione uma função `create` que:

1. Receba um objeto do tipo `Post` (sem o `id`)
2. Faça uma requisição POST para `${API_URL}/posts/add`
3. Retorne o post criado pela API
4. Trate erros adequadamente

---

### **Parte 3: Criar a Tela de Cadastro**

Crie um arquivo `create-post.tsx` em app com:

1. **Formulário com os campos:**
   - Título do post
   - Conteúdo do post
   - ID do usuário (campo numérico)
   - Tags (campo de texto - separado por vírgulas)

2. **Integração React Hook Form + Zod:**
   - Use `useForm` com `zodResolver`
   - Envolva os inputs com `FormProvider`
   - Utilize o componente `Input` existente

3. **Funcionalidade de envio:**
   - Ao submeter, chame a função `create` do hook `useFetch`
   - Mostre um indicador de carregamento durante o envio
   - Exiba mensagem de sucesso ou erro
   - Limpe o formulário após sucesso

4. **Tratamento de estados:**
   - Estado de loading
   - Estado de erro
   - Estado de sucesso

---

### **Parte 4: Adicionar a Rota na Navegação**

Adicione uma nova tab no arquivo _layout.tsx para acessar a tela de cadastro
