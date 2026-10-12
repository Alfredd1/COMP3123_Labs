const express = require('express')

const routerUser = express.Router();


const users = require('../user.json')

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req,res) => {
  res.status(200).json({data: users})
});



/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
routerUser.post('/login', (req,res) => {
  try {
    const {username, password} = users;
    const { username: reqUsername, password: reqPassword } = req.body;

    if (username == reqUsername && password == reqPassword) {
        res.status(200).json({
            status: true,
            message: "User is valid"
        })
    } else if (username != reqUsername && password == reqPassword) {
        res.status(401).json({
            status:false,
            message: "Username is invalid"
        })
    } else if (username == reqUsername && password != reqPassword) {
        req.status(401).json({
            status: false,
            message: "Password is invalid"
        })
    }
  } catch (e){
    console.log(e)
  }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout/:username', (req,res) => {
    const {username} = req.params;

    res.send(`<b>${username} successfully logout.</b>`)
});

module.exports = routerUser;