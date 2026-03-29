# Projetos assuntos - ADS 5 2025.2
### Arquitetura de projeto
Existe uma padronização habitual entre os desenvolvedores de trabalhar com uma arquitetura em camadas, destinando uma `pasta/camada` para cada uma das ações do software.<br>
<strong>Exemplo</strong>
```
├───assets
│   └───images
│
└───src
    ├───app // Arquivos de rotas
    ├───components // Componentes visuais 
    ├───contexts // Contextos da aplicação (Ex: Autenticação)
    ├───hooks // Objetos destinados a aplicação de regras de negócios / chamadas em API
    ├───utils // Funções utilitárias (formatação, cálculo)
    └───types // Tipos para o TypeScript
```

> **_Atenção_**: Este exemplo pode (e deve) ser extendido e melhor adaptado para as realidade de cada projeto.

---

### React Hook Form (RHF)
O React Hook Form (RHF) é uma biblioteca para React focada em gerenciar o estado de formulários de maneira performática e flexível.
```bash
npm install react-hook-form
```

### 1. No componente Input

No componente Input, utilize o Controller do React Hook Form e passe explicitamente as propriedades value e onChangeText para o TextInput:

```tsx
<Controller
  control={control}
  name={nome}
  rules={{ required: obrigatorio }}
  render={({ field }) => (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      editable={editable}
      keyboardType={keyboardType}
      style={style.input}
    />
  )}
/>
```

Evite usar o spread {...field} diretamente, pois o TextInput do React Native não reconhece todas as propriedades do objeto field.

### 2. Na tela do formulário

Na tela que terá o formulário, utilize o hook useForm e envolva os campos com o FormProvider:

```tsx
import { FormProvider, useForm } from "react-hook-form";

const form = useForm();

const onSubmit = (data) => {
  // Lógica para envio dos dados
};

return (
  <FormProvider {...form}>
    <Input nome="nome" label="Nome" placeholder="Digite seu nome" keyboardType="default" />
    <Button title="Enviar" onPress={form.handleSubmit(onSubmit)} />
  </FormProvider>
);
```

Assim, o Input estará corretamente integrado ao React Hook Form e o estado do formulário será controlado automaticamente.

### Tipagem dinâmica com ZOD
O Zod é uma biblioteca de declaração e validação de esquemas focada em TypeScript.
Você define uma regra (o esquema) e o Zod garante que qualquer dado que entre na sua aplicação siga exatamente esse formato. Se o dado estiver errado, ele barra a entrada e diz exatamente o que está faltando ou incorreto.

```bash
npm install zod
npm install @hookform/resolvers
```

### 1. Definição de esquemas
A criação de esquema é a definicação do modelo de dados que nosso formulário espera receber.
```ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

export type Login = z.infer<typeof loginSchema>;
```

### 2. Vincular input ao ZOD
É necessário adaptações para vinculo do evento `onBlur` e verificação pelo estado de erro do campo.
```ts
<Controller
  control={control}
  name={nome}
  render={({ field, fieldState }) => (
      <>
          <TextInput
              placeholder={placeholder}
              editable={editable}
              keyboardType={keyboardType}
              style={[style.input, fieldState.error && style.inputError]}
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}

          />
          {fieldState.error && (
              <Text style={style.errorText}>{String(fieldState.error.message)}</Text>
          )}
      </>
  )}
/>
```

### 3. Parse de informações
Com o ZOD é possível configurarmos parse automaticos de informação, para isso é necessário indicar que no esquema que está informação pode ser convertida, para esta ação, usamos o indicativo `coerce`
```ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  nome: z.string().min(6, 'O nome deve ter pelo menos 6 caracteres'),
  idade: z.coerce.number("A idade deve ser um número válido").min(18, 'A idade deve ser maior ou igual a 18 anos'),
});

export type Login = z.infer<typeof loginSchema>;
```

### Requisições HTTP
`Fetch:` Utiliza a abordagem padrão do JS para realização de requisições `HTTP`, não depende de bibliotecas externas e configurações adicionais, mas pode apresentar limitações (ou falta de melhores alternativas) com relação a passagem de parâmetros, em especial, `QueryParams`. 
 ```ts
 // hooks/useFetch.ts
 export function useFetch() {

    const findAll = async (): Promise<PostsPageResponse> => {
        const response = await fetch(`${API_URL}/posts`)
        const data = await response.json()
        return data;
    }

    const findById = async(id: number): Promise<Post> => {
        const response = await fetch(`${API_URL}/posts/${id}`)
        const data = await response.json()
        return data;
    }

    return {
        findAll
    }
}

```
---

`Axios:` É uma biblioteca para disparo e gerenciamento de requisições HTTP completa, com possibilidade de aplicação de `interceptor`, injeção de cabeçalhos, personalização de rota e entre outras características, como a facilitada integração com tipagens do _TypeScript_. Para a sua utilização, é necessário a instalação da dependência em seu projeto.

