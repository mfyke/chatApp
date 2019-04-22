//make connection on the client side
const socket = io.connect('http://localhost:8000');

//click events

$("#send").on("click", ()=>{
    socket.emit("chat", {
        message: $("#message").val(),
        handle: $("#handle").val()
    })
});

//listen for events

socket.on("chat", (data)=>{
    $("#output").append(`<p><strong>${data.handle}:</strong>${data.message}</p>`);
});