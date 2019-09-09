'use strict';
const axios = require('axios');
const _ = require('lodash');

const getPolicies =  async (req, res, next) => {
    await axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5')
    .then(response => {
        res.status(200);
        // res.send(response.data);
        return res.render('policies', { policies: response.data.policies });
    })
    .catch(error => {
        res.status(500);
        res.send(error);
    });
}

const getPolicyById =  async (req, res, next) => {
    const policyId = req.params.id;
    
    await axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5')
    .then(response => {
        const resultPolicy = _.filter(response.data.policies, policy => policy.id == policyId);
        if (resultPolicy[0]){
            axios.get('http://www.mocky.io/v2/5808862710000087232b75ac')
            .then(response => {
            const searchClientId = resultPolicy[0].clientId;
                const resultClient = _.filter(response.data.clients, user => user.id == searchClientId);
                if (resultClient[0]){
                    res.status(200);
                    res.send(resultClient[0])
                }else{
                    res.status(404);
                    res.send('User not found')
                }
            })
            .catch(error => {
                res.status(500);
                res.send(error);
            });
        }else{
            res.status(404);
            res.send('Policy not found')
        }
    })
    .catch(error => {
        res.status(500);
        res.send(error);
    });
}

const getPolicyByClientId =  async (req, res, next) => {
    const userClientId = req.params.clientId;
    await axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5')
    .then(response => {
        const result = _.filter(response.data.policies, policy => policy.clientId == userClientId);
        if (result[0]){
            res.status(200);
            res.send(result)
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
    getPolicies,
    getPolicyById,
    getPolicyByClientId
}