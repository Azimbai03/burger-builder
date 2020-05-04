import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://big-burger-builder.firebaseio.com/";

export default instance;