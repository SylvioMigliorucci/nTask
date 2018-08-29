module.exports = app =>{
    const Tasks = app.db.models.tasks;
    app.get("/tasks", (req, res) => {
        Tasks.findAll({}).then(tasks => {
           res.json({Tarefas: tasks}); 
        });
    });
};