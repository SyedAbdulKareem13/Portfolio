const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./user");

module.exports = function (passport) {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "putmykeyherewhichidontunderstand";

  // (opts.secretOrKey = process.env.JWT_SECRET),
    // al;skdfhpiasdufgasdoghaspo;ig
    // al;skdfhpiasdufgasdoghaspo;ig
    // al;skdfhpiasdufgasdoghaspo;ig

    passport.use(
      new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
          .then((user) => {
            if (user) {
              return done(null, user);
            }
            return done(null, false);
          })
          .catch((err) => console.error(err));
      })
    );
};
