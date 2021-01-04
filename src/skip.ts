export const observeAd = (): void => {
  const config: MutationObserverInit = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  };
  const target = document.querySelector('.ytd-player');
  const adText = document.querySelector('.ytp-ad-skip-button-text');
  const skipButton: HTMLButtonElement | null = document.querySelector(
    '.ytp-ad-skip-button'
  );
  const banner = document.querySelector('.ytp-ad-overlay-image');
  const closeButton: HTMLButtonElement | null = document.querySelector(
    '.ytp-ad-overlay-close-button'
  );
  const observer: MutationObserver = new MutationObserver(() => {
    if (adText && skipButton) skipButton.click();
    if (banner && closeButton) closeButton.click();
  });

  target && observer.observe(target, config);
};

['click', 'load'].map((event) =>
  document.addEventListener(event, observeAd, { once: true })
);
