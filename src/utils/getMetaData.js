import axios from "axios";
const getMetadata = async (api) => {
    try {
        const {data} = await axios(api)
        return data
    } catch (error) {
        console.error(error);
        return {}
    }
}

export default getMetadata