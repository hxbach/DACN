import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { user_register } from "../api/user_register";

let isValid = true;

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [badPhone, setBadPhone] = useState(false);
  const [password, setPassword] = useState(""); // don't forget hash pass before send it to API
  const [badPassword, setBadPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(""); // don't forget hash pass before send it to API
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);
  const signup = () => {
    setButtonDisable(true);
    if (email == "") {
      setBadEmail(true);
      isValid = false;
    } else setBadEmail(false);

    if (name == "") {
      setBadName(true);
      isValid = false;
    } else setBadName(false);

    if (password == "") {
      setBadPassword(true);
      isValid = false;
    } else if (password.length < 6) {
      setBadPassword(true);
      isValid = false;
      alert("mật khẩu phải nhiều hơn hoặc bằng 6 kí tự");
    } else setBadPassword(false);

    if (phone == "") {
      setBadPhone(true);
      isValid = false;
    } else setBadPhone(false);

    if (confirmPassword == "") {
      setBadConfirmPassword(true);
      isValid = false;
    } else setBadConfirmPassword(false);

    if (confirmPassword !== password) {
      setBadConfirmPassword(true);
      isValid = false;
    } else setBadConfirmPassword(false);

    setTimeout(() => {
      if (isValid == true) {
        saveData();
      } else {
        setButtonDisable(false);
      }
    }, 2000);
  };


  const saveData = async () => {
    user_register({
      name: name,
      email: email,
      phone: phone,
      password: password,
    })
      .then(() => {
        alert("Succes register");
        navigation.goBack();
      })
  };
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../Screen/Images/playstore.png")}
          style={{
            width: 80,
            height: 80,
            alignSelf: "center",
            marginTop: 50,
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
          Create a account
        </Text>
        <CustomTextInput
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
          placeHolder={"what's your name?"}
          icon={require("./Images/user.png")}
        />
        {badName === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please enter your name
          </Text>
        )}
        <CustomTextInput
          value={email}
          onChangeText={(txt) => {
            setEmail(txt);
          }}
          placeHolder={"Enter your email"}
          icon={require("./Images/mail.png")}
        />
        {badEmail === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please enter your email
          </Text>
        )}
        <CustomTextInput
          value={phone}
          keyboardType="number-pad"
          onChangeText={(txt) => {
            setPhone(txt);
          }}
          placeHolder={"Enter your phone number"}
          icon={require("./Images/smartphone.png")}
        />
        {badPhone === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please enter your moble phone
          </Text>
        )}
        <CustomTextInput
          value={password}
          onChangeText={(txt) => {
            setPassword(txt);
          }}
          placeHolder={"Enter your password"}
          icon={require("./Images/padlock.png")}
        />
        {badPassword === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please enter correct format password
          </Text>
        )}
        <CustomTextInput
          value={confirmPassword}
          onChangeText={(txt) => {
            setConfirmPassword(txt);
          }}
          placeHolder={"confirm your password"}
          icon={require("./Images/padlock.png")}
        />
        {badConfirmPassword === true && (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Please enter again password
          </Text>
        )}
        <CommonButton
          title={"Create account"}
          bgColor={buttonDisable ? "8e8e8e" : "#000"}
          textColor={"#fff"}
          onPress={() => {
            signup();
          }}
          disabled={buttonDisable}
        />
        {/* sign up */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "800",
            alignSelf: "center",
            marginTop: 20,
            textDecorationLine: "underline",
            marginBottom: 100,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          Already a account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
