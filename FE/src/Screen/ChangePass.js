import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CustomTextInput from "../common/CustomTextInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CommonButton from "../common/CommonButton";
import axios from "axios";
import uri from "../api/uri";
import { useNavigation } from "@react-navigation/native";
const ChangePass = () => {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [checkMail, setCheckMail] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [id, setId] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const saveData = async () => {
      const checkmail = await AsyncStorage.getItem("email");
      const checkpass = await AsyncStorage.getItem("password");
      const idg = await AsyncStorage.getItem("id");
      setCheckMail(checkmail);
      setCheckPass(checkpass);
      setId(idg);
    };
    saveData();
  }, []);
  const Change = async () => {
    console.log("ok");
    await axios
      .put(`${uri}/user/update/${id}`, {
        password: newPassword,
      })
      .then(() => {
        alert("Đổi mật khẩu thành công");
        navigation.goBack();
      })
      .catch(() => {
        alert("Đổi mật khẩu thành công");
        navigation.goBack();
      });
  };
  return (
    <View>
      <Text
        style={{
          marginTop: 50,
          alignSelf: "center",
          fontSize: 24,
          fontWeight: 600,
          color: "#000",
        }}
      >
        Đổi mật khẩu
      </Text>
      <CustomTextInput
        placeHolder={"Enter your email"}
        icon={require("./Images/mail.png")}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <CustomTextInput
        placeHolder={"Enter old password"}
        type="password"
        icon={require("./Images/padlock.png")}
        value={oldPassword}
        onChangeText={(text) => setOldPassword(text)}
      />
      <CustomTextInput
        placeHolder={"Enter new password"}
        type="password"
        icon={require("./Images/padlock.png")}
        value={newPassword}
        onChangeText={(text) => setnewPassword(text)}
      />
      <CommonButton
        title={"Đổi mật khẩu"}
        bgColor={"#000"}
        textColor={"#fff"}
        onPress={() => {
          console.log(id);
          // console.log(email.toLocaleLowerCase(),checkMail, oldPassword, checkPass);
          if (
            email.toLocaleLowerCase() == checkMail &&
            oldPassword == checkPass &&
            newPassword.length >= 6
          ) {
            Change();
          }
        }}
      />
    </View>
  );
};

export default ChangePass;
