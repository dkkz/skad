import { videoDom } from './videoDom';
import * as skipModule from './skip';

describe('Remove youtube AD', function () {
  let popUp: HTMLElement;
  const popUpContainer = 'ytd-popup-container';
  const observerMock = jest.fn();
  let skipButton: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = videoDom;
    popUp = <HTMLElement>document.querySelector(popUpContainer);
    skipButton = <HTMLElement>(
      document.querySelector(skipModule.skipConfig.skipButton)
    );
  });

  it('Should be hide Popup element', () => {
    skipModule.hideElement(popUpContainer);
    expect(popUp.style.display).toBe('none');
  });

  it('Should be clicked button', function () {
    observerMock.mockImplementation(() => {
      skipButton.style.display = 'none';
    });
    observerMock();
    expect(observerMock).toBeCalled();
    expect(skipButton.style.display).toBe('none');
  });

  it('Should be executed observer function', function () {
    const observerMockFn = jest.spyOn(skipModule, 'observeComponent');
    skipModule.observeComponent(skipModule.skipConfig);

    expect(observerMockFn).toHaveBeenCalled();
    expect(observerMockFn.mock.calls.length).toBe(1);
    expect(observerMockFn.mock.calls[0][0]).toBe(skipModule.skipConfig);
    expect(observerMockFn.mock.results[0].value).toBeUndefined();
  });
});
