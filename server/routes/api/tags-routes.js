'use strict';
var logger = require('winston');
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getTags(request, response) {
    logger.debug('get tags info');
    var result;
    try {
        logger.debug('retrieving result tags ');
        result = await (service.tagsService.getTags());
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function getTag(request, response) {
    logger.debug('get tag info');
    var result;
    try {
        logger.debug('retrieving result tags ');
        result = await (service.tagsService.getTag(request.params.tagId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function addTag(request, response) {
    logger.debug('add tags info');
    var result;
    try { 
        console.log(request.body);
        result = await (service.tagsService.addTag(request.body.tag));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateTag(request, response) {
    logger.debug('update tags info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.tagsService.updateTag(request.body.tag));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteTag(request, response) {
    logger.debug('delete tags info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.tagsService.deleteTag(request.params.tagId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}


routes.get('/', async(getTags));
routes.get('/:tagId', async(getTag));
routes.post('/', async(addTag));
routes.put('/', async(updateTag));
routes.delete('/:tagId', async(deleteTag));


module.exports = routes;