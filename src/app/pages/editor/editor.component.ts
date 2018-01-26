import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  ckeditorContent: string = '<html> <head> <title></title> </head> <body> <h2 style="text-align:center"><span style="font-family:Tahoma,Geneva,sans-serif">The Flavorful Tuscany Meetup</span></h2> <p style="text-align:center"><span style="font-family:Tahoma,Geneva,sans-serif"><strong>Welcome letter</strong></span></p> <p><span style="font-family:Tahoma,Geneva,sans-serif">Dear Guest,</span></p> <p><span style="font-family:Tahoma,Geneva,sans-serif">We are delighted to welcome you to the annual <em>Flavorful Tuscany Meetup</em> and hope you will enjoy the programme as well as your stay at the Bilancino Hotel.</span></p> <p><span style="font-family:Tahoma,Geneva,sans-serif">Please find below the full schedule of the event.</span></p> <table cellpadding="15" cellspacing="0"> <thead> <tr> <th colspan="2" scope="col"><span style="font-family:Tahoma,Geneva,sans-serif">Saturday, July 14</span></th> </tr> </thead> <tbody> <tr> <td><span style="font-family:Tahoma,Geneva,sans-serif">9:30 AM - 11:30 AM</span></td> <td><span style="font-family:Tahoma,Geneva,sans-serif">Americano vs. Brewed - &ldquo;know your coffee&rdquo; session with <strong>Stefano Garau</strong></span></td> </tr> <tr> <td><span style="font-family:Tahoma,Geneva,sans-serif">1:00 PM - 3:00 PM</span></td> <td><span style="font-family:Tahoma,Geneva,sans-serif">Pappardelle al pomodoro - live cooking session with <strong>Rita Fresco</strong></span></td> </tr> <tr> <td><span style="font-family:Tahoma,Geneva,sans-serif">5:00 PM - 8:00 PM</span></td> <td><span style="font-family:Tahoma,Geneva,sans-serif">Tuscan vineyards at a glance - wine-tasting session with <strong>Frederico Riscoli</strong></span></td> </tr> </tbody> </table> <blockquote> <p><span style="font-family:Tahoma,Geneva,sans-serif">The annual Flavorful Tuscany meetups are always a culinary discovery. You get the best of Tuscan flavors during an intense one-day stay at one of the top hotels of the region. All the sessions are lead by top chefs passionate about their profession. I would certainly recommend to save the date in your calendar for this one!</span></p> <p><span style="font-family:Tahoma,Geneva,sans-serif">Angelina Calvino, food journalist</span></p> </blockquote> <p><span style="font-family:Tahoma,Geneva,sans-serif">Please arrive at the Bilancino Hotel reception desk at least <strong>half an hour earlier</strong> to make sure that the registration process goes as smoothly as possible.</span></p> <p><span style="font-family:Tahoma,Geneva,sans-serif">We look forward to welcoming you to the event.</span></p> <p>&nbsp;</p> <p><span style="font-family:Tahoma,Geneva,sans-serif"><strong>Victoria Valc</strong></span></p> <p><span style="font-family:Tahoma,Geneva,sans-serif"><strong>Event Manager</strong></span></p> <p><span style="font-family:Tahoma,Geneva,sans-serif"><strong>Bilancino Hotel</strong></span></p> </body> </html>';
  public config = {
    uiColor: '#ffffff',
    height: '500',
  };
  
  constructor() { }
  
  @ViewChild('ckContent') ckContent: ElementRef;

  ngOnInit() {
    this.saveAs();
  }

  saveAs() {
    this.ckContent.nativeElement.innerHTML = this.ckeditorContent;
  }
}