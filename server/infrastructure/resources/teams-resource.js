var logger = require('winston');
var knex = require(__base + 'server/configuration').knex.knex;
var mysql = require('mysql');
var fs = require('fs');
var Promise = require('bluebird');

function getTeams(cb) {
    knex.select('*').from('teams')
        .then(function (results) {
            return cb(null, results);
        })
        .catch(function (reason) {
            logger.error(reason);
            return cb(reason.message, null);
        });
}

function getTeam(id,cb) {
    knex.select('*').from('teams')
        .where('idteams','=',id)
            .then(function (results) {
                return cb(null, results);
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

function addTeam(data,cb) {
    logger.info(data);
    knex('teams').insert({
            name:data.name
            }).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
    
}

function addTeamMember(idteam,iduser,cb) {
    logger.info(data);
    knex('teams_users').insert({
            idteams:idteam,
            idusers:iduser
            }).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
    
}

function updateTeam(data,cb) {
    knex('teams')
        .where('idteams','=',data.idteams)
        .update({name:data.name}).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
    
}

function deleteTeam(id,cb) {
    logger.debug(id);
    knex('teams')
        .where('idteams','=',id)
        .del().then(function(result){
            return cb(null,'Success!');
        })
        .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

module.exports = {
    getTeams: Promise.promisify(getTeams),
    getTeam: Promise.promisify(getTeam),
    addTeam: Promise.promisify(addTeam),
    updateTeam: Promise.promisify(updateTeam),
    deleteTeam: Promise.promisify(deleteTeam),
};