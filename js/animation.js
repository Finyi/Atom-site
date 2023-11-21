function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.7] };
  let observer = new IntersectionObserver(onEntry, options);
  let mapmobile = document.querySelectorAll('.img__alphamapmobile');
  for (let elm of mapmobile) {
    observer.observe(elm);
  }
  let mapdesktop = document.querySelectorAll('.img__alphamapdesktop');
  for (let elm of mapdesktop) {
    observer.observe(elm)
  }
  let blueflag = document.querySelectorAll('.content__blueflag');
  for (let elm of blueflag) {
    observer.observe(elm)
  }
  let yellowflag = document.querySelectorAll('.content__yellowflag');
  for (let elm of yellowflag) {
    observer.observe(elm)
  }
  let ukrainetext = document.querySelectorAll('.ukraine__text');
  for (let elm of ukrainetext) {
    observer.observe(elm);
  }
  let ukrainewartext = document.querySelectorAll('.ukrainewar__text');
  for (let elm of ukrainewartext) {
    observer.observe(elm);
  }
