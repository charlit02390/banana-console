'use strict';
var logger = require('winston');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var farmsRepository = require(__base + 'server/infrastructure/resources').farms;

function getFarms() {
    var result;
    logger.debug('selecting all farms');
    try {
        result = await(farmsRepository.getFarms());
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { farms: result };
}

function getFarm(id) {
    var result;
    logger.debug('selecting a farm');
    try {
        result = await(farmsRepository.getFarm(id));
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { farm: result };
}

function addFarm(data) {
    var result;
    logger.debug('add farm');
    try {
        result = await(farmsRepository.addFarm(data));
    } catch (error) {
        throw error;
    }

    return { message: result };
}

function updateFarm(data) {
    var result;
    logger.debug('update farm');
    try {
        result = await(farmsRepository.updateFarm(data));
    } catch (error) {
        throw error;
    }

    return { message: result };
}

function deleteFarm(id) {
    var result;
    logger.debug('delete farm');
    try {
        result = await(farmsRepository.deleteFarm(id));
    } catch (error) {
        throw error;
    }

    return { message: result };
}



module.exports = {};
module.exports.getFarms = async(getFarms);
module.exports.getFarm = async(getFarm);
module.exports.addFarm = async(addFarm);
module.exports.updateFarm = async(updateFarm);
module.exports.deleteFarm = async(deleteFarm);