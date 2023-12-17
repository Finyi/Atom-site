let showText = function(target, message, index, interval) {
    if (index < message.length) {
      document.querySelector(target).textContent += message[index++];
  
      setTimeout(function() {
        showText(target, message, index, interval);
      }, interval);
    }
  }
  showText("#alphamap__text", "AlphaMap", 0, 100)
  showText("#atomsite__text", "Atom Site", 0, 100)
  showText("#card__alphamap__text", "A Leafletjs based project with plugins from Leafletjs users. A project showing the war in Ukraine on a map.", 0, 100)
  showText("#card__atomsite__text", "My personal website that you are currently on 😁", 0, 100)
