/**
 * TiPouchDB
 */
var PouchDB = require('pouchdb');


function TiPouchBD(dbname, options) {
  options = options || {};

  return new Loki(dbname, options);
}

module.exports = TiPouchBD;