'use strict';
var logger = require('winston');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var tagsRepository = require(__base + 'server/infrastructure/resources').tags;

function getTags() {
    var result;
    logger.debug('selecting all tags');
    try {
        result = await(tagsRepository.getTags());
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { tags: result };
}

function getTag(id) {
    var result;
    logger.debug('selecting a tag');
    try {
        result = await(tagsRepository.getTag(id));
        logger.debug('result length ' + result.length);
    } catch (error) {
        throw error;
    }

    return { tag: result };
}

function addTag(data) {
    var result;
    logger.debug('add tag');
    try {
        result = await(tagsRepository.addTag(data));
    } catch (error) {
        throw error;
    }

    return { message: result };
}

function updateTag(data) {
    var result;
    logger.debug('update tag');
    try {
        result = await(tagsRepository.updateTag(data));
    } catch (error) {
        throw error;
    }

    return { message: result };
}

function deleteTag(id) {
    var result;
    logger.debug('delete tag');
    try {
        result = await(tagsRepository.deleteTag(id));
    } catch (error) {
        throw error;
    }

    return { message: result };
}



module.exports = {};
module.exports.getTags = async(getTags);
module.exports.getTag = async(getTag);
module.exports.addTag = async(addTag);
module.exports.updateTag = async(updateTag);
module.exports.deleteTag = async(deleteTag);