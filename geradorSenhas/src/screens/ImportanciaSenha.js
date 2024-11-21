import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function ImporSenha({ route }) {
    return (
        <View style={styles.container}> 
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>A Importância de Senhas Fortes na Segurança Digital</Text>
                
                <Image 
                    source={require('../imgs/senharoxa.png')} // Insira o caminho correto para a imagem
                    style={styles.image}
                />
                
                <View style={styles.textBox}>
                    <Text style={styles.bodyText}>
                    Ter uma senha forte é essencial para proteger suas informações pessoais e contas online contra ameaças como
                     hackers e vazamentos de dados. Senhas facies ou reutilizadas facilitam ataques cibernéticos, comprometendo 
                     várias contas de uma vez. Uma senha forte, única e complexa, dificulta a ação de invasores e atua como a 
                     primeira linha de defesa. Combinada com práticas como autenticação de dois fatores, ela oferece uma camada 
                     extra de proteção, garantindo maior segurança e evitando o roubo de dados seguros. Em um mundo digital cada
                      vez mais vulnerável, investir em boas senhas é uma medida essencial para proteger sua privacidade e evitar 
                      prejuízos. </Text>
                </View>

            
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  // Garante que o container ocupe toda a tela
        padding: 20,
        backgroundColor: '#f5f5f5',  // Cor de fundo suave para o layout
    },
    scrollContainer: {
        flexGrow: 1,  // Garante que o conteúdo dentro do ScrollView possa ser rolado adequadamente
    },
    title: {
        fontSize: 26,  // Tamanho grande para o título
        fontWeight: 'bold',  // Deixa o título em negrito
        color: '#7F5C84',  // Cor vibrante para o título
        marginBottom: 20,  // Espaçamento abaixo do título
        textAlign: 'center',  // Centraliza o título
    },
    image: {
        width: 250,  // Largura completa da imagem
        height: 120,  // Altura da imagem (ajustável conforme necessário)
        marginTop: 20,  // Espaço acima da imagem
        borderRadius: 10,  // Bordas arredondadas para um visual mais suave
        alignSelf: 'center',  // Centraliza a imagem horizontalmente
    },
    textBox: {
        backgroundColor: '#EBE4F1',  // Cor de fundo branca para as caixas de texto
        padding: 20,  // Padding dentro da caixa de texto
        marginVertical: 15,  // Espaçamento entre as caixas de texto
        borderRadius: 10,  // Bordas arredondadas para as caixas de texto
        shadowColor: '#000',  // Sombra para dar profundidade
        shadowOpacity: 0.1,  // Opacidade da sombra
        shadowRadius: 5,  // Raio da sombra
        elevation: 5,  // Sombra para Android
    },
    bodyText: {
        fontSize: 17,  // Tamanho do texto
        color: '#333',  // Cor do texto (preto suave)
        lineHeight: 24,  // Altura da linha para melhorar a legibilidade
        textAlign: 'justify',  // Justifica o texto para uma leitura mais fluida
        marginBottom: 10,  // Espaço entre os parágrafos
    },
});

