const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the user to the login page
    console.log(req.session)
    if (!req.session.loggedIn) {
      res.redirect('/login');
  } else {
      next();
  }
};

module.exports = withAuth;