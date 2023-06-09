import ApiManager from "./ApiManager";

export const user_register = async data => {
    try {
        const result = await ApiManager("/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        });
        
        return result
    } catch (error) {
        console.log(error);
    }
};
