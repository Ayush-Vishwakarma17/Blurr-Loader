    const background = document.getElementById('background');
    const btn = document.getElementById('btn');
    const text = document.getElementById('h1');

    let isBlurred = false;
    let interval;

    btn.addEventListener('click', () => {
      isBlurred = !isBlurred;

      background.classList.toggle('active');

      btn.innerText = isBlurred ? "Blur" : "Unblur";

      // Fade in text
      text.classList.toggle('visible');

      // Start counting
      let start = isBlurred ? 0 : 100;
      let end = isBlurred ? 100 : 0;
      let step = isBlurred ? 1 : -1;

      if (interval) clearInterval(interval); // clear previous timer

      interval = setInterval(() => {
        text.innerText = `${start}%`;
        start += step;

        if ((step === 1 && start > end) || (step === -1 && start < end)) {
          clearInterval(interval);
          // Fade out after finish
          if (!isBlurred) {
            text.classList.remove('visible');
          }
        }
      }, 2); // Adjust speed
    });