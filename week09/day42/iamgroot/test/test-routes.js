/*'use strict';

const request = require('supertest');
const { expect } = require('chai');
const app = require('../routes');
​
describe('Test /groot endpoint.', () => {
  it('GET /groot?message=somemessage giving parameter ok.', () => {
    request(app)
      .get('/groot?message=somemessage')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(message).to.equal('somemessage');
      });
  })
});
*/
'use strict';

const  app  = require('../routes');
const { expect } = require('chai');
const  request  = require('supertest');

describe('routes', () => {
  it('GET /groot should return "error": "I am Groot!" in case of empty query', () => {
    request(app)
      .get('/groot')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.length).to.equal(1);
        expect(res.body.hasOwnProperty("error")).to.be.true;
        expect(res.body.error).to.equal("I am Groot!");
      })
  })
});