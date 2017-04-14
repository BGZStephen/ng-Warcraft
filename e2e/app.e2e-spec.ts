import { NgWarcraftPage } from './app.po';

describe('ng-warcraft App', () => {
  let page: NgWarcraftPage;

  beforeEach(() => {
    page = new NgWarcraftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wow works!');
  });
});
