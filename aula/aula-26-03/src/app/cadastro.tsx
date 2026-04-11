import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { Botao } from "../components/botao";
import { Input } from "../components/input";
import { useFetch } from "../hooks/useFetch";
import { CadastroPost, CadastroPostSchema } from "../types/post.type";

export default function CadastroPostPage() {
    const { salvar: salvarPost } = useFetch()
    const form = useForm({
        resolver: zodResolver(CadastroPostSchema),
    })

    const salvar = async (post: CadastroPost) => {
        console.log('NOVO POST', post);
        const response = await salvarPost(post)
        console.log(response);
        
    }

    return (
        <View>
            <Text>Cadastro de post</Text>

            <FormProvider {...form}>
                <Input keyboardType="default" label="Título do post" nome="title" />
                <Input keyboardType="default" label="Corpo do post" nome="body" />
                <Input keyboardType="numeric" label="ID do usuário" nome="userId" />

                <Botao label="Salvar" onPress={form.handleSubmit(salvar)} />
            </FormProvider>
        </View>
    )
}