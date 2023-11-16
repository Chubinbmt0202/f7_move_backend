import partnerServices from "../service/partnerServices";

const handleLoginPartner = async (req, res) => {
  if (!req.body.userName || !req.body.password) {
    return res.status(500).json({
      EM: "Missing parameter", // error message
      EC: "-1", // error code
      DT: "", // data
    });
  }
  try {
    let data = await partnerServices.handleLoginPartnerService(req.body);
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

const handleRegisterPartner = async (req, res) => {
  const loginAccount = req.body.loginAccount;
  const fullName = req.body.fullName;
  const phoneNumber = req.body.phoneNumber;
  const address = req.body.address;
  const password = req.body.password;

  if (!loginAccount || !fullName || !phoneNumber || !address || !password) {
    return res.status(500).json({
      EM: "Missing parameter", // error message
      EC: "-1", // error code
      DT: "", // data
    });
  }

  try {
    let data = await partnerServices.handleRegisterPartnerService(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: "",
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

module.exports = { handleLoginPartner, handleRegisterPartner };
