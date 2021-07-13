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
        const createTuristicActivity = await this.model.create({
            name,
            difficulty,
            term,
            season
            }
        );
        const modelCountry= await Country.findAll({
            //include: {model: this.model},
            where: { name: { [Op.iLike]: `%${country}%` } 
        } 
    });
    await createTuristicActivity.setCountries(modelCountry);
    res.send(createTuristicActivity)
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