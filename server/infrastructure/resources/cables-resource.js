var logger = require('winston');
var knex = require(__base + 'server/configuration').knex.knex;
var mysql = require('mysql');
var fs = require('fs');
var Promise = require('bluebird');

function getCables(cb) {
    knex.select('*').from('cables')
        .then(function (results) {
            return cb(null, results);
        })
        .catch(function (reason) {
            logger.error(reason);
            return cb(reason.message, null);
        });
}

function getCable(id,cb) {
    knex.select('*').from('cables')
        .where('idcables','=',id)
            .then(function (results) {
                return cb(null, results);
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

function addCable(data,cb) {
    logger.info(data);
    knex('cables').insert({
            value:data.value,
            description:data.description,
            idblock: data.idblock}).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
    
}

function updateCable(data,cb) {
    knex('cables')
        .where('idcables','=',data.idcables)
        .update({
            value:data.value,
            description:data.description,
            idblock: data.idblock}).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
    
}

function deleteCable(id,cb) {
    logger.debug(id);
    knex('cables')
        .where('idcables','=',id)
        .del().then(function(result){
            return cb(null,'Success!');
        })
        .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

module.exports = {
    getCables: Promise.promisify(getCables),
    getCable: Promise.promisify(getCable),
    addCable: Promise.promisify(addCable),
    updateCable: Promise.promisify(updateCable),
    deleteCable: Promise.promisify(deleteCable),
};