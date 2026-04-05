import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Post } from "../types/Post";

export function RenderPost({ post }: { post: Post }) {
    const [expanded, setExpanded] = useState(false);
    const shouldTruncate = post.body && post.body.length > 140;
    const summary = shouldTruncate ? post.body.slice(0, 140).trim() + "..." : post.body;

    return (
        <View style={styles.card}>
            <Text style={styles.title} numberOfLines={2}>{post.title}</Text>

            <Text style={styles.body}>{expanded ? post.body : summary}</Text>

            {shouldTruncate && (
                <TouchableOpacity onPress={() => setExpanded(v => !v)}>
                    <Text style={styles.toggleText}>{expanded ? "Mostrar menos" : "Mostrar mais"}</Text>
                </TouchableOpacity>
            )}

            <View style={styles.metaRow}>
                <View style={styles.metaLeft}>
                    <Text style={styles.metaText}>👤 {post.userId}</Text>
                    <Text style={styles.metaText}>👁️ {post.views}</Text>
                </View>

                <View style={styles.metaRight}>
                    <Text style={styles.reaction}>👍 {post.reactions?.likes ?? 0}</Text>
                    <Text style={styles.reaction}>👎 {post.reactions?.dislikes ?? 0}</Text>
                </View>
            </View>

            <View style={styles.tagsRow}>
                {post.tags?.map(tag => (
                    <View key={tag} style={styles.tag}>
                        <Text style={styles.tagText}>#{tag}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 12,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 6,
        color: "#111",
    },
    body: {
        fontSize: 14,
        color: "#333",
        lineHeight: 20,
    },
    toggleText: {
        color: "#007AFF",
        marginTop: 6,
        fontSize: 13,
    },
    metaRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    metaLeft: {
        flexDirection: "row",
        gap: 10,
    },
    metaRight: {
        flexDirection: "row",
        gap: 12,
    },
    metaText: {
        fontSize: 12,
        color: "#666",
        marginRight: 10,
    },
    reaction: {
        fontSize: 12,
        color: "#666",
        marginLeft: 8,
    },
    tagsRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
        gap: 8,
    },
    tag: {
        backgroundColor: "#F1F3F5",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        marginRight: 6,
        marginBottom: 6,
    },
    tagText: {
        fontSize: 12,
        color: "#555",
    },
});
