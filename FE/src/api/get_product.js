import ApiManager from "./ApiManager";

export const get_product = async data => {
    try {
        const result = await ApiManager("/api/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        })

        return result
    } catch (error) {
        console.log(error);
    }
};
