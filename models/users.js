module.exports = (sequelize, DataType) => {
    const Users = sequelize.define("Users", {
        id: {
            type: sequelize.INTEGER,
            primarykey: true,
            autoIncrement: true
        },
        name: {
            type: sequelize.STRING,
            allowNull:false,
            validate: {
                notEmpty:true
            }
        },
        password: {
            type: sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },
        email: {
            type: sequelize.STRING,
            unique:true,
            allowNull:false,
            validate: {
                notEmpty: true
            }
        }
    },{
        classMethods: {
            associate: (models) => {
                Users.hasMany(models.Tasks);
            }
        }
    });
    return Users;
}