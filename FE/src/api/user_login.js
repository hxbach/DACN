import ApiManager from "./ApiManager";

export const user_login = async data => {
  try {
    const result = await ApiManager("http://192.168.43.3:5000/user/login", {
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
