const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/constants');

const AuthenticationError = require('../errors/AuthenticationError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const bearer = 'Bearer ';
  const errorMessage = 'Неправильные почта или пароль';

  if (!authorization || !authorization.startsWith(bearer)) {
    return next(new AuthenticationError(`${errorMessage}(${authorization})!`));
  }

  const token = authorization.replace(bearer, '');

  let payload;

  try {
    payload = jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return next(new AuthenticationError(`${errorMessage}!`));
  }

  req.user = payload;

  return next();
};
