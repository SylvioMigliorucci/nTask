
module.exports = (sequelize, DataType) =>{
    const Produto = sequelize.define("Produto", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type:DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        preco: {
            type: DataType.DOUBLE, 
            allowNull: false,
            defaultValue: false
        }
    }
    ,{
        classMethods: {
            associate: (models) => {
                Tasks.hasMany(models.Cart);
            }
        }
    }
);
    return Produto;
};