```bash
npm install axios
```

Após a instalação, é recomendo a criação de uma instância `axios` para ser utilizada ao longo do projeto, com as devidas configurações de `baseUrl`, `headers` e entre outros.
```ts
// utils/axios.ts
import axios from 'axios'

const API_URL = process.env.EXPO_PUBLIC_API_URL

if (!API_URL) {
    throw new Error("URL da api não informada!")
}

export const api = axios.create({
    baseURL: API_URL
})
```

```ts
// hooks/useAxios.ts
export function useAxios() {

    const findAll = async (): Promise<PostsPageResponse> => {
        const { data } = await api.get<PostsPageResponse>('/posts')
        return data
    }

    const findById = async (id: number): Promise<Post> => {
        const { data } = await api.get<Post>(`/posts/${id}`)
        return data
    }

    return {
        findAll
    }
}
```

`Tanstack Query:` É uma biblioteca muito utilizada em aplicações `Web` que vem ganhando força em outras áreas, como o desenvolvimento `Mobile` por conta da facilidade e criar controles mais específicos e funcionais para busca, cache e sincronização de dados e estados de carregamento, um problema real e que pode causar muita dor de cabeça. Para a sua utilização, é necessário a instalação da dependência em seu projeto.

O Tanstack Query (antes conhecido como React Query) não é apenas mais uma forma de fazer requisições. Ele é uma biblioteca de gerenciamento de estado do servidor, que resolve problemas complexos de forma simples:

- **Cache**: Evita requisições repetidas para dados que não mudaram.

- **Sincronização**: Mantém os dados atualizados em segundo plano (stale-while-revalidate).

- **Gerenciamento de Estado**: Abstrai completamente a necessidade de useState para isLoading, error e data.

- **Performance**: Melhora a experiência do usuário com otimismo em mutações e paginação eficiente."

```bash
npm i @tanstack/react-query
```

Para a sua utilização é necessário que seja incluído um `Provider` em toda a aplicação, visando a disponibilização da biblioteca. Em aplicações **React Native + Expo** adicionamos este provedor no arquivo `_layout.tsx` da raiz do projeto.

```ts
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { Tabs } from "expo-router";

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs>
        // Tabs omitidas
      </Tabs>
    </QueryClientProvider>
  );
}

```
A sua utilização remove a necessidade de controle de estados e/ou `useEffect` para disparo de requisições ao acessar uma página.
```ts
// Imports e estilos omitidos

export default function Tanstack() {
  const { findAll } = useAxios()

  const { data: postsResponse, isLoading, refetch } = useQuery<PostsPageResponse>({
    queryKey: ['posts'],
    queryFn: findAll,
  })

  return (
    <View style={{ padding: 20 }}>
      <View style={style.card}>
        <Text>Está pagina realiza requisições HTTP utilizando <Text style={style.title}>Axios + Tanstack</Text></Text>
      </View>

      <TouchableOpacity onPress={() => refetch()} style={style.button}>
        <Text style={{ color: "#FFF", fontWeight: "bold" }}>Recarregar</Text>
      </TouchableOpacity>
      <FlatList
        data={postsResponse?.posts ?? []}
        renderItem={(item) => <RenderPost post={item.item} />}
        ListEmptyComponent={() => {
          if (isLoading) {
            return <ActivityIndicator size="large" color="#0000ff" />
          }

          return <Text>Nenhum post encontrado</Text>
        }}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => refetch()} />}
      />

    </View>
  );
}
```

> [!NOTE]
> Maiores informações sobre a biblioteca podem ser obtidas diretamente em sua [documentação](https://tanstack.com/query/latest)

### Cache (Expo Secure Store)
`expo-secure-store` fornece uma maneira de criptografar e armazenar com segurança pares de chave-valor localmente no dispositivo. Cada projeto Expo tem um sistema de armazenamento separado e não tem acesso ao armazenamento de outros projetos Expo.

> [!WARNING]
> O limite de tamanho para um valor é 2048 bytes.

**Instalação**
```bash
npx expo install expo-secure-store
```

**Configuração**
```json
// app.json
{
  "expo": {
    "plugins": [
      [
        "expo-secure-store",
        {
          "configureAndroidBackup": true,
          "faceIDPermission": "Allow $(PRODUCT_NAME) to access your Face ID biometric data."
        }
      ]
    ]
  }
}
```
**Utilização**
```ts
// hooks/useCache.ts
import * as SecureStore from 'expo-secure-store';

export function useCache() {
    const save = async (key: string, value: string) => {
        await SecureStore.setItemAsync(key, value)
    }

    const get = async (key: string) => {
        return await SecureStore.getItemAsync(key)
    }

    return {
        save,
        get
    }
}
```
