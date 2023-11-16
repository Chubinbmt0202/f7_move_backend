import db from "../models/index";

const handleShow = async () => {
    try {
        let user = await db.BranchCar.findAll();
        console.log(user);
        return user;
    } catch (e) {
        console.log(e);
    }
};
const handleShowType = async () => {
    try {
        let type = await db.Type.findAll();
        console.log(type);
        return type;
    } catch (e) {
        console.log(e);
    }
};
const handleShowColor = async () => {
    try {
        let color = await db.ColorCar.findAll();
        console.log(color);
        return color;
    } catch (e) {
        console.log(e);
    }
};

const handlePostHelp = async (data) => {
    console.log("Thêm dữ liệu: ", data);
    try {
        await db.Require.create({
            fullName: data.fullName,
            phoneNumber: data.phoneNumber,
            Address: data.address,
            statusDescription: data.statusDescription,
            licensePlate: data.licensePlate,
            carBrand: data.carBrand,
            carColor: data.carColor,
            carType: data.carType,
        });
        return { message: "Data added successfully" };
    } catch (error) {
        console.error("Error creating Require:", error);
        if (error.name === "SequelizeUniqueConstraintError") {
            return { error: "Duplicate entry. This data already exists." };
        }
        throw error;
    }
};

module.exports = {
    handleShow,
    handleShowType,
    handleShowColor,
    handlePostHelp,
};
