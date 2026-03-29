import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "../components/input";
import { Login, loginSchema } from "../schemas/login.schema";


export default function Index() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      nome: '',
      idade: 0,
    },
  });

  const onSubmit = (data: Login) => {
    console.log(data);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormProvider {...form}>
        <Input
          nome="nome"
          label="Nome"
          placeholder="Digite seu nome"
          keyboardType="default"
          obrigatorio
        />

        <Input
          nome="email"
          label="Email"
          placeholder="Digite seu email"
          keyboardType="email-address"
        />

        <Input
          nome="idade"
          label="Idade"
          placeholder="Digite sua idade"
          keyboardType="numeric"
        />

        <TouchableOpacity onPress={form.handleSubmit(onSubmit)}
          style={{
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text>Salvar</Text>
        </TouchableOpacity>
      </FormProvider>
    </View>
  );
}
