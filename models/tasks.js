module.exports = app =>{
    return {
        findAll: (params, callback)=>{
            return callback([
                {title: "Procurar Artigos"},
                {title: "Terminar TCC"}
            ])
        }   
    };
};