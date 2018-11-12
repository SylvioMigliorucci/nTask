module.exports = app => {
    const Produto = app.db.models.Produto;
    app.route("/produtos")
    // .all(app.auth.authenticate())
    .get((req, res) => {
        //retorna todas os produtos
        Produto.findAll()
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            })
    })
    .post((req, res) => {
        Produto.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg:error});
            })
    });
    app.route("/produto/:id")
    .all(app.auth.authenticate())
    .get((req, res) => {
        //consulta produto unico
        Produto.findOne({where: {id: req.params.id}})
            .then(result => {
                if(result){
                    res.json(result);
                }else{
                    res.sendStatus(404);
                }
            })
    })
    .put((req, res) => {
        //atualiza tarefa
        Produto.update(req.body, {where: {id: req.params.id}})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message})
            });
    })
    .delete((req, res) => {
        //deleta tarefa
        Produto.destroy({where: {id: req.params.id}})
            .then(result => {
                res.json(result);
            })
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });
    app.route("/catalogo")
    // .all(app.auth.authenticate())
    .get((req, res) => {
        //retorna todas os produtos
        Produto.findAll()
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            })
    })
};