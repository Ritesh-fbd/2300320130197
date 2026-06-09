const weights = {
  placement: 3,
  result: 2,
  event: 1
};

function getScore(notification) {
  const weight = weights[notification.type] || 0;
  const timestamp = new Date(notification.time).getTime();

  return weight * 1000000000 + timestamp;
}

function getTopNotifications(notifications, n = 10) {
  return notifications
    .sort((a, b) => getScore(b) - getScore(a))
    .slice(0, n);
}

module.exports = getTopNotifications;