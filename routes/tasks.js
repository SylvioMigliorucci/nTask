module.exports = app =>{
    const Tasks = app.db.models.Tasks;
    app.route("/tasks")
    .all(app.auth.authenticate())  
    .get((req, res) => {
        //retorna todas as tarefas
        Tasks.findAll({where: {user_id: req.user_id}})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            })
    })
    .post((req, res) => {
        // cadastra uma nova tarefa
        req.body.user_id = req.user_id;
        Tasks.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });
    app.route("/tasks/:id")
    .all(app.auth.authenticate())  
    .get((req, res) => {
        // consulta tarefa
        Tasks.findOne({where: {id: req.params.id, user_id: req.user_id}})
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
        Tasks.update(req.body, {where: {id: req.params.id, user_id: req.user_id}})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message})
            });
    })
    .delete((req, res) => {
        //deleta tarefa
        Tasks.destroy({where: {id: req.params.id, user_id: req.user_id}})
            .then(result => {
                res.sendStatus(204);
            })
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    })
};