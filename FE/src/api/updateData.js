import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uri from "./uri";
export const updateData = async (total) => {
    try {
        const id = await AsyncStorage.getItem("id")
        console.log(id);
        const response = await axios.put(`${uri}/user/update/${id}`, {
            cart: total
        });
        // handle successful response
        // await AsyncStorage.setItem("name", JSON.stringify(response.data))
        return response.data;
    } catch (error) {
        // handle error
        
        console.log("nooooo");
        console.error(error);
    }
};