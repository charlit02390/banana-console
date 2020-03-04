'use strict';
var logger = require('winston');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var teamsRepository = require(__base + 'server/infrastructure/resources').teams;

function getTeams() {
    var result;
    logger.debug('selecting all teams');
    try {
        result = await(teamsRepository.getTeams());
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { teams: result };
}

function getTeam(id) {
    var result;
    logger.debug('selecting a team');
    try {
        result = await(teamsRepository.getTeam(id));
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { team: result };
}

function addTeam(data) {
    var result;
    logger.debug('add team');
    try {
        result = await(teamsRepository.addTeam(data));
    } catch (error) {
        throw error;
    }

    return { message: result };
}

function updateTeam(data) {
    var result;
    logger.debug('update team');
    try {
        result = await(teamsRepository.updateTeam(data));
    } catch (error) {
        throw error;
    }

    return { message: result };
}

function deleteTeam(id) {
    var result;
    logger.debug('delete team');
    try {
        result = await(teamsRepository.deleteTeam(id));
    } catch (error) {
        throw error;
    }

    return { message: result };
}



module.exports = {};
module.exports.getTeams = async(getTeams);
module.exports.getTeam = async(getTeam);
module.exports.addTeam = async(addTeam);
module.exports.updateTeam = async(updateTeam);
module.exports.deleteTeam = async(deleteTeam);