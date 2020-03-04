var logger = require('winston');
var knex = require(__base + 'server/configuration').knex.knex;
var mysql = require('mysql');
var fs = require('fs');
var Promise = require('bluebird');

function getRibbons(cb) {
    knex.select('*').from('ribbons')
        .then(function (results) {
            return cb(null, results);
        })
        .catch(function (reason) {
            logger.error(reason);
            return cb(reason.message, null);
        });
}

function getRibbon(id,cb) {
    knex.select('*').from('ribbons')
        .where('idribbons','=',id)
            .then(function (results) {
                return cb(null, results);
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

function addRibbon(data,cb) {
    logger.info(data);
    knex('ribbons').insert({
            name:data.name,
            address:data.address}).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
    
}

function updateRibbon(data,cb) {
    knex('ribbons')
        .where('idribbons','=',data.idribbons)
        .update({name:data.name,
            address:data.address}).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
    
}

function deleteRibbon(id,cb) {
    logger.debug(id);
    knex('ribbons')
        .where('idribbons','=',id)
        .del().then(function(result){
            return cb(null,'Success!');
        })
        .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

module.exports = {
    getRibbons: Promise.promisify(getRibbons),
    getRibbon: Promise.promisify(getRibbon),
    addRibbon: Promise.promisify(addRibbon),
    updateRibbon: Promise.promisify(updateRibbon),
    deleteRibbon: Promise.promisify(deleteRibbon),
};