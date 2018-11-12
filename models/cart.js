module.exports = (sequelize, DataType) => {
    const Cart = sequelize.define("Cart", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        produto_id: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },{
        classMethods: {
            associate: (models) => {
                Cart.belongsTo(models.User, models.Produto);
            }
        }
    });
    return Cart;
}