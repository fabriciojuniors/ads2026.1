# Armazenamento Local

## SQLite
Utilizado para armazenar registros estruturados em base local. Ideal para cache de autenticação, carrinho de compras, preferências e dados que precisam persistir mesmo sem conexão de internet.

### Instalação

```bash
npx expo install expo-sqlite
```

### Configuração

#### 1. Criar utilitário para gerenciar o banco de dados

Crie o arquivo `src/utils/db.ts`:

```typescript
import * as SQLite from 'expo-sqlite';

// Abre (ou cria) o banco de dados
export const db = SQLite.openDatabaseSync('test.db')

// Função para criar tabelas (migrações)
export const migrateDbIfNeeded = async (db: SQLite.SQLiteDatabase) => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS USUARIOS(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    );
  `);
}
```

#### 2. Inicializar o banco de dados no app

No arquivo `src/app/_layout.tsx`, utilize o `SQLiteProvider` para inicializar o banco:

```typescript
import { SQLiteProvider } from 'expo-sqlite';
import { migrateDbIfNeeded } from '../utils/db';

export default function RootLayout() {
  return (
    <SQLiteProvider 
      databaseName="test.db" 
      onInit={migrateDbIfNeeded} 
      useSuspense
    >
      {/* Seu layout aqui (Tabs, Stack, etc) */}
    </SQLiteProvider>
  );
}
```

**Propriedades do SQLiteProvider:**
- `databaseName`: Nome do arquivo do banco de dados
- `onInit`: Função executada na primeira inicialização (para criar tabelas)
- `useSuspense`: Aguarda a inicialização antes de renderizar os filhos

### Operações CRUD

#### Inserir dados

```typescript
import { db } from '../utils/db';

const handleSave = async () => {
  await db.runAsync(
    `INSERT INTO USUARIOS (nome, email) VALUES (?, ?)`, 
    [nome, email]
  );
}
```

#### Consultar dados

```typescript
// Buscar todos os registros
const result = await db.getAllAsync(`SELECT * FROM USUARIOS`);
console.log(result);

// Buscar com WHERE
const usuario = await db.getAllAsync(
  `SELECT * FROM USUARIOS WHERE email = ?`, 
  [email]
);

// Buscar um único registro
const primeiro = await db.getFirstAsync(`SELECT * FROM USUARIOS LIMIT 1`);
```

#### Atualizar dados

```typescript
await db.runAsync(
  `UPDATE USUARIOS SET nome = ? WHERE id = ?`, 
  [novoNome, id]
);
```

#### Deletar dados

```typescript
await db.runAsync(`DELETE FROM USUARIOS WHERE id = ?`, [id]);
```

### Exemplo Completo

```typescript
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../utils/db";

export default function Sql() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const handleSave = async () => {
    try {
      await db.runAsync(
        `INSERT INTO USUARIOS (nome, email) VALUES (?, ?)`, 
        [nome, email]
      );
      setNome("");
      setEmail("");
      fetchUsuarios(); // Recarrega a lista
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  };

  const fetchUsuarios = async () => {
    const result = await db.getAllAsync(`SELECT * FROM USUARIOS`);
    setUsuarios(result);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Cadastro com SQLite
      </Text>
      
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, padding: 10, marginTop: 10 }}
      />
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginTop: 10 }}
      />
      
      <TouchableOpacity onPress={handleSave} style={{ backgroundColor: "#4CAF50", padding: 10, marginTop: 10 }}>
        <Text style={{ color: "#FFF", textAlign: "center" }}>Salvar</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20, fontWeight: "bold" }}>
        Usuários cadastrados: {usuarios.length}
      </Text>
    </View>
  );
}
```

### Boas Práticas

1. **Use prepared statements**: Sempre use `?` como placeholder para evitar SQL injection
2. **Trate erros**: Envolva operações em try/catch
3. **Migrações**: Crie tabelas com `IF NOT EXISTS` para evitar erros
4. **Índices**: Adicione índices em colunas frequentemente consultadas
5. **Transações**: Use transações para múltiplas operações relacionadas

### Comandos SQL Úteis

```sql
-- Criar índice
CREATE INDEX IF NOT EXISTS idx_email ON USUARIOS(email);

-- Adicionar coluna (em nova migração)
ALTER TABLE USUARIOS ADD COLUMN telefone TEXT;

-- Deletar tabela
DROP TABLE IF EXISTS USUARIOS;
```