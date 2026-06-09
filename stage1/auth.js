require("dotenv").config();

const axios = require("../node_modules/axios/index.d.cts");

async function getToken() {
  const response = await axios.post(
    "http://4.224.186.213/evaluation-service/auth",
    {
      email: process.env.EMAIL,
      name: "Ritesh Singh",
      rollNo: "2300320130197",
      accessCode: process.env.ACCESS_CODE,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    }
  );
  return response.data.access_token;
}

module.exports = getToken;