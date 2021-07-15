const { Country, Turistic_Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Model Testing', function() {
 
  describe('Country model', function () {
    beforeEach(async function() {
      await Country.sync({ force: true });
    });
    xdescribe('Validations', function () {
      it('No deberia crearse sin los datos completos', function(done) {
         Country.create({
          name: 'Argentina',
         })
          .then(() => done('No debería haberse creado'))
          .catch(() => done());
      });
      it('No deberia crearse sin los datos completos', function(done) {
        Country.create({
          alpha3Code: 'ARG',
        })
        .then(() => done('No deberia haberse creado'))
        .catch(() => done());
      });
      it('Alpha3Code solo acepta tres caracteres', function(done) {
        Country.create({
          name: 'Argentina',
          alpha3Code: 'ARGE',
          flag: 'flag',
          region: 'americas',
          capital: 'Buenos aires',
          subregion: 'america latina',
          area: 68686868,
          population: 2272734,
        })
          .then(() => done('No debería haberse creado'))
          .catch(() => done());
      });
      it('Model Country deberia ser una funcion', function(){
        expect(typeof Country).equal('function')
      })
    });
  })
})