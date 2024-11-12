import React from "react"
import { SafeAreaView, TouchableOpacity, Linking, Alert, Text, StyleSheet, Image, View } from "react-native"

const openLinkGit = () => {
    const url = 'https://github.com/JoaoMarcosVilela'; // URL que você deseja abrir
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
};
const openLinkLinkedin = () => {
    const url = 'https://www.linkedin.com/in/joaomvc/'; // URL que você deseja abrir
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
};

export default () => {
    return (
        <SafeAreaView style={style.safeArea}>
            <View style={style.container}>

                <Image
                    source={require('../assets/JoaoMarcos.jpeg')} // Caminho relativo para o arquivo
                    style={style.imageMe}
                />

                <Text style={style.myName}>Oi, Eu sou João Marcos</Text>
                <Text style={style.simpleText}>Abaixo está meu GitHub e Linkedin</Text>

                <View style={style.logoContainer}>

                    <TouchableOpacity onPress={openLinkGit}>
                        <Image
                            source={require('../assets/github-logo.png')} // Caminho para a imagem
                            style={style.imageLogos}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={openLinkLinkedin}>
                        <Image
                            source={require('../assets/linkedin.png')} // Caminho para a imagem
                            style={style.imageLogos}
                        />
                    </TouchableOpacity>

                </View>



            </View>


        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#6329df'
    },
    container: {
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
        padding: 16, // Adiciona um padding para evitar que o conteúdo encoste nas bordas da tela
    },
    title: {
        textAlign: "center",
        fontSize: 50,
    },
    imageMe: {
        marginTop: 40,
        width: 200,
        height: 200,
        alignItems: "center",
        alignContent: 'center',
        borderRadius: 20, // Borda arredondada do contêiner
        borderWidth: 2, // Largura da borda
        borderColor: '#00f2f9', // Cor da borda (uma cor dourada suave, por exemplo)
    },
    logoContainer: {
        marginTop: 40,
        flexDirection: 'row', // Alinha as imagens na horizontal
        justifyContent: 'center', // Centraliza as imagens horizontalmente (opcional)
        alignItems: 'center', // Alinha as imagens verticalmente (opcional)
    },
    imageLogos: {
        width: 150,
        height: 150,
        marginHorizontal: 10
    },
    myName: {
        fontFamily: 'Copperplate',
        marginTop: 50,
        fontSize: 22,
        color: 'white'
    },
    simpleText: {
        marginTop: 5,
        color: 'white'
    }
})
