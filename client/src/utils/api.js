import axios from "axios";

const getUser = (callback) => {
 return axios.get("/user");
};

export default getUser
