const socketIo = require("socket.io");
const sendPushNotification = require("./pushNotifications");

function webSocket(server) {
    const io = socketIo(server);

    let expoPushToken = null;
    let receiveRequestsEnabled = false;

    io.on("connection", (socket) => {
        console.log("A new client connected", socket.id);

        // receive request from customer
        socket.on("rescue-request", (data) => {
            console.log(data);
            if (receiveRequestsEnabled && data.location != null) {
                !!expoPushToken &&
                    sendPushNotification(
                        expoPushToken,
                        "Yêu cầu cứu hộ mới !",
                        data.message
                    );
                io.emit("new-rescue-request", data);
            }
        });

        // receive request canceling from customer
        socket.on("cancel-rescue-request", (data) => {
            io.emit("send-cancel-request", "Khách hàng đã hủy yêu cầu!");
        });

        // receive expo pushs token from partner
        socket.on("send-expo-push-token", (data) => {
            console.log(data);
            receiveRequestsEnabled = true;
            expoPushToken = data.token;
        });

        // receive close connection from partner
        socket.on("close-connect", () => {
            console.log("Trạng thái đóng");
            receiveRequestsEnabled = false;
        });

        // handle partner accepted
        socket.on("accept-request", (data) => {
            if (data.acceptedState) {
                io.emit("accepted-request", data);
            }
        });

        // handle partner came
        socket.on("come-notification", (data) => {
            if (data.isCome) {
                io.emit("come-notification-partner", data);
            }
        });

        // handle partner cost notice
        socket.on("cost-notice", (data) => {
            if (data) {
                io.emit("cost-notice-partner", data);
            }
        });

        socket.on("cancel_help", (data) => {
            if (data) {
                console.log(">>>Check data cancel help: ", data);
                io.emit("customer_cancel_help", data);
            }
        });

        socket.on("disconnect", () => {
            console.log("A client disconnected");
        });
    });
}

module.exports = webSocket;
