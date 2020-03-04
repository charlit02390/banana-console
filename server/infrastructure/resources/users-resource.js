var logger = require('winston');
var knex = require(__base + 'server/configuration').knex.knex;
var mysql = require('mysql');
var fs = require('fs');
var Promise = require('bluebird');

function login(data,cb) {
    logger.debug(data);
    knex.select('*').from('users')
        .where('username',data.username)
        .andWhere('password', data.password)
            .then(function (results) {
                return cb(null, results);
            })
            .catch(function (reason) {
                logger.error(reason.message);
                return cb(reason.message, null);
            });
}

function getUsers(cb) {
    knex.select('*').from('users')
        .then(function (results) {
            return cb(null, results);
        })
        .catch(function (reason) {
            logger.error(reason);
            return cb(reason.message, null);
        });
}

function getUser(id,cb) {
    knex.select('*').from('users')
        .where('idusers','=',id)
            .then(function (results) {
                return cb(null, results);
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

function addUser(data,cb) {
    logger.info(JSON.stringify(data));
    knex('users').insert({
            name:data.name,
            lastname:data.lastname,
            email:data.email,
            username:data.username,
            password:data.password,
            phone:data.phone,
            dni: data.dni,
            nationality: data.nationality,
            idrole:data.role}).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
    
}

function updateUser(data,cb) {
    console.log(data);
    knex('users')
        .where('idusers','=',data.idusers)
        .update({name:data.name,
            lastname:data.lastname,
            email:data.email,
            username:data.username,
            password:data.password,
            phone:data.phone,
            dni: data.dni,
            nationality: data.nationality,
            idrole:data.role}).then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
    
}

function deleteUser(iduser,cb) {
        knex('users')
            .where('idusers','=',iduser)
            .del().then(function(result){
                return cb(null,'Success!');
            })
            .catch(function (reason) {
                logger.error(reason);
                return cb(reason.message, null);
            });
}

module.exports = {
    login : Promise.promisify(login),
    getUsers: Promise.promisify(getUsers),
    getUser: Promise.promisify(getUser),
    addUser: Promise.promisify(addUser),
    updateUser: Promise.promisify(updateUser),
    deleteUser: Promise.promisify(deleteUser),
};