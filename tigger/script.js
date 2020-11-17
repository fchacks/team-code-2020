//welcome message
var message = "Hello! My name is Tigger. I'm here to help you talk through your stress.";
sendBotMessage();
var name;
var total = 0;
var questionName = "name";												
message = 'What would you like me to call you? Choose a nickname.';			//first question	  

var output = document.getElementById('output');			
setTimeout(sendBotMessage, 2000);													

//Enter key presses Submit button
var inputText = document.getElementById("input");
inputText.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("sendButton").click();
  }
});

function bot(questionName) { 
  //posts user's response to the chat
  var input = document.getElementById("input").value;
  console.log(input);
  message = input;
  sendUserMessage();

  //decides what to do with input
  //asks next question
  if (questionName == "name") {
    name = input;
    message = 'hello ' + input;
    sendBotMessage();
    document.getElementById("input").value = "";   				
    message = "how old are you?";
    setTimeout(sendBotMessage, 2000);									
    return "age";
  }

  else if (questionName == "age") {
    message = input + ' is a hard age to be';
    sendBotMessage();
    document.getElementById("input").value = "";   
    message = 'How are you feeling today?';
    setTimeout(sendBotMessage, 2000);
    return "feeling";
  }   

  else if(questionName == "feeling"){
    message = "I see that you're feeling " + input + " today. In these difficult times, it is great that you have insight on your emotions.";
    sendBotMessage();
    document.getElementById("input").value = "";
    message = "Why do you feel " + input + "?";
    setTimeout(sendBotMessage, 2000);
    return "feelingReason";
  }

  else if(questionName == "feelingReason") {
    message = "I hear you! Now I want to ask you some questions just to get a feel on how stressed you are. Please answer honestly - remember, this is just between me and you.";
    sendBotMessage();
    document.getElementById("input").value = "";
    message = "In the last month, how often have you felt that you were unable to control irritations in your life? Please enter a number from 0-4 according to this scale:";
    setTimeout(sendBotMessage, 2000);
    displayScale();
    return "q1";
  }

  //stress test
  else if(questionName == "q1") {
    total += parseInt(input, 10);
    console.log(total);
    message = "In the last month, how often have you found that you could not cope with all the things that you had to do?";
    document.getElementById("input").value = "";
    setTimeout(sendBotMessage, 2000);
    displayScale();
    return "q2";
  }

  else if(questionName == "q2") {
    total += parseInt(input,10);
    console.log(total);
    message = "In the last month, how often have you been upset because of something that happened unexpectedly?";
    document.getElementById("input").value = "";
    setTimeout(sendBotMessage, 2000);
    displayScale();
    return "q3";
  }

  else if(questionName == "q3") {
    total += parseInt(input,10);
    console.log(total);
    message = "In the last month, how often have you felt that you were on top of things?";
    document.getElementById("input").value = "";
    setTimeout(sendBotMessage, 2000);
    displayScale();
    return "q4";
  }

  else if(questionName == "q4") {
    total += Math.abs(4-parseInt(input,10));
    console.log(total);
    message = "In the last month, how often have you been angered because of things that were outside of your control?";
    document.getElementById("input").value = "";
    setTimeout(sendBotMessage, 2000);
    displayScale();
    return "q5";
  }

  else if(questionName == "q5") {
    total += parseInt(input,10);
    console.log(total);
    message = "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?";
    document.getElementById("input").value = "";
    setTimeout(sendBotMessage, 2000);
    displayScale();
    return "q6";
  }

  else if(questionName == "q6") {
    total += parseInt(input,10);
    console.log(total);
    message = "In the last month, how often have you felt that things were going your way?";
    document.getElementById("input").value = "";
    setTimeout(sendBotMessage, 2000);
    displayScale();
    return "q7";
  }

  else if(questionName == "q7") {
    total += Math.abs(4-parseInt(input,10));
    console.log(total);
    message = "In the last month, how often have you felt that you were unable to control the important things in your life?";
    document.getElementById("input").value = "";
    setTimeout(sendBotMessage, 2000);
    displayScale();
    return "q8";
  }

  else if(questionName == "q8") {
    total += parseInt(input,10);
    console.log(total);
    message = "In the last month, how often have you felt confident about your ability to handle you personal problems?";
    document.getElementById("input").value = "";
    setTimeout(sendBotMessage, 2000);
    displayScale();
    return "q9";
  }

  else if(questionName == "q9") {
    total += Math.abs(4-parseInt(input,10));
    console.log(total);
    message = 'In the last month, how often have you felt nervous and "stressed"?';
    document.getElementById("input").value = "";
    setTimeout(sendBotMessage, 2000);
    displayScale();
    return "q10";
  }

  //stress-reduction methods
  else if(questionName == "q10"){
    document.getElementById("input").value = "";
    if(total <=13){
      message = "You have low stress right now. That's fantastic! You seem to be managing your stress well recently. Keep up the good work! If you start feeling more stress, here's a guided meditation video to follow:"
    } else if(total <= 26){
      message = "You are moderately stressed right now. A little stress is good, but be careful to not become overly stressed. If you start to feel like the stress is too much, here's a guided meditation video to follow:";
    } else {
      message = "You seem to have a lot of stress. Try to identify specific stressors in your life and how you can mitigate them. I recomend doing some stress-reducing exercises in the meantime. Here's a guided mediation video to follow:"
    }
    sendBotMessage();
    var iframe = document.createElement("IFRAME");
    iframe.src = "https://www.youtube.com/embed/5d6TriLBQmE";
    iframe.className = "botBubble";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.setAttribute("allowFullScreen", "yes");
    document.getElementById("output").appendChild(iframe);
    document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
    window.scrollTo(0,document.body.scrollHeight);
    message = "Do you want a different stress-relieving method?"
    sendBotMessage();
    return "differentMethod1";
  }

  else if(questionName == "differentMethod1") {
    if(input == "no"){
      document.getElementById("input").value = "";
      message = 'Is there anything else you would like to talk about? If there is, you can do so now. If not, type "done".'
      sendBotMessage();
      return "end";
    } else {
      document.getElementById("input").value = "";
      message = "They say laughter is the best medecine! Here's a meme that my friend Pooh sent me yesterday:";
      sendBotMessage();
      var poohMeme = document.createElement("IMG");
      poohMeme.src = "/PoohJimMeme.jpg";
      poohMeme.className = "botBubble";
      document.getElementById("output").appendChild(poohMeme);
      document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
      window.scrollTo(0,document.body.scrollHeight);
      message = "Do you want a different stress-relieving method?";
      sendBotMessage();
      return "differentMethod2";
    }
  }

  else if(questionName == "differentMethod2") {
    if(input == "no"){
      document.getElementById("input").value = "";
    } else {
      document.getElementById("input").value = "";
      console.log("pooh");
      message = "Here's an article on different ways to relieve stress:";
      sendBotMessage();
      var link = document.createElement("A");
      link.href = "https://www.helpguide.org/articles/stress/stress-management.htm";
      link.className = "botBubble";
      link.innerHTML = "https://www.helpguide.org/articles/stress/stress-management.htm";
      link.target= "_blank";
      document.getElementById("output").appendChild(link);
      document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
      window.scrollTo(0,document.body.scrollHeight);
    }
    message = 'Is there anything else you would like to talk about? If there is, you can do so now. If not, type "done".'
    sendBotMessage();
    return "end";
  }

  else if(questionName == "end") {
    document.getElementById("input").value = "";
    if(input != "done"){
      message = 'Is there anything else you would like to talk about? If there is, you can do so now. If not, type "done".'
      sendBotMessage();
      return "end";
    } else {
      message = "Goodbye for now, " + name + ".";
      sendBotMessage();
    } 
  }

}

//posts bot's messages to the chat
function sendBotMessage() {
  var node = document.createElement("P");                 
  var textnode = document.createTextNode(message);       
  node.appendChild(textnode);
  node.className = "botBubble";                             
  document.getElementById("output").appendChild(node);    
  document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
  window.scrollTo(0,document.body.scrollHeight);
}

//posts user's messages to the chat
function sendUserMessage() {
  var node = document.createElement("P");                 
  var textnode = document.createTextNode(message);       
  node.appendChild(textnode);
  node.className = "userBubble";                              
  document.getElementById("output").appendChild(node);    
  document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
  window.scrollTo(0,document.body.scrollHeight);
}

//displays the scaled used by the stress test
function displayScale() {
  setTimeout(function(){
  var scale = document.createElement("IMG");
  scale.className = "botBubble";
  scale.src = '/perceivedStressScale.PNG';
  document.getElementById("output").appendChild(scale);} ,2000);
  document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
  window.scrollTo(0,document.body.scrollHeight);
}

//push enter key, to run bot function.
function processAnswer () {
  return questionName = bot(questionName);
}