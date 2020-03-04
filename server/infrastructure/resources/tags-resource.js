var logger = require('winston');
var knex = require(__base + 'server/configuration').knex.knex;
var mysql = require('mysql');
var fs = require('fs');
var Promise = require('bluebird');

function getTags(cb) {
    knex.select('*').from('tags')
        .then(function (results) {
            return cb(null, results);
        })
        .catch(function (reason) {
            logger.error(reason);
            return cb(reason.message, null);
        });
}

function getTag(id,cb) {
    knex.select('*').from('tags')
        .where('idtags','=',id)
            .then(function (results) {
                return cb(null, results);
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

function addTag(data,cb) {
    logger.info(data);
    knex('tags').insert({
            name:data.name,
            address:data.address}).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
    
}

function updateTag(data,cb) {
    knex('tags')
        .where('idtags','=',data.idtags)
        .update({name:data.name,
            address:data.address}).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
    
}

function deleteTag(id,cb) {
    logger.debug(id);
    knex('tags')
        .where('idtags','=',id)
        .del().then(function(result){
            return cb(null,'Success!');
        })
        .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

module.exports = {
    getTags: Promise.promisify(getTags),
    getTag: Promise.promisify(getTag),
    addTag: Promise.promisify(addTag),
    updateTag: Promise.promisify(updateTag),
    deleteTag: Promise.promisify(deleteTag),
};