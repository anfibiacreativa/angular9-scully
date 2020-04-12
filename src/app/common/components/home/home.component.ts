import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeaserType } from '../../enums/teasertypes.enum';
import { Router, NavigationEnd, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CONFIG_URLS, CONFIG_VISIBILITY, CONFIG_TXT } from '../../constants/site.constants';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  teaserType = TeaserType;
  // this is where you configure all sites defaults
  // to assign values go to './common/constants/site.constants'
  title = CONFIG_TXT.SITE_TITLE;
  tickets_url = CONFIG_URLS.EVENT_BRITE_URL;
  c4p_label = CONFIG_TXT.C4P_LABEL;
  sponsors_dossier = CONFIG_URLS.SPONSORS_DOSSIER_URL;
  twitter_hashtags = CONFIG_TXT.TWITTER_HASHTAGS_URL;
  c4p_url = CONFIG_URLS.C4P_URL;

  // control block visibility
  show_intro = CONFIG_VISIBILITY.INTRO_BLOCK;
  show_sponsors = CONFIG_VISIBILITY.SPONSORS_BLOCK;
  show_speakers = CONFIG_VISIBILITY.SPEAKERS_BLOCK;
  show_agenda = CONFIG_VISIBILITY.AGENDA_BLOCK;
  show_venue = CONFIG_VISIBILITY.VENUE_BLOCK;
  show_header = CONFIG_VISIBILITY.HEADER_BLOCK;
  show_stage = CONFIG_VISIBILITY.STAGE_BLOCK;
  show_organizers = CONFIG_VISIBILITY.ORGANIZERS_BLOCK;
  show_countdown = CONFIG_VISIBILITY.COUNTDOWN_BLOCK;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  getSafeSponsorsDossierLink(): any {
    return this.sanitizer.bypassSecurityTrustUrl(this.sponsors_dossier);
  }

  getSafeC4PLink(): any {
    return this.sanitizer.bypassSecurityTrustUrl(this.c4p_url);
  }

  ngOnInit() {
    this.subscription = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd || event instanceof Scroll )
    )
    .subscribe(() => window.scrollTo(0, 0));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
