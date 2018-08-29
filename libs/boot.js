module.exports = app =>{
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), ()=> {
            console.log(`nTask API Running on port ${app.get("port")}`);
        });
    });
}