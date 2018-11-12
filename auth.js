import passport from "passport";
import {Strategy, ExtractJwt} from "passport-jwt";

module.exports = app => {
    const Users = app.db.models.Users; //objeto de usuario
    const cfg = app.libs.config; //Objeto de configuraçao 
    const params = {
        secretOrKey: cfg.jwtSecret,
        // jwtFromRequest: ExtractJwt.fromAuthHeader() 
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    };
    const strategy = new Strategy(params, (payload, done) => {
        console.log(payload.id);
        console.log(payload.user)
        Users.findById(payload.user)
            .then(user => {
                if(user){
                    return done(null, {
                        id: user.id,
                        email: user.email
                    });
                }
                return done(null, false);
            })
            .catch(error => done(error, null));
    });
    passport.use(strategy);
    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};