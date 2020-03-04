'use strict';
var logger = require('winston');
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getBlocks(request, response) {
    logger.debug('get blocks info');
    var result;
    try {
        logger.debug('retrieving result blocks ');
        result = await (service.blocksService.getBlocks());
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function getBlock(request, response) {
    logger.debug('get block info');
    var result;
    try {
        logger.debug('retrieving result blocks ');
        result = await (service.blocksService.getBlock(request.params.blockId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        logger.debug(error);
        return handlers.errorResponseHandler(response, error);
    }
}

function addBlock(request, response) {
    logger.debug('add blocks info');
    var result;
    try { 
        console.log(request.body);
        result = await (service.blocksService.addBlock(request.body.block));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        logger.debug(error);
        return handlers.errorResponseHandler(response, error);
    }
}

function updateBlock(request, response) {
    logger.debug('update blocks info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.blocksService.updateBlock(request.body.block));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteBlock(request, response) {
    logger.debug('delete blocks info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.blocksService.deleteBlock(request.params.blockId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}


routes.get('/', async(getBlocks));
routes.get('/:blockId', async(getBlock));
routes.post('/', async(addBlock));
routes.put('/', async(updateBlock));
routes.delete('/:blockId', async(deleteBlock));


module.exports = routes;