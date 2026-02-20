# Atividade: Classificador de Triângulos 📐

**Objetivo:** Criar um app em React Native que valide e classifique triângulos com base em três entradas numéricas.

### 📝 O Problema

O programa deve receber três valores (ladoA, ladoB e ladoC) e aplicar as seguintes regras:

1. **Validação:** Os lados devem ser maiores que zero.
2. **Condição de Existência:** A soma de dois lados deve ser sempre maior que o terceiro ($a + b > c$).
3. **Classificação:**
* **Equilátero:** 3 lados iguais.
* **Isósceles:** 2 lados iguais.
* **Escaleno:** 3 lados diferentes.

---

### 💻 Requisitos Técnicos

* Utilizar **TypeScript** para tipar os dados dos lados.
* Gerenciar o estado dos inputs com o hook `useState`.
* Exibir o resultado ou mensagens de erro utilizando `Alert.alert`.
* Estilizar a interface com `StyleSheet` (inputs com bordas e preenchimento).

---