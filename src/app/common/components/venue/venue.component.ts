import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CONFIG_URLS } from '../../constants/site.constants';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {
  venue_url = CONFIG_URLS.VENUE_MAP_URL;
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    
  }

  getSafeVenueUrl(): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.venue_url);
  }

}
