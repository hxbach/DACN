import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { user_login } from "../api/user_login";

const Login = () => {
  const navigation = useNavigation(); // điều hướng
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // don't forget hash pass before send it to API
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [token, setToken] = useState('')

  const check = () => {
    const saveData = async () => {
      await AsyncStorage.setItem("email", email.toLocaleLowerCase());
      await AsyncStorage.setItem("password", password);
      
    };
    saveData();
    user_login({
      email: email.toLocaleLowerCase(),
      password: password,
    })
      .then((result) => {
        if (result.status == 200) {
          navigation.navigate("Home");
          setEmail("")
          setPassword("")
          AsyncStorage.setItem("token", result.data.accessToken)
          // AsyncStorage.setItem("id", )

        }
        // console.log(typeof (result.status));
      })
      .catch(() => alert("accout or password incorrect"));
  };
  
  const login = () => {
    if (email == "") {
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password == "") {
        setBadPassword(true);
      } else {
        setBadPassword(false);
        check();
      }
    }
  };

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../Screen/Images/logiii.png")}
          style={{
            width: 80,
            height: 80,
            alignSelf: "center",
            marginTop: 100,
            borderRadius: 50,
            resizeMode: "center",
          }}
        />
        <Text
          style={{
            marginTop: 50,
            alignSelf: "center",
            fontSize: 24,
            fontWeight: 600,
            color: "#000",
          }}
        >
          Login
        </Text>
        <CustomTextInput
          placeHolder={"Enter your email"}
          icon={require("./Images/mail.png")}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {badEmail === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please enter your email
          </Text>
        )}
        <CustomTextInput
          placeHolder={"Enter your password"}
          type="password"
          icon={require("./Images/padlock.png")}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {badPassword === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please enter your password
          </Text>
        )}
        <CommonButton
          title={"Login"}
          bgColor={"#000"}
          textColor={"#fff"}
          onPress={login}
        />
        {/* sign up */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "800",
            alignSelf: "center",
            marginTop: 20,
            textDecorationLine: "underline",
            marginBottom: 60,
          }}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          Create new account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;
