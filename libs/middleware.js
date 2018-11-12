import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
// import compression from "compression";
// import morgan from "morgan";
// import logger from "./logger.js";
// import helmet from "helmet";


module.exports = app =>{
    app.set("port", 3000);
    app.set("json spaces", 4);
    app.set("view engine", "ejs");
    // app.use(morgan("common", {
    //     stream: {
    //         write: (message) => {
    //             logger.info(message);
    //         }
    //     }
    // }));
    // app.use(cors({
    //     // origin: "*",
    //     headers: {
	//   'Access-Control-Allow-Origin': '*',
	    // },
	// 
        // methods: ["GET", "POST", "PUT", "DELETE"]
    // }));
    // app.use(helmet());
    // app.use(cors({
    //     // origin: ["http://localhost/loja/"],
    //     // origin: ["http://localhost:3001"],
    //     origin: ["*"],
    //     methods: ["GET", "POST", "PUT", "DELETE"],
    //     allowedHeaders: ["Content-Type", "Authorization"]
    // }));
    app.use(cors());
    // app.use(compression());
    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    app.use((req, res, next) => {
        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        delete req.body.id;
        next();
    });
    app.use(express.static("public")); 
}