
const speakerJson = require('../src/data/speakers.json');

exports.handler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(speakerJson)
  }
}