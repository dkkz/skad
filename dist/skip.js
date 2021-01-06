var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
};
export var observeComponent = function (container, button) {
    var target = document.querySelector(container);
    var observer = new MutationObserver(function () {
        var removeButton = document.querySelector(button);
        removeButton && removeButton.click();
    });
    target && observer.observe(target, config);
};
['click', 'load'].map(function (event) {
    return document.addEventListener(event, function () {
        observeComponent('.style-scope.ytd-popup-container', '.yt-simple-endpoint.style-scope.ytd-button-renderer');
        observeComponent('.video-ads', '.ytp-ad-skip-button');
        observeComponent('.video-ads', '.ytp-ad-overlay-close-button');
    }, { once: true });
});
