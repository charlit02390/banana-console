'use strict';
var logger = require('winston');
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getFarms(request, response) {
    logger.debug('get farms info');
    var result;
    try {
        logger.debug('retrieving result farms ');
        result = await (service.farmsService.getFarms());
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function getFarm(request, response) {
    logger.debug('get farm info');
    var result;
    try {
        logger.debug('retrieving result farms ');
        result = await (service.farmsService.getFarm(request.params.farmId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function addFarm(request, response) {
    logger.debug('add farms info');
    var result;
    try { 
        console.log(request.body);
        result = await (service.farmsService.addFarm(request.body.farm));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateFarm(request, response) {
    logger.debug('update farms info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.farmsService.updateFarm(request.body.farm));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteFarm(request, response) {
    logger.debug('delete farms info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.farmsService.deleteFarm(request.params.farmId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}


routes.get('/', async(getFarms));
routes.get('/:farmId', async(getFarm));
routes.post('/', async(addFarm));
routes.put('/', async(updateFarm));
routes.delete('/:farmId', async(deleteFarm));


module.exports = routes;