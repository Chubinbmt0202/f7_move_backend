import db from "../models/index";
const otpGenerator = require("otp-generator");
import twilio from "twilio";

const generateNumericOTP = (length) => {
    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < length; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
};
const sendOTP = async (phone, otp) => {
    const accountSid = "ACd1e0a8aea3299d117f551ecd3c140874";
    const authToken = "e54dfcdfad8946d101c496f2bbd47230";
    const client = twilio(accountSid, authToken);

    try {
        const message = await client.messages.create({
            body: `Your OTP is: ${otp}`,
            from: "+19167643467",
            to: `+${phone}`,
        });
        console.log(message.sid);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};
const handleLoginService = async (data) => {
    try {
        let user = await db.Customer.findOne({
            where: { phone: data.phone },
        });
        console.log("123")
        if (user) {
            const otp = generateNumericOTP(6);
            const otpSent = await sendOTP(data.phone, otp);
            console.log("otp", otp)
            if (otpSent) {
                return {
                    EM: "OK",
                    EC: 0,
                    DT: "",
                };
            } else {
                return {
                    EM: "Error sending OTP",
                    EC: -3,
                    DT: "",
                };
            }
        }
        return {
            EM: "phone is incorrect!",
            EC: 1,
            DT: "",
        };
    } catch (e) {
        console.log(e);
        return {
            EM: "Something wrong in service...",
            EC: -2,
        };
    }
};

module.exports = {
    handleLoginService,
};
