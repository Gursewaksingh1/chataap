const socket = io('http://localhost:3000');
const chatForm = document.getElementById('forms')
console.log(chatForm)

socket.on('message', message => {
    console.log(message)
})

//message submit 
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get msg text
    const msg = e.target.elements.msg.value;

    //emit message to server
    socket.emit('chatMessage',msg)
    e.target.elements.msg.value = ''
})