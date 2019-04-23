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

//listen for key press events
$("#message").on("keypress", ()=>{
    socket.emit("typing", $("#handle").val());
});

//listen for chat events

socket.on("chat", (data)=>{
    $("#feedback").html("");
    $("#output").append(`<p><strong>${data.handle}:</strong>${data.message}</p>`);
});

socket.on("typing", (data)=>{
    $("#feedback").html(`<p><em>${data} is typing a message...</em></p>`);
});