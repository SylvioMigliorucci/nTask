module.exports = app => {
       app.get("/", (req, res) => {
                res.json({status: "Loja API está online"});
       });
    //    app.get('/', (req, res) => res.render('pages/index'))
};