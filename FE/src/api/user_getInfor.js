import ApiManager from "./ApiManager";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uri from "./uri";
export const user_getInfor = async () => {
    try {
        const accessToken = await AsyncStorage.getItem("token")
        const response = await axios.get(`${uri}/user/infor`, {
            headers: {
                'Authorization': accessToken //`${accessToken}`
            }
        });
        // handle successful response
        // await AsyncStorage.setItem("name", JSON.stringify(response.data))
        return response.data;
    } catch (error) {
        // handle error
        console.error(error);
    }
};