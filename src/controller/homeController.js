import db from '../models/index';
import homeService from '../service/homeService';

const ShowDataDrop = async (req, res) => {
    try {
        let data = await homeService.handleShow(req.body);
        return res.status(200).json(data);
    } catch (e) {
        console.log(e);
    }
};

const ShowDataDropType = async (req, res) => {
    try {
        let data = await homeService.handleShowType(req.body);
        return res.status(200).json(data);
    } catch (e) {
        console.log(e);
    }
};

const ShowDataDropColor = async (req, res) => {
    try {
        let data = await homeService.handleShowColor(req.body);
        return res.status(200).json(data);
    } catch (e) {
        console.log(e);
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
    ShowDataDrop,
    ShowDataDropType,
    ShowDataDropColor,
    sendHelp,
};
