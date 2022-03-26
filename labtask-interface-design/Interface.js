import React, { PureComponent } from "react";


import {
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  View,
  Text,
} from "react-native";
import flex from "../App";

export default function logo() {
  return (
    <View style={styles.parentcont}>
      <View style={styles.container}>
        <Image
          style={styles.pic}
          source={require("../assets/Saly-1intro-image.png")}
        ></Image>
      </View>
      <View>
        <Text style={styles.spce}></Text>
        <Text style={styles.text}>Discover Your</Text>
        <Text style={styles.text}>Own Dream House</Text>
        <Text style={styles.text1}>
          Pink is the color of a namesake flower that is a pale tint of red. It
          was first used as a color name in the late 17th century. According to
          surveys in Europe and the United States, pink is the color
        </Text>

        <Text style={styles.spce}></Text>
        <Text style={styles.spce}></Text>
        <Text style={styles.spce}></Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.Button}>Sign in</Text>
        <Text style={styles.Button1}>Register</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parentcont: {
    marginTop: 10,
    height: 700,
    width: 320,
    borderRadius: 50,
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
    height: 390,
    width: 320,
    borderRadius: 50,
    backgroundColor: "#e75480",
    alignItems: "center",
  },
  pic: {
    height: 350,
    width: 300,
  },
  Button: {
    marginLeft: 20,
    fontSize: 18,
    width: 155,
    color: "white",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "#e75480",
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 55,
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
});
