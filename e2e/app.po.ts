import { browser, element, by } from 'protractor';

export class NgWarcraftPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wow-root h1')).getText();
  }
}
