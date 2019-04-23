//make connection on the client side
const socket = io.connect('http://localhost:8000');

//message function

const cMessage = ()=>{
    socket.emit("chat", {
        message: $("#message").val(),
        handle: $("#handle").val()
    });
    $("#message").val("");
    // $("#handle").val("");
}

//click events
$("#send").on("click", ()=>{
    cMessage();
});

//press enter
$(document).on("keyup", (event)=>{
    if(event.which == 13) {
        cMessage();
    }
}); 



//listen for events

socket.on("chat", (data)=>{
    $("#output").append(`<p><strong>${data.handle}:</strong>${data.message}</p>`);
});