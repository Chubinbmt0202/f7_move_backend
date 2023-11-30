import db from "../models/index";

const getAllBrandCar = async () => {
    try {
        let data = await db.Brand.findAll({
            attributes: ["id", "Name"],
        });
        if (data) {
            return {
                EM: "Ok",
                EC: 0,
                DT: data,
            };
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "Something wrong in service...",
            EC: -2,
        };
    }
};
const getAllTypeCar = async () => {
    try {
        let data = await db.Type.findAll({
            attributes: ["id", "Name"],
        });
        if (data) {
            return {
                EM: "Ok",
                EC: 0,
                DT: data,
            };
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "Something wrong in service...",
            EC: -2,
        };
    }
};
const getAllColorCar = async () => {
    try {
        let data = await db.Color.findAll({
            attributes: ["id", "Name"],
        });
        if (data) {
            return {
                EM: "Ok",
                EC: 0,
                DT: data,
            };
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "Something wrong in service...",
            EC: -2,
        };
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
    getAllBrandCar,
    getAllTypeCar,
    getAllColorCar,
    handlePostHelp,
};
