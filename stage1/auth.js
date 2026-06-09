const axios = require("../.gitignore/node_modules/axios/index.d.cts");

async function getToken() {

  const response = await axios.post(
    "http://4.224.186.213/evaluation-service/auth",
    {
      email: "ritesh.23b0131057@abes.ac.in",
      name: "Ritesh Singh",
      rollNo: "2300320130197",
      accessCode: "cXuqht",
      clientID: "fc1c34f5-d98a-4b8f-9ef1-69fbcc3575b4",
      clientSecret: "shBBXMrfSSwDpwue"
    }
  );

  return response.data.access_token;
}

module.exports = getToken;