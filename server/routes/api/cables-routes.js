'use strict';
var logger = require('winston');
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getCables(request, response) {
    logger.debug('get cables info');
    var result;
    try {
        logger.debug('retrieving result cables ');
        result = await (service.cablesService.getCables());
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function getCable(request, response) {
    logger.debug('get cable info');
    var result;
    try {
        logger.debug('retrieving result cables ');
        result = await (service.cablesService.getCable(request.params.cableId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function addCable(request, response) {
    logger.debug('add cables info');
    var result;
    try { 
        console.log(request.body);
        result = await (service.cablesService.addCable(request.body.cable));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateCable(request, response) {
    logger.debug('update cables info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.cablesService.updateCable(request.body.cable));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteCable(request, response) {
    logger.debug('delete cables info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.cablesService.deleteCable(request.params.cableId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}


routes.get('/', async(getCables));
routes.get('/:cableId', async(getCable));
routes.post('/', async(addCable));
routes.put('/', async(updateCable));
routes.delete('/:cableId', async(deleteCable));


module.exports = routes;