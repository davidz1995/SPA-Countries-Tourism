const {Turistic_activity, Country} = require('../db')
const ModelCrud = require('./index')
const { Op } = require('sequelize');
//const axios = require('axios')

class ActivityModel extends ModelCrud {
   constructor(model){
      super(model)
    }

    getAll = async (req, res, next) => { 
        let activities = await this.model.findAll({
            include: [{model: Country}]
        })
            res.send(activities)
        }

    add = async (req, res, next) => {
        const { name, difficulty, term, season, country } = req.body
    const createActivity = await this.model.create({
        name,
        difficulty,
        term,
        season,
    });
    const modelCountry= await Country.findAll({
        where: {
            name: {
                [Op.in]: Array.isArray(country) ? country : [country]
            }
        } 
    });
    await createActivity.setCountries(modelCountry);
    res.send(createActivity)
    }

     getByName = async (req, res, next) => {
        const name = req.params.name;
        return await this.model.findAll({
            include: [{ 
              model: Country,
           }],
           where: {name} 
        })
            .then(results => results.length? res.send(results): res.status(404).send('No matching Name'))
            .catch(error => next(error))
        };
}

const turisticActivityController = new ActivityModel(Turistic_activity)

module.exports = {
    turisticActivityController,
}