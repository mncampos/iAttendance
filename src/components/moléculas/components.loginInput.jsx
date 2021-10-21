import React from "react";
import { View, Linking, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { LoginValidator } from "../data/loginValidator";

export function LoginInput({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ref_pswd = React.useRef();

  return (
    <View>
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.textInputs}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={() => {
          ref_pswd.current.focus();
        }}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.textInputs}
        mode="outlined"
        label="Senha"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        ref={ref_pswd}
        blurOnSubmit={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        style={styles.loginButton}
        mode="contained"
        color="#6461FF"
        onPress={() => {
          const loginResult = LoginValidator(`${email}`, `${password}`);
          if (loginResult == 0)
            alert("Senha ou e-mail inválidos. Tente novamente.");
          if (loginResult == 1) {
            alert("Login de aluno confirmado. Seja bem vindo.");
            navigation.navigate("MainScreen");
          }
          if (loginResult == 2) {
            alert("Login de professor confirmado. Seja bem vindo.");
            navigation.navigate("ProfessorMainScreen");
          }
        }}
      >
        LOGIN
      </Button>
      <Button
        mode="text"
        color="grey"
        onPress={() => Linking.openURL("http://www.ufrgs.br/ufrgs/inicial")}
      >
        Esqueceu sua senha?
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    margin: "5%",
    borderRadius: 50,
  },
  textInputs: {
    margin: "5%",
  },
});
