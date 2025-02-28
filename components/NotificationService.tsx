// import PushNotification from "react-native-push-notification";

// PushNotification.configure({
//   onNotification: function (notification) {
//     console.log("LOCAL NOTIFICATION:", notification);
//   },
//   requestPermissions: true,
// });


// PushNotification.createChannel(
//   {
//     channelId: "default-channel",
//     channelName: "Default Channel",
//     importance: 4,
//     vibrate: true,
//   },
//   (created) => console.log(`Channel created: ${created}`)
// );

// // Function to show a local notification after a delay
// export const showNotificationWithDelay = (title, message, delayInSeconds) => {
//   PushNotification.localNotificationSchedule({
//     channelId: "default-channel", // Required for Android
//     title: title,
//     message: message,
//     date: new Date(Date.now() + delayInSeconds * 1000), // Schedule time (current time + delay)
//     allowWhileIdle: true, // Show notification even if the device is idle
//   });
// };

