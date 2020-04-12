import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CONFIG_URLS, CONFIG_TXT } from '../../constants/site.constants';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  title = CONFIG_TXT.SITE_TITLE;
  date = CONFIG_TXT.EVENT_DATE;
  venue = CONFIG_TXT.VENUE_NAME;
  button_label = CONFIG_TXT.TICKETS_BUTTON_LABEL;
  tickets_url = CONFIG_URLS.EVENT_BRITE_URL;
  sponsors_dossier = CONFIG_URLS.SPONSORS_DOSSIER_URL;
  
  constructor(
    private sanitizer: DomSanitizer
  ) { }
  
  getSafeTicketLink(): any {
    return this.sanitizer.bypassSecurityTrustUrl(this.tickets_url);
  }

  getSafeSponsorsDossierLink(): any {
    return this.sanitizer.bypassSecurityTrustUrl(this.sponsors_dossier);
  }

  ngOnInit() {
  }

}
