const jwt = require("jsonwebtoken");

var jwtSecret = "viamariotoken";

module.exports = function (request, response, next) {
	//Get token from header
	const token = request.header("x-auth-token");

	//Check if there is no token in the header
	if (!token) {
		return response.status(401).json({ msg: "No token, authorization denied" });
	}

	//Verify token
	try {
		const decoded = jwt.verify(token, jwtSecret);
		request.user = decoded.user;
		next();
	} catch (err) {
		response.status(401).json({ msg: "Token is not valid" });
	}
};