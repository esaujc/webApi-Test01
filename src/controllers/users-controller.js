'use strict';
const axios = require('axios');
const _ = require('lodash');


const getUsers =  async (req, res, next) => {
    try{
        const response = await axios.get(process.env.URL) 
        return res.status(200).render('users', { users: response.data.clients });
    }
    catch(error){
        res.status(500).send(error.message);
    }
}

const getUserById =  async (req, res, next) => {
    try {
      const userId = req.params.id;
      const response = await axios.get(process.env.URL)
        const result = response.data.clients.filter(user => user.id == userId)
        if (result[0]){
            res.status(200).send(result[0]);
        }else{
            res.status(404).send('User not found')
        }
    }
    catch(error){
        res.status(500).send(error.message);
    }
}

const getUserByName =  async (req, res, next) => {
  try{
    const userName = req.params.name;
    const response = await axios.get(process.env.URL)
    const result = _.filter(response.data.clients, user => user.name == userName);
        if (result[0]){
            res.status(200).send(result[0]);
        }else{
            res.status(404).send('User not found')
        }
  }
  catch(error){
      res.status(500).send(error.message);
  }
}

const authentication =  async (req, res, next) => {
  try{
    const userId = req.body.id;
    const response = await axios.get(process.env.URL)
    const result = response.data.clients.filter(user => user.id == userId)
    if (result[0]){
        req.session.currentUser = userId;
        req.session.role = result[0].role;
        req.session.name = result[0].name;
        res.status(200).render('private', {user: userId, name: result[0].name, role: result[0].role})

    }else{
        res.status(404).redirect('/');
    }
  }
  catch(error){
      res.status(500).send(error.message);
  }
}

module.exports = {
    getUsers,
    getUserById,
    getUserByName,
    authentication

}