import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import { Botao } from "../components/botao";
import { Input } from "../components/input";
import { ProdutoSchema } from "../types/produto.type";

export default function Index() {
  const form = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(ProdutoSchema),
    defaultValues: {
      produto: 'PRODUTO PADRÃO'
    }
  })

  const enviar = (dados: any) => {
    try {
      ProdutoSchema.parse(dados)
    } catch(e) {
      console.log(e);      
    }
  }

  return (
    <View
      style={{
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Botao
        label="Botão customizado"
        onPress={() => console.log('CLICOU')}
      />

      <FormProvider {...form}>
        <Input
          nome="produto"
          label="Produto"
          keyboardType="default"
          placeholder="Informe o nome do produto"
          obrigatorio
        />
        <Input
          nome="preco"
          label="Preco"
          keyboardType="default"
          placeholder="Informe o preço do produto"
          obrigatorio
        />
        <Botao
          label="Enviar"
          onPress={form.handleSubmit(enviar)}
        />
      </FormProvider>

    </View>
  );
}
