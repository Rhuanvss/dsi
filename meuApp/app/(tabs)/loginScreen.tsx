import React, { JSX, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ViewStyle,
  TextStyle,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = () => {
    // lógica de autenticação
    console.log("Entrando com", email, password);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <View style={styles.panel}>
        <Text style={styles.title}>Tela de login</Text>

        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="Insira o seu email"
            placeholderTextColor="#6b6b6b"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="Insira a sua senha"
            placeholderTextColor="#6b6b6b"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.eye}
            onPress={() => setShowPassword((s) => !s)}
          >
            <Text style={styles.eyeText}>{showPassword ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotWrap}>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        <Text style={styles.small}>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signUp}>Cadastre-se</Text>
        </TouchableOpacity>

        <View style={styles.separatorRow}>
          <View style={styles.line} />
          <Text style={styles.or}>ou</Text>
          <View style={styles.line} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create<{
  screen: ViewStyle;
  panel: ViewStyle;
  title: TextStyle;
  inputWrap: ViewStyle;
  input: TextStyle;
  eye: ViewStyle;
  eyeText: TextStyle;
  forgotWrap: ViewStyle;
  forgot: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  small: TextStyle;
  signUp: TextStyle;
  separatorRow: ViewStyle;
  line: ViewStyle;
  or: TextStyle;
}>(
  {
    screen: {
      flex: 1,
      backgroundColor: "#7b6566",
      alignItems: "center",
      justifyContent: "center",
    },
    panel: {
      width: "92%",
      maxWidth: 420,
      backgroundColor: "#f4f2de",
      borderRadius: 8,
      paddingVertical: 20,
      paddingHorizontal: 24,
      alignItems: "center",
    },
    title: {
      alignSelf: "flex-start",
      marginLeft: 6,
      color: "#9b8f8f",
      marginBottom: 16,
      fontSize: 12,
    },
    inputWrap: {
      width: "100%",
      marginBottom: 10,
      position: "relative",
    },
    input: {
      backgroundColor: "#eef1d9",
      height: 46,
      borderRadius: 12,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: "#cfcfad",
      fontSize: 14,
      color: "#222",
    },
    eye: {
      position: "absolute",
      right: 10,
      top: 8,
      height: 30,
      width: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    eyeText: {
      fontSize: 18,
    },
    forgotWrap: {
      alignSelf: "flex-end",
      marginRight: 4,
      marginTop: 6,
    },
    forgot: {
      color: "#5f6b5f",
      fontSize: 13,
      textDecorationLine: "underline",
    },
    button: {
      width: "100%",
      backgroundColor: "#2e8b57",
      height: 46,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 14,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "700",
      fontSize: 16,
    },
    small: {
      marginTop: 12,
      fontSize: 12,
      color: "#6b6b6b",
    },
    signUp: {
      color: "#0b2f6b",
      textDecorationLine: "underline",
      marginTop: 4,
      fontWeight: "700",
    },
    separatorRow: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      marginTop: 14,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: "#cfcfcf",
    },
    or: {
      marginHorizontal: 10,
      color: "#7b7b7b",
      fontSize: 12,
    },
  }
);