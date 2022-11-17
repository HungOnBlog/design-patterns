interface BrowserImplementation {
  implementOpen(): void;
  implementClose(): void;
  implementScrollUp(): void;
  implementScrollDown(): void;
  implementScrollLeft(): void;
  implementScrollRight(): void;
}

class BrowserFeature {
  browserImplementation: BrowserImplementation;
  constructor(browserImplementation: BrowserImplementation) {
    this.browserImplementation = browserImplementation;
  }
  open() {
    this.browserImplementation.implementOpen();
  }
  close() {
    this.browserImplementation.implementClose();
  }
  scrollUp() {
    this.browserImplementation.implementScrollUp();
  }
  scrollDown() {
    this.browserImplementation.implementScrollDown();
  }
  scrollLeft() {
    this.browserImplementation.implementScrollLeft();
  }
  scrollRight() {
    this.browserImplementation.implementScrollRight();
  }
}

class SmartPhoneBrowserFeature extends BrowserFeature {
  constructor(browserImplementation: BrowserImplementation) {
    super(browserImplementation);
  }

  infinityScroll() {
    while (true) {
      this.browserImplementation.implementScrollDown();
    }
  }
}

class SmartPhoneBrowserImplementation implements BrowserImplementation {
  implementScrollLeft(): void {
    console.log('Call smart phone api to scroll left');
  }
  implementScrollRight(): void {
    console.log('Call smart phone api to scroll right');
  }
  implementScrollDown(): void {
    console.log('Call smart phone api to scroll down');
  }
  implementClose(): void {
    console.log('Call smart phone api to close');
  }
  implementScrollUp(): void {
    console.log('Call smart phone api to scroll up');
  }
  implementOpen(): void {
    console.log('Call smart phone api to open');
  }
}

class DesktopBrowserImplementation implements BrowserImplementation {
  implementScrollLeft(): void {
    console.log('Call desktop api to scroll left');
  }
  implementScrollRight(): void {
    console.log('Call desktop api to scroll right');
  }
  implementScrollDown(): void {
    console.log('Call desktop api to scroll down');
  }
  implementClose(): void {
    console.log('Call desktop api to close');
  }
  implementScrollUp(): void {
    console.log('Call desktop api to scroll up');
  }
  implementOpen(): void {
    console.log('Call desktop api to open');
  }
}

class SmartPhone {
  browser?: BrowserFeature;
  openBrowser(browser: BrowserFeature) {
    this.browser = browser;
  }

  swipeUp() {
    this.browser?.scrollUp();
  }

  swipeDown() {
    this.browser?.scrollDown();
  }

  swipeLeft() {
    this.browser?.scrollLeft();
  }

  swipeRight() {
    this.browser?.scrollRight();
  }
}

class Mouse {
  supportSuperFastScrolling: boolean;
  constructor(supportSuperFastScrolling: boolean) {
    this.supportSuperFastScrolling = supportSuperFastScrolling;
  }
}

class Desktop {
  browser?: BrowserFeature;

  openBrowser(browser: BrowserFeature) {
    this.browser = browser;
    browser.open();
  }

  scrollUp() {
    this.browser?.scrollUp();
  }

  scrollDown() {
    this.browser?.scrollRight();
  }

  scrollLeft() {
    this.browser?.scrollLeft();
  }

  scrollRight() {
    this.browser?.scrollDown();
  }
}
