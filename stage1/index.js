const getTopNotifications =
require("./priority");

const notifications = [
  {
    type: "event",
    time: "2026-06-01T11:00:00"
  },
  {
    type: "placement",
    time: "2026-06-01T09:00:00"
  },
  {
    type: "result",
    time: "2026-06-01T10:00:00"
  }
];

const top =
getTopNotifications(notifications);

console.log(top);