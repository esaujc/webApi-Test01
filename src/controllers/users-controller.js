'use strict';
const axios = require('axios');

const getUsers =  async (req, res, next) => {
    axios.get('http://www.mocky.io/v2/5808862710000087232b75ac')
    .then(response => {
        res.status(200);
        res.send(response.data);
        // console.log(response.data);
    })
    .catch(error => {
        res.status(500);
        res.send(error);
        // console.log(error);
    });
}

module.exports = {
    getUsers

}