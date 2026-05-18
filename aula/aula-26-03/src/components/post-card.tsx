import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAxios } from "../hooks/useAxios";
import { Post } from "../types/post.type";

interface PostCardProps {
    post: Post
}

export default function PostCard({ post }: PostCardProps) {
    const { deletePost, update } = useAxios()

    const excluir = () => {
        try {
            deletePost(post.id);
            console.log('Post excluído com sucesso');
            
        } catch (e) {
            console.error('Erro ao excluir Post', e);
        }
    }

    const atualizar = () => {
        try {
            update(post.id, {
                ...post,
                title: `${post.title} - ATUALIZADO`
            });
            console.log('Post atualizado com sucesso');
        } catch (e) {
            console.error('Erro ao excluir Post', e);
        }
    }

    return (
        <View style={styles.cardContainer}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.views}>{post.views} visualizações</Text>
            </View>

            {/* Body */}
            <View style={styles.body}>
                <Text style={styles.bodyText} numberOfLines={3}>
                    {post.body}
                </Text>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.reactionText}>👍 {post.reactions.likes} curtidas</Text>
                <Text style={styles.reactionText}>👎 {post.reactions.dislikes} descurtidas</Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={atualizar}>
                    <Text style={styles.reactionText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={excluir}>
                    <Text style={styles.reactionText}>Exluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        // Sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Sombra para Android
        elevation: 3,
    },
    header: {
        marginBottom: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginBottom: 4,
    },
    views: {
        fontSize: 12,
        color: '#666666',
    },
    body: {
        marginBottom: 16,
    },
    bodyText: {
        fontSize: 14,
        color: '#4A4A4A',
        lineHeight: 20,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#EAEAEC',
        paddingTop: 12,
    },
    reactionText: {
        fontSize: 13,
        color: '#666666',
        marginRight: 16,
        fontWeight: '500',
    }
});