module.exports = app => {
    const Cart = app.db.models.Cart;
    app.route("/cart")
    .all(app.auth.authenticate())
    // .get((req, res) => {
    //     Cart.findAll({where: {user_id: req.user_id}})
    //         .then(result => res.json(result))
    //         .catch(error => {
    //             res.status(412).json({msg: error.message});
    //         })
    // })
    .post((req, res) => {
        // req.body.user_id = req.user_id;
        Cart.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message})
            });
    })
    app.route("/cart/:id")
        .all(app.auth.authenticate())
        .get((req, res) => {
            Cart.findAll({where: {user_id: req.params.id}})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                })
        })
        .delete((req, res) => {
            // deleta produto do carrinho do usuario
            Cart.destroy({where: {id: req.params.id}})
                .then(result => {
                    // res.sendStatus(204);
                    res.json(result);
                })
                .catch(error => {
                    res.status(412).json({msg: error.message});
                })
        });
    app.route("/carrinho/:id")
    .all(app.auth.authenticate())
    .get((req, res) => {
        Cart.findAll({where: {user_id: req.params.id}})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            })
    });
    app.route("/carrinho")
    .all(app.auth.authenticate());

}