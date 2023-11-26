let showText = function(target, message, index, interval) {
    if (index < message.length) {
      document.querySelector(target).textContent += message[index++];
  
      setTimeout(function() {
        showText(target, message, index, interval);
      }, interval);
    }
  }
  showText("#main_text", "Finy", 0, 140);
  showText("#subtitle_text", "We continue to live!", 0, 170);
