const axios = require("../node_modules/axios/index.d.cts");
async function register() {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/register",
      {
        email: "ritesh.23b0131057@abes.ac.in",
        name: "Ritesh Singh",
        mobileNo: "8318728113",
        githubUsername: "Ritesh-fbd",
        rollNo: "2300320130197",
        accessCode: "cXuqht"
      }
    );

    console.log(response.data);

  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

register();