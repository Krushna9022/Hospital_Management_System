exports.isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    return next();
  }
  return res.redirect('/login');
};

exports.authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.session.role === role) {
      return next();
    }
    return res.status(403).send('Access Denied');
  };
};
