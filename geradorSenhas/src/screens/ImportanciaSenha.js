import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function ImporSenha({ route }) {
    return (
        <View style={styles.container}> 
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>A Importância de Senhas Fortes na Segurança Digital</Text>
                
                <Image 
                    source={require('../imgs/senha-img.png')} // Insira o caminho correto para a imagem
                    style={styles.image}
                />
                
                <View style={styles.textBox}>
                    <Text style={styles.bodyText}>
                        As senhas fortes são essenciais para garantir a segurança das nossas informações pessoais e contas online, protegendo-nos contra ameaças cibernéticas como ataques de hackers e roubo de dados.
                        No entanto, muitas pessoas ainda utilizam senhas fracas, simples ou as mesmas em várias plataformas, o que torna suas contas vulneráveis a acessos não autorizados.
                        De acordo com uma pesquisa realizada com 50 participantes, 42% dos entrevistados afirmaram usar senhas fortes, enquanto a maioria ainda reutiliza senhas ou escolhe combinações fáceis de lembrar, o que aumenta o risco de ataques bem-sucedidos.
                    </Text>
                </View>

                <View style={styles.textBox}>
                    <Text style={styles.bodyText}>
                        Para aumentar a segurança digital, é recomendado criar senhas únicas e complexas, combinando letras maiúsculas, minúsculas, números e caracteres especiais. 
                        Além disso, o uso de ferramentas como gerenciadores de senhas e a ativação de autenticação de dois fatores (2FA) são práticas importantes para proteger nossas contas.
                        Com o aumento dos ataques cibernéticos, adotar essas boas práticas se torna crucial para evitar o comprometimento de dados pessoais e garantir a privacidade online.
                    </Text>
                </View>

                <View style={styles.textBox}>
                    <Text style={styles.bodyText}>
                        Embora criar senhas fortes seja essencial, muitos usuários ainda cometem erros comuns ao escolher suas senhas. Aqui estão alguns dos erros mais frequentes que devemos evitar:
                    </Text>
                    <Text style={styles.bodyText}>
                        1. **Usar Senhas Simples**: Senhas como "123456", "senha123" ou o nome do pet são fáceis de adivinhar e não oferecem segurança. Sempre crie senhas longas e complexas.
                    </Text>
                    <Text style={styles.bodyText}>
                        2. **Reutilizar Senhas**: Utilizar a mesma senha em diferentes sites e serviços aumenta o risco de comprometer várias contas caso uma delas seja hackeada.
                    </Text>
                    <Text style={styles.bodyText}>
                        3. **Ignorar Atualizações de Senha**: Muitas pessoas não atualizam suas senhas regularmente. Se você for hackeado ou se um serviço for invadido, alterar a senha imediatamente é crucial.
                    </Text>
                </View>

                <View style={styles.textBox}>
                    <Text style={styles.bodyText}>
                        Para melhorar ainda mais a segurança das suas contas, considere usar um **gerenciador de senhas**. Esses aplicativos podem gerar e armazenar senhas fortes, permitindo que você utilize senhas únicas e complexas sem precisar memorizá-las.
                    </Text>
                    <Text style={styles.bodyText}>
                        Além disso, sempre ative a **autenticação de dois fatores (2FA)** sempre que possível. A autenticação de dois fatores adiciona uma camada extra de segurança, exigindo não apenas a senha, mas também um código enviado para o seu telefone ou e-mail.
                    </Text>
                </View>

                <View style={styles.textBox}>
                    <Text style={styles.bodyText}>
                        Lembre-se: senhas fortes e práticas de segurança são a primeira linha de defesa contra ciberataques. Quanto mais complexa for sua senha e mais precauções você tomar, menor será o risco de suas contas e dados pessoais serem comprometidos.
                    </Text>
                    <Text style={styles.bodyText}>
                        Em resumo, siga estas boas práticas para manter suas contas seguras:
                    </Text>
                    <Text style={styles.bodyText}>
                        - Use senhas longas e complexas (pelo menos 12 caracteres).
                    </Text>
                    <Text style={styles.bodyText}>
                        - Evite usar informações pessoais óbvias, como nomes e datas de nascimento.
                    </Text>
                    <Text style={styles.bodyText}>
                        - Ative sempre a autenticação de dois fatores (2FA).
                    </Text>
                    <Text style={styles.bodyText}>
                        - Use um gerenciador de senhas para armazenar suas senhas de forma segura.
                    </Text>
                    <Text style={styles.bodyText}>
                        - Atualize suas senhas regularmente, especialmente após uma violação de segurança.
                    </Text>
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
        color: '#4D3592',  // Cor vibrante para o título
        marginBottom: 20,  // Espaçamento abaixo do título
        textAlign: 'center',  // Centraliza o título
    },
    image: {
        width: '100%',  // Largura completa da imagem
        height: 200,  // Altura da imagem (ajustável conforme necessário)
        marginTop: 20,  // Espaço acima da imagem
        borderRadius: 10,  // Bordas arredondadas para um visual mais suave
        alignSelf: 'center',  // Centraliza a imagem horizontalmente
    },
    textBox: {
        backgroundColor: '#ffffff',  // Cor de fundo branca para as caixas de texto
        padding: 20,  // Padding dentro da caixa de texto
        marginVertical: 15,  // Espaçamento entre as caixas de texto
        borderRadius: 10,  // Bordas arredondadas para as caixas de texto
        shadowColor: '#000',  // Sombra para dar profundidade
        shadowOpacity: 0.1,  // Opacidade da sombra
        shadowRadius: 5,  // Raio da sombra
        elevation: 5,  // Sombra para Android
    },
    bodyText: {
        fontSize: 16,  // Tamanho do texto
        color: '#333',  // Cor do texto (preto suave)
        lineHeight: 24,  // Altura da linha para melhorar a legibilidade
        textAlign: 'justify',  // Justifica o texto para uma leitura mais fluida
        marginBottom: 10,  // Espaço entre os parágrafos
    },
});

