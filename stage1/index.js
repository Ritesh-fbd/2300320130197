const getNotifications = require("./notification");
const getTopNotifications = require("./priority");
const getToken = require("./auth");
const Log = require("./logger");

async function run() {
  console.log("Getting token...");
  const token = await getToken();
  console.log("Token received");

  await Log(
    token,
    "backend",
    "info",
    "service",
    "Application started"
  );

  const notifications =
    await getNotifications();

  const topNotifications =
    getTopNotifications(notifications);

  console.log(topNotifications);
}

run();