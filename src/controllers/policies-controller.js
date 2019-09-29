'use strict';
const axios = require('axios');
const _ = require('lodash');

const getPolicies =  async (req, res, next) => {
  try{
    const response = await axios.get(process.env.POLICIES_URL)    
    return res.status(200).render('policies', { policies: response.data.policies });
  }
  catch(error){
      res.status(500).send(error.message);
  }
}

// const getPolicyById =  async (req, res, next) => {
//     const policyId = req.params.id;
    
//     await axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5')
//     .then(response => {
//         const resultPolicy = _.filter(response.data.policies, policy => policy.id == policyId);
//         if (resultPolicy[0]){
//             axios.get('http://www.mocky.io/v2/5808862710000087232b75ac')
//             .then(response => {
//             const searchClientId = resultPolicy[0].clientId;
//                 const resultClient = _.filter(response.data.clients, user => user.id == searchClientId);
//                 if (resultClient[0]){
//                     res.status(200);
//                     res.send(resultClient[0])
//                 }else{
//                     res.status(404);
//                     res.send('User not found')
//                 }
//             })
//             .catch(error => {
//                 res.status(500);
//                 res.send(error);
//             });
//         }else{
//             res.status(404);
//             res.send('Policy not found')
//         }
//     })
//     .catch(error => {
//         res.status(500);
//         res.send(error);
//     });
// }


const getPolicyById =  async (req, res, next) => {
  try{ 
    const policyId = req.params.id;
    
    const responsePolicy = await axios.get(process.env.POLICIES_URL)    
    const responseClient = await axios.get(process.env.URL)    

      const resultPolicy = _.filter(responsePolicy.data.policies, policy => policy.id === policyId);
      if (resultPolicy[0]){
          const searchClientId = resultPolicy[0].clientId;
              const resultClient = _.filter(responseClient.data.clients, user => user.id === searchClientId);
              if (resultClient[0]){
                  res.status(200).send(resultClient[0])
              }else{
                  res.status(200).send('User not found')
              }
      }else{
          res.status(404).send('Policy not found')
      }
  }
  catch(error){
      res.status(500).send(error.message);
  }
}


const getPolicyByClientId =  async (req, res, next) => {
  try{
    const userClientId = req.params.clientId;
    const response = await axios.get(process.env.POLICIES_URL) 

      const result = _.filter(response.data.policies, policy => policy.clientId == userClientId);
      if (result[0]){
          res.status(200).send(result)
      }else{
          res.status(404).send('User not found')
      }
  }
  catch(error){
      res.status(500).send(error.message);
  }
}

module.exports = {
    getPolicies,
    getPolicyById,
    getPolicyByClientId
}