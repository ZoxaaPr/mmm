const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + 5* 24 * 60 * 60 * 10000
    ),
    httpOnly: true,
   // sameSite: 'none', 
    //secure: true 
  };

  // res.header('Access-Control-Allow-Origin', "http://localhost:3000");
  // res.header('Access-Control-Allow-Headers', "Authorization");
  // res.header('Access-Control-Allow-Methods', "DELETE,PUT,POST,GET");
  // res.header('Access-Control-Allow-Credentials', true);
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
