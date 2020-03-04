'use strict';
var logger = require('winston');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var blocksRepository = require(__base + 'server/infrastructure/resources').blocks;

function getBlocks() {
    var result;
    logger.debug('selecting all blocks');
    try {
        result = await(blocksRepository.getBlocks());
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { blocks: result };
}

function getBlock(id) {
    var result;
    logger.debug('selecting a block');
    try {
        result = await(blocksRepository.getBlock(id));
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { block: result };
}

function addBlock(data) {
    var result;
    logger.debug('add block');
    try {
        result = await(blocksRepository.addBlock(data));
    } catch (error) {
        throw error;
    }

    return { message: result };
}

function updateBlock(data) {
    var result;
    logger.debug('update block');
    try {
        result = await(blocksRepository.updateBlock(data));
    } catch (error) {
        throw error;
    }

    return { message: result };
}

function deleteBlock(id) {
    var result;
    logger.debug('delete block');
    try {
        result = await(blocksRepository.deleteBlock(id));
    } catch (error) {
        throw error;
    }

    return { message: result };
}



module.exports = {};
module.exports.getBlocks = async(getBlocks);
module.exports.getBlock = async(getBlock);
module.exports.addBlock = async(addBlock);
module.exports.updateBlock = async(updateBlock);
module.exports.deleteBlock = async(deleteBlock);