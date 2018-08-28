module.exports = app =>{
    app.listen(app.get("port"), ()=> {
        console.log(`nTask API Running on port ${app.get("port")}`);
    });
}