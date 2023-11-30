import db from '../models/index';
import homeService from '../service/homeService';

const getAllBrandCar = async (req, res) => {
    try {
        let data = await homeService.getAllBrandCar();
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', // error code
            DT: '', // data
        });
    }
};

const getAllTypeCar = async (req, res) => {
    try {
        let data = await homeService.getAllTypeCar();
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', // error code
            DT: '', // data
        });
    }
};

const getAllColorCar = async (req, res) => {
    try {
        let data = await homeService.getAllColorCar();
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', // error code
            DT: '', // data
        });
    }
};

const sendHelp = async (req, res) => {
    console.log('Request Body:', req.body); // Log the request body
    try {
        let data = await homeService.handlePostHelp(req.body);
        return res.status(201).json(data);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllBrandCar,
    getAllTypeCar,
    getAllColorCar,
    sendHelp,
};
