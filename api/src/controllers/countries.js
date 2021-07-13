const {Country, Turistic_activity} = require('../db')
const ModelCrud = require('./index')
const axios = require('axios')
const {allCountries} = require ('../utils/constants')
const Sequelize = require ('sequelize')

class CountryModel extends ModelCrud {
   constructor(model){
      super(model)
    }

   getAll = async (req, res, next) => { 
      let countriesAPI = await axios.get(allCountries)
      try{
      if (req.query.name) {
            return await this.model.findAll({
                include: [{ 
                    model: Turistic_activity,
                 }],
               where: { name: { [Sequelize.Op.iLike]: `%${req.query.name}%` }}
            })
            .then(country => country.length? res.send(country): res.status(404).send('Country does not exist'))
            .catch(error=>{error}); 
      }    
      await Promise.all(countriesAPI.data.map((element) => {
              let newdata = {
                  name: element.name,
                  alpha3Code: element.alpha3Code,
                  flag: element.flag ? element.flag : 'Image not found',
                  capital: element.capital ? element.capital : 'Not known capital city',
                  region: element.region,
                  subregion: element.subregion,
                  area:  element.area ? element.area : 0,
                  population: element.population
              }
              this.model.findOrCreate({ where: newdata })
              .catch(error => (error))
      }))

      let tenCountries = await this.model.findAll({
	         limit:10,
      })
          res.send(tenCountries)
      }
      catch (e) {
          res.status(500).send(e)
      }
   };

   showAll = async (req, res, next) => {
    return await this.model.findAll({
        include: [{ 
          model: Turistic_activity,
       }],
       limit: 250
    })
        .then(results => results.length? res.send(results): res.status(404).send('Error'))
        .catch(error => next(error))
    };

   getById = async (req, res, next) => {
   const id = req.params.id;
   return await this.model.findAll({
       include: [{ 
         model: Turistic_activity,
      }],
      where: {alpha3Code:{ [Sequelize.Op.iLike]: `${id}` }}
   })
       .then(results => results.length? res.send(results): res.status(404).send('No matching ID'))
       .catch(error => next(error))
   };

   add = async (req, res, next) => {
   const {id, name, alpha3Code, flag, capital, region, subregion, area, population } = req.body;
   await this.model.create({
           id,
           name,
           alpha3Code,
           flag,
           capital,
           region,
           subregion,
           area,
           population
       })
       .then((createdElement) => res.send(createdElement))
       .catch(error => next(error)); 
   };
}

const countryController = new CountryModel(Country)

module.exports = {
   countryController,
}