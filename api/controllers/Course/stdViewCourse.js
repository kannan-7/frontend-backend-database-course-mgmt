function stdViewCourse(req, res) {
  const data = {
    message: "User viewed course successfully",
  };
  return res.status(200).json(data);
}

export default stdViewCourse;
