import db from "../models/index";

const handleLoginPartnerService = async (data) => {
    try {
        let user = await db.Partner.findOne({
            where: { userName: data.userName, password: data.password },
        });
        if (user) {
            if (user && user.password === data.password) {
                return {
                    EM: "Ok",
                    EC: 0,
                    DT: "",
                };
            }
        } else {
            return {
                EM: "Your UserName or password is incorrect!",
                EC: 1,
                DT: "",
            };
        }
    } catch (e) {
        console.log(e);
        return {
            EM: "Something wrong in service...",
            EC: -2,
            DT: "",
        };
    }
};

const checkUserName = async (userName) => {
    let user = await db.Partner.findOne({
        where: { userName: userName },
    });
    if (user) {
        return true;
    } else {
        return false;
    }
};

const handleRegisterPartnerService = async (data) => {
    try {
        let isUserNameExist = await checkUserName(data.loginAccount);
        if (isUserNameExist === true) {
            return {
                EM: "The UserName is already exist",
                EC: 1,
            };
        }

        await db.Partner.create({
            userName: data.loginAccount,
            password: data.password,
            fullname: data.fullName,
            phone: data.phoneNumber,
            address: data.address,
        });
        return {
            EM: "A user is created successfully",
            EC: 0,
        };
    } catch (error) {
        console.log(e);
        return {
            EM: "Something wrong in service...",
            EC: -2,
        };
    }
};

module.exports = { handleLoginPartnerService, handleRegisterPartnerService };
