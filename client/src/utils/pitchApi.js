import axios from "axios";
const api = {
    savePitch: function(pitchObj) {
      return axios.post("/api/saved", pitchObj);
    },
  }

  export default api