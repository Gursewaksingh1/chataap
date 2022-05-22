const Message = require('../model/message')

exports.createmsg = async (req, res, next) => {
    try {
        
        req.io.on('connection', socket => {

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