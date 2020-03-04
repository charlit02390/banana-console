var logger = require('winston');
var knex = require(__base + 'server/configuration').knex.knex;
var mysql = require('mysql');
var fs = require('fs');
var Promise = require('bluebird');

function getBlocks(cb) {
    knex.select('*').from('blocks')
        .then(function (results) {
            return cb(null, results);
        })
        .catch(function (reason) {
            logger.error(reason.sqlMessage);
            return cb(reason.sqlMessage, null);
        });
}

function getBlock(id,cb) {
    knex.select('*').from('blocks')
        .where('idblocks','=',id)
            .then(function (results) {
                return cb(null, results);
            })
            .catch(function (reason) {
                logger.error(reason.sqlMessage);
                return cb(reason.sqlMessage, null);
            });
}

function addBlock(data,cb) {
    logger.info(data);
    knex('blocks').insert({
            name:data.name,
            description:data.description,
            idfarm:data.idfarm}).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason.sqlMessage);
                return cb(reason.sqlMessage, null);
            });
    
}

function updateBlock(data,cb) {
    knex('blocks')
        .where('idblocks','=',data.idblocks)
        .update({name:data.name,
            description:data.description,
            idfarm:data.idfarm}).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.sqlMessage, null);
            });
    
}

function deleteBlock(id,cb) {
    logger.debug(id);
    knex('blocks')
        .where('idblocks','=',id)
        .del().then(function(result){
            return cb(null,'Success!');
        })
        .catch(function (reason) {
                logger.error(reason.sqlMessage);
                return cb(reason.sqlMessage, null);
            });
}

module.exports = {
    getBlocks: Promise.promisify(getBlocks),
    getBlock: Promise.promisify(getBlock),
    addBlock: Promise.promisify(addBlock),
    updateBlock: Promise.promisify(updateBlock),
    deleteBlock: Promise.promisify(deleteBlock),
};