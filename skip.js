["click", "load"].forEach((event) => {
  window.addEventListener(
    event,
    () => {
      setTimeout(() => {
        const config = {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true,
        };
        const target = document.querySelector(".video-ads.ytp-ad-module");
        const observer = new MutationObserver(() => {
          const adText = document.querySelector(".ytp-ad-skip-button-text");
          const skipButton = document.querySelector(".ytp-ad-skip-button");
          const banner = document.querySelector(".ytp-ad-overlay-image");
          const closeButton = document.querySelector(
            ".ytp-ad-overlay-close-button"
          );
          if (adText) skipButton.click();
          if (banner) closeButton.click();
        });
        target && observer.observe(target, config);
      }, 1000);
    },
    { once: true }
  );
});
