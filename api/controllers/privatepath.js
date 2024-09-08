function privatePath(req, res) {
  const userData = req.user;
  const data = {
    message: "private path",
    data: userData,
  };
  return res.status(200).json(data);
}

const privacyController = {
  privatePath,
};

export default privacyController;
