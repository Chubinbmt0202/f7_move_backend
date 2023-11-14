import customerService from "../service/customerService";

const handleLogin = async (req, res) => {
    try {
        let data = await customerService.handleLoginService(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: "error from server", // error message
            EC: "-1", // error code
            DT: "", // data
        });
    }
};

const getCRUD = (req, res) => {
    return res.render('test')
}

module.exports = {
    handleLogin,
    getCRUD,
};
