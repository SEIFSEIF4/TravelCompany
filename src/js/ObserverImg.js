const targets = document.querySelectorAll("img");

const lazyLoad = (target) => {
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        console.log("💀");

        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add("appear");

          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.75,
    }
  );

  io.observe(target);
};

targets.forEach(lazyLoad);
