const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const socket = io();

function synthVoice(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.speak(utterance);
}


document.querySelector('button').addEventListener('click',() => {
    console.log('hi');
    recognition.start();
});



recognition.addEventListener('result',(e)=>{
   let last = e.results.length - 1 ;
   let text = e.results[last][0].transcript;

   console.log('Confidence: ' + e.results[0][0].confidence);


   socket.emit('chat_message',text);

    $('#message').html("You say :" +text);
});

socket.on('bot_reply', function(replyText) {
    synthVoice(replyText);

    $('#answer').html("You get : " + replyText);
});

socket.on('connect',()=>{

    //synthVoice(message);
});
