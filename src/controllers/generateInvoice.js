const express = require('express');
const axios = require('axios');


exports.GetAccessToken = async(req,res) => {
    try{
    const Data = await axios({
        method: "post", 
        url: "https://commonapi.mastersindia.co/oauth/access_token", 
        data: {
            "username":"hunnygoyal789@gmail.com",
            "password": "Masters@123",
            "client_id":"LHJLsVnxUIyoaJgMSV",
            "client_secret":"Z0He404Llhmlc18a4ZGpptRb",
            "grant_type":"password"
        }
    })
    console.log(Data)
    res.status(200).json({
        message: Data.data
    })
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}





