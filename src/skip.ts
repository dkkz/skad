const config: MutationObserverInit = {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true,
};

export const observeComponent = (container: string, button: string): void => {
  const target = document.querySelector(container);

  const observer: MutationObserver = new MutationObserver(() => {
    const removeButton: HTMLAnchorElement | null = document.querySelector(
      button
    );
    removeButton && removeButton.click();
  });

  target && observer.observe(target, config);
};

['click', 'load'].map((event) =>
  document.addEventListener(
    event,
    () => {
      observeComponent(
        '.style-scope.ytd-popup-container',
        '.yt-simple-endpoint.style-scope.ytd-button-renderer'
      );
      observeComponent('.ytd-player', '.ytp-ad-skip-button');
      observeComponent('.ytd-player', '.ytp-ad-overlay-close-button');
    },
    { once: true }
  )
);
