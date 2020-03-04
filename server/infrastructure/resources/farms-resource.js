var logger = require('winston');
var knex = require(__base + 'server/configuration').knex.knex;
var mysql = require('mysql');
var fs = require('fs');
var Promise = require('bluebird');

function getFarms(cb) {
    knex.select('*').from('farms')
        .then(function (results) {
            return cb(null, results);
        })
        .catch(function (reason) {
            logger.error(reason);
            return cb(reason.message, null);
        });
}

function getFarm(id,cb) {
    knex.select('*').from('farms')
        .where('idfarms','=',id)
            .then(function (results) {
                return cb(null, results);
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

function addFarm(data,cb) {
    logger.info(data);
    knex('farms').insert({
            name:data.name,
            address:data.address}).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
    
}

function updateFarm(data,cb) {
    knex('farms')
        .where('idfarms','=',data.idfarms)
        .update({name:data.name,
            address:data.address}).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
    
}

function deleteFarm(id,cb) {
    logger.debug(id);
    knex('farms')
        .where('idfarms','=',id)
        .del().then(function(result){
            return cb(null,'Success!');
        })
        .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

module.exports = {
    getFarms: Promise.promisify(getFarms),
    getFarm: Promise.promisify(getFarm),
    addFarm: Promise.promisify(addFarm),
    updateFarm: Promise.promisify(updateFarm),
    deleteFarm: Promise.promisify(deleteFarm),
};