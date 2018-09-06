module.exports = app =>{
    const Tasks = app.db.models.Tasks;
    app.route("/tasks")
    // .all((req, res, next) => {
    //     // middleware de pré-execução
    //     delete req.body.id;
    //     next();
    // })  
    .get((req, res) => {
        //retorna todas as tarefas
        Tasks.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            })
    })
    .post((req, res) => {
        // cadastra uma nova tarefa
        Tasks.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });
    app.route("/tasks/:id")
    // .all((req, res, next) => {
    //     //middleware de pré-execução
    //     delete req.body.id;
    //     next();
    // })
    .get((req, res) => {
        // consulta tarefa
        Tasks.findOne({where: req.params})
            .then(result => {
                if(result){
                    res.json(result);
                }else{
                    res.sendStatus(404);
                }
            })
            .catch(error => {
                res.status(412).json({msg: error.message});
            })
    })
    .put((req, res) => {
        //atualiza tarefa
        Tasks.update(req.body, {where: req.params})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message})
            });
    })
    .delete((req, res) => {
        //deleta tarefa
        Tasks.destroy({where: req.params})
            .then(result => {
                res.sendStatus(204);
            })
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    })
};