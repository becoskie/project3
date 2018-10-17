import axios from "axios";

const getUser = (callback) => {
  return axios.get("/user");
 }

const api = {

 // Retrieves saved Pitchs from the db
 getPitch: function() {
   return axios.get("/api/saved");
 },
 // Saves a new Pitch to the db
 savePitch: function(pitchObj) {
   return axios.post("/api/saved", pitchObj);
 },
 // Deletes an Pitch from the db
 deletePitch: function(id) {
   return axios.delete(`/api/saved/${id}`);
 }
};

export {
  getUser,
  api,
}