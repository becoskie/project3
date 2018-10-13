import axios from "axios";

const getUser = (callback) => {
 return axios.get("/user");
};

// axios.get('/user/').then(response => {
//     console.log('Get user response: ')
//     console.log(response.data)
//     if (response.data.user) {
//       console.log('Get User: There is a user saved in the server session: ')

//       this.setState({
//         loggedIn: true,
//         username: response.data.user.username
//       })
//     } else {
//       console.log('Get user: no user');
//       this.setState({
//         loggedIn: false,
//         username: null
//       })
//     }
//   })

  export default getUser;
