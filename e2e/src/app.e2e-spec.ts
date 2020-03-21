import { AppPage } from './app.po';
import { browser, logging, Key } from 'protractor';
import * as Collections from 'typescript-collections';
import { stringify } from 'querystring';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome');
    
  });

  it('should display terminal message', () => {
    var bsTree = new Collections.Dictionary<string, string>();
    bsTree.setValue("Angular Material", "ng add @angular/material");
    bsTree.setValue("b", "bval");
    
  bsTree.forEach(Key => {
    console.log('val: ', bsTree.getValue(Key));
  });


    
      page.open_terminal_xy("Angular Material");
      expect(page.get_terminal_output()).toEqual('ng add @angular/material');
  
    
    
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
