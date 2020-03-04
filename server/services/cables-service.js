'use strict';
var logger = require('winston');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var cablesRepository = require(__base + 'server/infrastructure/resources').cables;

function getCables() {
    var result;
    logger.debug('selecting all cables');
    try {
        result = await(cablesRepository.getCables());
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { cables: result };
}

function getCable(id) {
    var result;
    logger.debug('selecting a cable');
    try {
        result = await(cablesRepository.getCable(id));
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { cable: result };
}

function addCable(data) {
    var result;
    logger.debug('add cable');
    try {
        result = await(cablesRepository.addCable(data));
    } catch (error) {
        throw error;
    }

    return { message: result };
}

function updateCable(data) {
    var result;
    logger.debug('update cable');
    try {
        result = await(cablesRepository.updateCable(data));
    } catch (error) {
        throw error;
    }

    return { message: result };
}

function deleteCable(id) {
    var result;
    logger.debug('delete cable');
    try {
        result = await(cablesRepository.deleteCable(id));
    } catch (error) {
        throw error;
    }

    return { message: result };
}



module.exports = {};
module.exports.getCables = async(getCables);
module.exports.getCable = async(getCable);
module.exports.addCable = async(addCable);
module.exports.updateCable = async(updateCable);
module.exports.deleteCable = async(deleteCable);