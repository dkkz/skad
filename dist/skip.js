(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.hideElement = exports.observeComponent = exports.skipConfig = exports.observerConfig = void 0;
    exports.observerConfig = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
    };
    exports.skipConfig = {
        config: exports.observerConfig,
        videoContainer: '.ytd-player',
        adText: '.ytp-ad-skip-button-text',
        skipButton: '.ytp-ad-skip-button',
        banner: '.ytp-ad-overlay-image',
        closeButton: '.ytp-ad-overlay-close-button'
    };
    var observeComponent = function (data) {
        var target = document.querySelector(data.videoContainer);
        var observer = new MutationObserver(function () {
            var adText = document.querySelector(data.adText);
            var skipButton = document.querySelector(data.skipButton);
            var banner = document.querySelector(data.banner);
            var closeButton = document.querySelector(data.closeButton);
            adText && skipButton.click();
            banner && closeButton.click();
        });
        target && observer.observe(target, data.config);
    };
    exports.observeComponent = observeComponent;
    var hideElement = function (element) {
        var target = document.querySelector(element);
        return (target.style.display = 'none');
    };
    exports.hideElement = hideElement;
    document.body.addEventListener('yt-navigate-start', function () {
        exports.observeComponent(exports.skipConfig);
        exports.hideElement('ytd-popup-container');
    }, { once: true });
});
