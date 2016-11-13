import { ViewMenuPage } from './app.po';

describe('view-menu App', function() {
  let page: ViewMenuPage;

  beforeEach(() => {
    page = new ViewMenuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
