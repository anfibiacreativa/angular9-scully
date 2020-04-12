import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TeaserType } from '../../enums/teasertypes.enum';
import { TeaserComponent } from '../teaser/teaser.component';

@Component({
  selector: 'app-teaserlist',
  templateUrl: './teaserlist.component.html',
  styleUrls: ['./teaserlist.component.scss']
})

export class TeaserlistComponent implements OnInit {
  @Input() type: TeaserType;
  @ViewChild('TeaserComponent')
  private teasertype: any = this.type;
  constructor() { }
  ngOnInit() {
  }
}
