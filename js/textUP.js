let showText = function(target, message, index, interval) {
    if (index < message.length) {
      document.querySelector(target).textContent += message[index++];
  
      setTimeout(function() {
        showText(target, message, index, interval);
      }, interval);
    }
  }
  showText("#alphamap__text", "AlphaMap", 0, 300)
  showText("#main_project_text", "Projects /", 0, 80)
