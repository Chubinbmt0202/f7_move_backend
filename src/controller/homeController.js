import db from "../models/index";

const showLogin = async (req, res) => {
    return res.render('login/login')
};

module.exports = {
    showLogin,
};
