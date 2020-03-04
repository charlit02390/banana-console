'use strict';
var logger = require('winston');
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getTeams(request, response) {
    logger.debug('get teams info');
    var result;
    try {
        logger.debug('retrieving result teams ');
        result = await (service.teamsService.getTeams());
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function getTeam(request, response) {
    logger.debug('get team info');
    var result;
    try {
        logger.debug('retrieving result teams ');
        result = await (service.teamsService.getTeam(request.params.teamId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function addTeam(request, response) {
    logger.debug('add teams info');
    var result;
    try { 
        console.log(request.body);
        result = await (service.teamsService.addTeam(request.body.team));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateTeam(request, response) {
    logger.debug('update teams info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.teamsService.updateTeam(request.body.team));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteTeam(request, response) {
    logger.debug('delete teams info');
    var result;
    try {
        logger.info(request.body);
        result = await (service.teamsService.deleteTeam(request.params.teamId));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}


routes.get('/', async(getTeams));
routes.get('/:teamId', async(getTeam));
routes.post('/', async(addTeam));
routes.put('/', async(updateTeam));
routes.delete('/:teamId', async(deleteTeam));


module.exports = routes;