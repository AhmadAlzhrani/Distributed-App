const express = require('express');
var cors = require('cors')
const sequelize = require('./util/database');
const User = require('../models/users');

const app = express()
app.use(express.json())
app.use(cors())

// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello coe427 js!')
})

app.post('/users', async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email
    })
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error)
  }
})

sequelize.sync({force:false})
  .then(() => app.listen(process.env.EXTERNALPORT))
  .catch(err =>log.error(err))
