const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const sequelize = require('./connection');

const User = require('./model/user')
const Message = require('./model/message')
const userRouter = require('./routes/user')
const messageRouter = require('./routes/message')
const cors = require('cors');
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });
// console.log(io);
app.set("io", io)
const ejs = require('ejs');
const session = require('express-session')
const multer = require('multer')

// exports.app = app;
const fileStroage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
app.use(cors())
app.use((req,res,next) => {
    req.io = io;
    next()
})
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    next()
})

app.use(multer({ storage: fileStroage }).single('photo'))
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))
app.use(session({ secret: "its a secret!" }))
const users = {}
//run when client connect

// io.on('connection', socket => {

//     socket.emit('message', 'welcome in chat room')

//     //broadcast when user joined
//     socket.broadcast.emit('message', 'a user has joined');

//     //runs when client disconnects
//     socket.on('disconnect', () => {
//         io.emit('message', 'a user has left')
//     })

//     socket.on('chatMessage',msg => {
//         console.log(msg);
//     })
//   })


app.use('/user', userRouter);
app.use('/message', messageRouter);

//relations

User.hasMany(Message);
Message.belongsTo(User)
sequelize.sync().then(() => {
    console.log('connection done')
}).catch(err => {
    console.log(err)
})
server.listen(3000);
