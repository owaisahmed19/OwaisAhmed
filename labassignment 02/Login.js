import React, { PureComponent } from "react";

import {
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  View,
  Text,
} from "react-native";
import { TextInput } from "react-native-web";
import flex from "../App";

export default function logo() {
  return (
    <View style={styles.parentcont}>
      <View style={styles.container}>
        <Image
          style={styles.pic}
          source={require("../assets/Saly-1intro-image.png")}
        ></Image>
        <Text style={styles.text_login}>Login</Text>
      </View>
      <View>
        <Text style={styles.spce}></Text>
      </View>
      <View>
        <Text style={styles.spce}></Text>
        <TextInput
          style={styles.input}
          placeholder="       Email"
          placeholderTextColor="black"
          autoCapitalize="none"
        ></TextInput>
        <Text style={styles.spce}></Text>
        <TextInput
          style={styles.input}
          placeholder="       Password"
          placeholderTextColor="black"
          autoCapitalize="none"
        ></TextInput>
        <Text style={styles.test_forget}>Forget Password ?</Text>
        <Text style={styles.spce}></Text>
        <Text style={styles.spce}></Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.Button}>LOGIN</Text>
      </View>
      <View>
        <Text style={styles.spce}></Text>
        <Text style={styles.spce}></Text>
        <Text style={styles.spce}></Text>
        <Text style={styles.spce}></Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text_noacc}>Don't hava an account ?</Text>
        <Text style={styles.text_reg}> Register</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parentcont: {
    marginTop: 10,
    height: 700,
    width: 320,
    alignItems: "center",

    backgroundColor: "white",
  },
  text: {
    alignContent: "center",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  spce: {
    marginTop: 18,
  },
  text1: {
    marginTop: 20,
    alignContent: "center",
    fontSize: 12,
    textAlign: "center",
    color: "black",
  },
  container: {
    height: 300,
    width: 300,
    borderBottomLeftRadius: 100,
    backgroundColor: "#ff7700",
  },
  pic: {
    height: 230,
    width: 180,
    alignSelf: "center",
  },
  Button: {
    fontSize: 11,
    width: 250,
    color: "white",
    borderRadius: 50,
    backgroundColor: "#ff7700",
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "center",
    lineHeight: 35,
  },
  Button1: {
    fontSize: 18,
    width: 120,
    lineHeight: 55,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 20,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#f8f8ff",
  },
  text_login: {
    fontSize: 19,
    marginRight: 25,
    color: "#f8f8ff",
    textAlign: "right",
  },
  input_email: {
    height: 20,
  },
  text_noacc: {
    fontSize: 10,
    color: "black",
  },
  text_reg: {
    fontSize: 10,
    color: "#ff7700",
  },
  input: {
    width: 250,
    height: 35,
    fontSize: 12,
    borderColor: "#ff7700",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 50,
  },
  test_forget: {
    fontSize: 10,
    color: "black",
    textAlign: "right",
    marginTop: 10,
  },
});
