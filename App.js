import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ToastAndroid,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

/* ============================================
   TELA 1 – LOGIN
============================================ */
function TelaLogin({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const USER_VALIDO = "aluno";
  const PASS_VALIDO = "123";

  function fazerLogin() {
    if (user === USER_VALIDO && pass === PASS_VALIDO) {
      ToastAndroid.show("Login realizado com sucesso!", ToastAndroid.SHORT);
      navigation.navigate("Menu Corridas", { usuario: user });
    } else {
      ToastAndroid.show("Usuário ou senha incorretos!", ToastAndroid.SHORT);
    }
  }

  return (
    <View style={styles.containerLogin}>
      <Text style={styles.title}>CorreP2</Text>
      <Text style={styles.subtitle}>Seu app de corridas</Text>

      <TextInput
        placeholder="Usuário"
        style={styles.input}
        value={user}
        onChangeText={setUser}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={pass}
        onChangeText={setPass}
      />

      <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
        <Text style={styles.textoBotao}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

/* ============================================
   TELA 2 – MENU DE CORRIDAS
============================================ */
function MenuCorridas({ route, navigation }) {
  const { usuario } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Corridas Disponíveis</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("CorridaExemplo1", { usuario })
        }
      >
        <Text style={styles.cardTitle}>🏃 Corrida da Opala</Text>
        <Text style={styles.cardText}>5 Km</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("CorridaExemplo2", { usuario })
        }
      >
        <Text style={styles.cardTitle}>🏔️ Corrida da Serra</Text>
        <Text style={styles.cardText}>3 Km</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("Minhas Corridas", { usuario })
        }
      >
        <Text style={styles.cardTitle}>📌 Suas corridas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("Histórico", { usuario })
        }
      >
        <Text style={styles.cardTitle}>📜 Histórico</Text>
      </TouchableOpacity>
    </View>
  );
}

/* ============================================
   TELA 3 – MINHAS CORRIDAS
============================================ */
function MinhasCorridas({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas Corridas</Text>
      <Text style={styles.text}>Nenhuma corrida registrada</Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

/* ============================================
   CORRIDA EXEMPLO 1
============================================ */
function CorridaExemplo1({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./portal.jpeg")} style={styles.imagem} />

      <Text style={styles.title}>Corrida da Opala</Text>
      <Text style={styles.subtitle}>Informações</Text>
      <Text style={styles.text}>Distância: 5 Km</Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Inscrever-se</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

/* ============================================
   CORRIDA EXEMPLO 2
============================================ */
function CorridaExemplo2({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./serra.jpeg")} style={styles.imagem} />

      <Text style={styles.title}>Corrida da Serra</Text>
      <Text style={styles.subtitle}>Informações</Text>
      <Text style={styles.text}>Distância: 3 Km</Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Inscrever-se</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

/* ============================================
   HISTÓRICO
============================================ */
function Historico({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico</Text>
      <Text style={styles.text}>Ainda não há histórico</Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

/* ============================================
   APP PRINCIPAL
============================================ */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Menu Corridas" component={MenuCorridas} />
        <Stack.Screen name="CorridaExemplo1" component={CorridaExemplo1} />
        <Stack.Screen name="CorridaExemplo2" component={CorridaExemplo2} />
        <Stack.Screen name="Minhas Corridas" component={MinhasCorridas} />
        <Stack.Screen name="Histórico" component={Historico} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* ============================================
   ESTILOS
============================================ */
const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#F2F2F2",
  },

  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F2F2F2",
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#db6318",
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
  },

  input: {
    backgroundColor: "#FFF",
    padding: 14,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    marginBottom: 15,
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#1E88E5",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },

  botaoSecundario: {
    backgroundColor: "#1565C0",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#FFF",
    width: "100%",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
  },

  cardText: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },

  imagem: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 15,
  },

  text: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
  },
});
