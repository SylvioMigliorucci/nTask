import https from "https";
import fs from "fs";

// module.exports = app =>{
//     app.db.sequelize.sync().done(() => {
//         app.listen(app.get("port"), ()=> {
//             console.log(`nTask API Running on port ${app.get("port")}`);
//         });
//     });
// }

module.exports = app => {
    if(process.env.NODE_ENV !== "test"){
        const credentials = {
            key: fs.readFileSync("ntask.key", "utf8"),
            cert: fs.readFileSync("ntask.cert", "utf8")
        }
        app.db.sequelize.sync().done(() => {
            https.createServer(credentials, app)
                .listen(app.get("port"), () => {
                    console.log(`NTask API - porta ${app.get("port")}`);
                });
        });
    }
};