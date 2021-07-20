const { expect } = require("chai")
const session = require("supertest-session")
const app = require("../../src/app")
const { Country, Activity, conn } = require("../../src/db")

const agent = session(app)

xdescribe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Can't reach DB", err)
    })
  )

describe('/countries', function() {
  it('GET responde con un status 200', function(){
    return agent
      .get('/countries')
      .expect(function(res){
        expect(res.status).equal(200)})
  }).timeout(10000)
  it('GET responde con los primeros 10 paises que se renderizan en home',  function() {
    return agent 
      .get('/countries') 
      .expect(200)
      .expect('Content-Type', /json/) 
      .expect(function(res) {
        expect(res.body.length).equal(10); 
      });
  }).timeout(10000)
  it('Los elementos que recibe GET son de tipo objeto',  function() {
    return agent 
      .get('/countries') 
      .expect('Content-Type', /json/) 
      .expect(function(res) {
        expect(typeof res.body[0]).equal('object'); 
      });
  }).timeout(10000)
})

describe('/countries?name=', function() {
  it('GET responde con status 200 si encuentra un pais',  async function() {
    return await agent 
      .get('/countries?name=ARG') 
      .expect(function(res){
        expect(res.status).equal(200)}); 
      });
  it('GET recibe los datos del pais por Name',  async function() {
    return await agent 
      .get('/countries?name=ARG') 
      .expect(function(res) {
        expect(res.body[0].name).equal('Argentina'); 
      });
  }).timeout(10000)
  it('GET recibe los datos del pais por Name',  function() {
    return agent 
      .get('/countries?name=ECU') 
      .expect(function(res) {
        expect(res.body[0].name).equal('Ecuador'); 
      });
  }).timeout(10000)
  it('GET envia un status 404 y mensaje de Country does not exist, si no encuentra un pais',  function() {
    return agent 
      .get('/countries?name=BuenosAires')
      .expect(404) 
      .expect(function(res) {
        expect(res.text).equal('Country does not exist');
      });
  }).timeout(10000)
})

describe('/countries:name', function() {
  it('GET responde con status 200 si encuentra un pais',  async function() {
    return await agent 
      .get('/countries/ECU') 
      .expect(function(res){
        expect(res.status).equal(200)}); 
      }).timeout(10000);
  it('GET envia status 404 y mensaje de No matching ID si no encuentra un pais por ID',  function() {
    return agent 
      .get('/countries/OOO')
      .expect(404) 
      .expect(function(res) {
        expect(res.text).equal('No matching ID');
      });
  }).timeout(10000)
  it('GET recibe los datos del pais por ID',  function() {
    return agent 
      .get('/countries/BOL')
      .expect(function(res) {
        expect(res.body[0].name).equal('Bolivia (Plurinational State of)'); 
      });
  }).timeout(10000)
  it('GET recibe los datos del pais por alpha3Code',  function() {
    return agent 
      .get('/countries/COL') 
      .expect(function(res) {
        expect(res.body[0].name).equal('Colombia');
      });
  }).timeout(10000)
})

})
