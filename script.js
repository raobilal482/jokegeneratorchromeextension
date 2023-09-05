fetch("https://icanhazdadjoke.com/slack")
  .then(response => response.json()
   ).then(joke => {
    var finaljoke = joke.attachments[0].text;
    var showjoke = document.getElementById('joke');
    showjoke.innerHTML = finaljoke;
  });
  
  