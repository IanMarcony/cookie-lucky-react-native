import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      frase: "",
      img: require("./src/fechado.png"),
    };

    this.frases = [
      "A sorte no jogo só depende da competência do próprio jogador.",
      "Sorte no jogo, azar no amor!",
      "Todo mundo tem a sorte de principiante em todo jogo que inicia.",
      "Sorte no jogo é saber perder!",
      "Por traz de cada jogada de sucesso existe um homem sortudo.",
      "Talvez o amor seja como a sorte: temos de arriscar para o ter.",
      "Não ser amado é falta de sorte, mas não amar é a própria infelicidade.",
      "Nós não precisamos ter sorte no amor. Precisamos é ter um amor recíproco.",
      "Se errar é azar, se acertar é sorte, se amar é destino, você é vítima da vida e ainda não fez nada.",
      "A sua sorte é você mesmo quem faz... Acredite e tudo dará certo!",
    ];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.reload = this.reload.bind(this);
  }

  quebraBiscoito() {
    let nRandom = Math.floor(Math.random() * this.frases.length);

    this.setState({
      frase: this.frases[nRandom],
      img: require("./src/aberto.png"),
    });
  }

  reload() {
    if (
      this.state.frase.length > 0 ||
      this.state.img === require("./src/aberto.png")
    ) {
      this.setState({ frase: "", img: require("./src/fechado.png") });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.textoFrase}>" {this.state.frase} "</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.textBtn}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { marginTop: 10 }]}
          onPress={this.reload}
        >
          <View style={styles.btnArea}>
            <Text style={styles.textBtn}>Reload</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,

    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});

export default App;
