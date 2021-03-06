module.exports = app =>{
    const Users = app.db.models.Users;
    app.route("/user")
    //    .all(app.auth.authenticate())
       .get((req, res) => {
            Users.findById(req.user.id, {
                attributes: ["id", "name", "email"]
            })
            // Users.findById(1)
            // Users.findAll()
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message})
            });
        })
        .delete( (req, res) => {
            Users.destroy({where: {id: req.params.id,}})
                .then(result => res.json(204))
                .catch(error => {
                    res.status(412).json({msg: error.message})
                });
         })
    app.post("/users", (req, res) => {
        Users.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message})
            });
    });
    app.route("/user/:id")
    // .all(app.auth.authenticate())
    .get((req, res) => {
        //consulta produto unico
        Users.findOne({where: {id: req.params.id}})
            .then(result => {
                if(result){
                    res.json(result);
                }else{
                    res.sendStatus(404);
                }
            })
    })
}