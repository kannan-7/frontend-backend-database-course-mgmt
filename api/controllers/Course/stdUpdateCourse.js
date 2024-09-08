function stdUpdateCourse(req, res) {
  const data = {
    message: "User updated course successfully",
  };
  return res.status(200).json(data);
}

export default stdUpdateCourse;
