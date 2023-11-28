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

const getAllServices = async () => {
  try {
    let data = await db.Service.findAll({
      attributes: ["id", "nameService"],
      include: [
        {
          model: db.detailService,
          attributes: ["id", "nameServiceDetail", "price"],
        },
      ],
      raw: true,
      nest: true,
    });

    if (data) {
      // Tạo một đối tượng Map để nhóm dữ liệu theo id
      let groupedData = new Map();

      // Duyệt qua dữ liệu và nhóm theo id
      data.forEach((service) => {
        const {
          id,
          nameService,
          "detailServices.id": detailId,
          ...details
        } = service;

        if (!groupedData.has(id)) {
          groupedData.set(id, {
            id,
            nameService,
            // details: [{ detailId, ...details }],
            details: [details.detailServices],
          });
        } else {
          groupedData.get(id).details.push(details.detailServices);
        }
      });

      const result = Array.from(groupedData.values());

      return {
        EM: "Ok",
        EC: 0,
        DT: result,
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

module.exports = {
  handleLoginPartnerService,
  handleRegisterPartnerService,
  getAllServices,
};
