const request = require('supertest')('http://localhost:4000')
const expect = require('chai').expect
const noticias = require('./noticias.js')


describe('Tests API de noticias', () => {
  describe('GET', () => {
    it('Deberia traer noticias con status 200', async () => {
      let response = await request.get('/noticias')
      expect(response.status).to.equal(200)
      expect(response.body.length).to.equal(2)
    })
  })
  describe('POST', () => {
    it('Deberia agregar una noticia',async () => {
      let noticia = noticias.getNoticia()
      let response = await request.post('/noticias').send(noticia)
      expect(response.status).to.equal(200)
      expect(response.body).to.include.keys('_id', 'titulo','autor', 'fyh')
      expect(response.body.autor).to.equal(noticia.autor)
    })
  })
})