
module.exports = (sequelize, DataType) =>{
    const Tasks = sequelize.define("Tasks", {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type:sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: sequelize.BOOLEAN, 
            allowNull: false,
            defaultValue: false
        }
    },{
        classMethods: {
            associate: (models) => {
                Tasks.belongsTo(models.Users);
            }
        }
    });
    return Tasks;
};