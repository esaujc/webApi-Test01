'use strict';
const axios = require('axios');
const _ = require('lodash');

const getUsers =  async (req, res, next) => {
    axios.get('http://www.mocky.io/v2/5808862710000087232b75ac')
    .then(response => {
        res.status(200);
        res.send(response.data);
    })
    .catch(error => {
        res.status(500);
        res.send(error);
    });
}

const getUserById =  async (req, res, next) => {
    const userId = req.params.id;
    axios.get('http://www.mocky.io/v2/5808862710000087232b75ac')
    .then(response => {
        const result = response.data.clients.filter(user => user.id == userId)
        if (result[0]){
            res.status(200);
            res.send(result[0])
        }else{
            res.status(404);
            res.send('User not found')
        }
    })
    .catch(error => {
        res.status(500);
        res.send(error);
    });
}

const getUserByName =  async (req, res, next) => {
    const userName = req.params.name;
    axios.get('http://www.mocky.io/v2/5808862710000087232b75ac')
    .then(response => {
        const result = _.filter(response.data.clients, user => user.name == userName);
        if (result[0]){
            res.status(200);
            res.send(result[0])
        }else{
            res.status(404);
            res.send('User not found')
        }
    })
    .catch(error => {
        res.status(500);
        res.send(error);
    });
}

module.exports = {
    getUsers,
    getUserById,
    getUserByName

}