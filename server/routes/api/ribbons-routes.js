'use strict';
var logger = require('winston');
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getRibbons(request, response) {
    logger.debug('get ribbons info');
    var result;
    try {
        logger.debug('retrieving result ribbons ');
        result = await (service.ribbonsService.getRibbons());
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function getRibbon(request, response) {
    logger.debug('get ribbon info');
    var result;
    try {
        logger.debug('retrieving result ribbons ');
        result = await (service.ribbonsService.getRibbon(request.params.ribbonId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function addRibbon(request, response) {
    logger.debug('add ribbons info');
    var result;
    try { 
        console.log(request.body);
        result = await (service.ribbonsService.addRibbon(request.body.ribbon));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateRibbon(request, response) {
    logger.debug('update ribbons info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.ribbonsService.updateRibbon(request.body.ribbon));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteRibbon(request, response) {
    logger.debug('delete ribbons info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.ribbonsService.deleteRibbon(request.params.ribbonId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}


routes.get('/', async(getRibbons));
routes.get('/:ribbonId', async(getRibbon));
routes.post('/', async(addRibbon));
routes.put('/', async(updateRibbon));
routes.delete('/:ribbonId', async(deleteRibbon));


module.exports = routes;