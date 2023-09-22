const jwt = require('jsonwebtoken');

// Secret key for JWT
const JWT_SECRET = 'your-secret-key-here';

// Middleware function to check if the user is authenticated
function authenticate(req, res, next) {
  // Get the token from the request header
  const token = req.header('x-auth-token');

  // Check if there's no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Add the user to the request object
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}

module.exports = authenticate;
