import { Component, OnInit, Input, Injectable } from '@angular/core';
import { SPONSORS } from '../../mocks/sponsors';
import { ORGANIZERS } from '../../mocks/organizers';
import { SPEAKERS } from '../../mocks/speakers';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})

export class TeaserComponent implements OnInit {
  @Input() teasertype: number;
  public collection: string;
  private data: any = [];
  private breakpointOne: number;
  private breakpointTwo: number;
  private breakpointThree: number;
  private breakpointFour: number;
  private types: any = {
    '0': 'speakers',
    '1': 'sponsors',
    '2': 'organizers'
  };
  private sponsors = SPONSORS;
  private organizers = ORGANIZERS;
  private speakers = SPEAKERS;
  
  constructor() { }

  onResize(event: any) {
    this.breakpointOne = (event.target.innerWidth <= 600) ? 1 : 3;
    this.breakpointTwo = (event.target.innerWidth <= 600) ? 1 : 2;
    this.breakpointThree = (event.target.innerWidth <= 600) ? 3 : 3;
    this.breakpointFour = (event.target.innerWidth <= 721) ? 1 : 1;
  }

  ngOnInit() {
    this.breakpointOne = (window.innerWidth <= 600) ? 1 : 3;
    this.breakpointTwo = (window.innerWidth <= 600) ? 1 : 2;
    this.breakpointThree = (window.innerWidth <= 600) ? 3 : 3;
    this.breakpointFour = (window.innerWidth <= 721) ? 1 : 1;
    if (this.teasertype <= 2) {
      this.collection = this.types[this.teasertype.toString() || '0'];

      if (this.collection === 'sponsors') {
        this.data = this.sponsors;
      } else if (this.collection === 'organizers') {
        this.data = this.organizers;
      } else {
        this.data = this.speakers;
      }
    }
  }
}
