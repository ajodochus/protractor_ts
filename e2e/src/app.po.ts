import { browser, by, element } from 'protractor';

export class AppPage {

  open_terminal_xy(link: string){

     element(by.xpath("//div[@class=\"card card-small\"]/span[text() = \"" + link + "\"]")).click();
  
   }


  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    //return element(by.css('app-root .content span')).getText() as Promise<string>;
    return element(by.id('welcome')).getText() as Promise<string>;
  }

  get_terminal_output():Promise<string>{
    return element(by.xpath('//div[@class=\'terminal\']/pre')).getText() as Promise<string>;
  }
}
