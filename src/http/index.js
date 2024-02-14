import axios from "axios";
import { parseCookies } from "nookies"
const cookies = parseCookies()

axios.defaults.params = { lang: cookies.lang || "en" }

export default axios