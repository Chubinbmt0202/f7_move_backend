import db from "../models/index";

const handleLoginService = async (data) => {
    try {
        let user = await db.Customer.findOne({
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
        }
        return {
            EM: "Your UserName or password is incorrect!",
            EC: 1,
            DT: "",
        };
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
    let user = await db.Customer.findOne({
        where: { userName: userName },
    });
    if (user) {
        return true;
    }
    return false;
};

const handleRegisterService = async (data) => {
    try {
        let isUserNameExist = await checkUserName(data.userName);
        if (isUserNameExist === true) {
            return {
                EM: "The UserName is already exist",
                EC: 1,
            };
        }

        await db.Customer.create({
            email: data.email,
            fullName: data.fullName,
            password: data.password,
            userName: data.userName,
            phone: data.phone,
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
module.exports = {
    handleLoginService,
    handleRegisterService,
};
