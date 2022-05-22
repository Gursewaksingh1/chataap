const Message = require('../model/message')
// const app = require('../app');

exports.createmsg = async (req, res, next) => {
    try {
console.log('fffffffff');
        // const io = app.app.get("io")
req.io.on('connection', socket => {

            socket.emit('message', 'welcome in chat room')

            //broadcast when user joined
            socket.broadcast.emit('message', 'a user has joined');

            //runs when client disconnects
            socket.on('disconnect', () => {
                req.io.emit('message', 'a user has left')
            })

            socket.on('chatMessage', msg => {
                console.log(msg);
            })
        })
        console.log('aaaaa');

        // const msg = await Message.create({
        //     message: req.body.msg,
        //     receiverId:req.body.reciverid,
        //     userId: req.body.userid
        // })

    } catch (err) {
        console.log(err)
    }
    res.send('done')
}