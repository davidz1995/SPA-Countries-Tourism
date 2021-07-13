class ModelCrud {
    constructor(model) {
        this.model = model;
    }

    getById = async (req, res, next) => {
       const id = req.params.id
       return this.model.findAll({
           where:{
               id
           }
       })
    };

    delete = (req, res, next) => {
        const id = req.params.id;
            return this.model.destroy({
                where: {
                    id,
                },
            })
            .then((id) => {
                res.status(200).send('Eliminado correctamente');
            })
            .catch((error) => next(error))
    }
}

module.exports = ModelCrud