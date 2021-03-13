import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Image, Button, Input } from "react-native-elements";
import { auth } from "../firebase";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    console.log("sign in");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://image.flaticon.com/icons/png/512/124/124034.png",
        }}
        style={{
          width: 200,
          height: 200,
          marginBottom: 20,
        }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button
        buttonStyle={styles.buttonLogin}
        containerStyle={styles.buttonContainer}
        onPress={signIn}
        title="Login"
      />
      <Button
        buttonStyle={styles.buttonRegister}
        titleStyle={styles.buttonRegisterTitle}
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("Register")}
        type="outline"
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  buttonContainer: {
    width: 200,
    marginTop: 10,
  },
  buttonLogin: {
    backgroundColor: "#1CD741",
  },
  buttonRegister: {
    borderColor: "#1CD741",
  },
  buttonRegisterTitle: {
    color: "#1CD741",
  },
});
