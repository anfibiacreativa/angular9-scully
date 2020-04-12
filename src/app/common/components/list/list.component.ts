import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CONFIG_URLS, CONFIG_TXT } from '../../constants/site.constants';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  // teaserType: TeaserType;
  // this is where you configure all sites defaults
  // to assign values go to './common/constants/site.constants'
  title = CONFIG_TXT.SITE_TITLE;
  tickets_url = CONFIG_URLS.EVENT_BRITE_URL;
  c4p_label = CONFIG_TXT.C4P_LABEL;
  sponsors_dossier = CONFIG_URLS.SPONSORS_DOSSIER_URL;
  twitter_hashtags = CONFIG_TXT.TWITTER_HASHTAGS_URL;
  c4p_url = CONFIG_URLS.C4P_URL;

  // control block visibility
  show_sponsors: boolean;
  show_speakers: boolean;
  show_organizers: boolean;

  @Input() type: any;
  @ViewChild('TeaserComponent')
  private teasertype: any = this.type;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private activeRoute: ActivatedRoute
  ) {}

  getSafeSponsorsDossierLink(): any {
    return this.sanitizer.bypassSecurityTrustUrl(this.sponsors_dossier);
  }

  getSafeC4PLink(): any {
    return this.sanitizer.bypassSecurityTrustUrl(this.c4p_url);
  }

  ngOnInit() {
    this.subscription = this.activeRoute.data.subscribe(data => {
      this.teasertype = data.teaserType;
      this.show_sponsors = data.show_sponsors || false;
      this.show_speakers = data.show_speakers || false;
      this.show_organizers = data.show_organizers || false;
      console.log(this.teasertype);
      this.type = this.teasertype;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
