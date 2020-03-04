'use strict';
var logger = require('winston');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var ribbonsRepository = require(__base + 'server/infrastructure/resources').ribbons;

function getRibbons() {
    var result;
    logger.debug('selecting all ribbons');
    try {
        result = await(ribbonsRepository.getRibbons());
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { ribbons: result };
}

function getRibbon(id) {
    var result;
    logger.debug('selecting a ribbons');
    try {
        result = await(ribbonsRepository.getRibbon(id));
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { ribbons: result };
}

function addRibbon(data) {
    var result;
    logger.debug('add ribbons');
    try {
        result = await(ribbonsRepository.addRibbon(data));
    } catch (error) {
        throw error;
    }

    return { message: result };
}

function updateRibbon(data) {
    var result;
    logger.debug('update ribbons');
    try {
        result = await(ribbonsRepository.updateRibbon(data));
    } catch (error) {
        throw error;
    }

    return { message: result };
}

function deleteRibbon(id) {
    var result;
    logger.debug('delete ribbons');
    try {
        result = await(ribbonsRepository.deleteRibbon(id));
    } catch (error) {
        throw error;
    }

    return { message: result };
}



module.exports = {};
module.exports.getRibbons = async(getRibbons);
module.exports.getRibbon = async(getRibbon);
module.exports.addRibbon = async(addRibbon);
module.exports.updateRibbon = async(updateRibbon);
module.exports.deleteRibbon = async(deleteRibbon);