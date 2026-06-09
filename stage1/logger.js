const axios = require("../.gitignore/node_modules/axios/index.d.cts");

async function Log(
  token,
  stack,
  level,
  packageName,
  message
) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log(response.data);
  } catch (err) {
    console.error(
      err.response?.data || err.message
    );
  }
}

module.exports = Log;