function getHealth(req, res) {
  const data = {
    status: "OK",
    message: "Get health Check Passed",
  };
  return res.status(200).json(data);
}

function postHealth(req, res) {
  const body = req.body;
  const data = {
    status: "OK",
    message: "Post health Check passed",
    body: body,
  };
  return res.status(200).json(data);
}

const healthController = {
  getHealth,
  postHealth,
};

export default healthController;
