// 🔌 Socket connection
var socket = io.connect('http://localhost:5000');

// 📡 Receive gesture data from backend
socket.on('gesture', function (data) {
    console.log("Gesture received:", data);

    // 👇 Yahan galaxy update logic likho
    // Example:
    // chaosValue = data.chaos;
    // scaleValue = data.scale;
});

// 🚀 Page load hone par sab start ho
window.onload = () => {
    initGalaxy();
    animateGalaxy();
    cameraUtils.start();
};
