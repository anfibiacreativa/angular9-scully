import { Component, OnInit } from '@angular/core';
import { AGENDAONE_A } from '../../mocks/agendaOneA';
import { AGENDATWO_A } from '../../mocks/agendaTwoA';
import { AGENDATHREE_A } from '../../mocks/agendaThreeA';
import { AGENDAONE_B } from '../../mocks/agendaOneB';
import { AGENDATWO_B } from '../../mocks/agendaTwoB';
import { AGENDATHREE_B } from '../../mocks/agendaThreeB';
import { AGENDAONE_C } from '../../mocks/agendaOneC';
import { AGENDATWO_C } from '../../mocks/agendaTwoC';
import { AGENDATHREE_C } from '../../mocks/agendaThreeC';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  dataOne: any = [];
  dataTwo: any = [];
  dataThree: any = [];
  dataFour: any = [];
  dataFive: any = [];
  dataSix: any = [];
  dataSeven: any = [];
  dataEight: any = [];
  dataNine: any = [];

  private agendaOneA = AGENDAONE_A;
  private agendaTwoA = AGENDATWO_A;
  private agendaThreeA = AGENDATHREE_A;
  private agendaOneB = AGENDAONE_B;
  private agendaTwoB = AGENDATWO_B;
  private agendaThreeB = AGENDATHREE_B;
  private agendaOneC = AGENDAONE_C;
  private agendaTwoC = AGENDATWO_C;
  private agendaThreeC = AGENDATHREE_C;
  sponsorOne = 'Wallapop';
  sponsorTwo = 'Adevinta';
  sponsorThree = 'ManoMano';
  constructor() { }

  ngOnInit() {
    this.dataOne = this.agendaOneA;
    this.dataTwo = this.agendaTwoA;
    this.dataThree = this.agendaThreeA;
    this.dataFour = this.agendaOneB;
    this.dataFive = this.agendaTwoB;
    this.dataSix = this.agendaThreeB;
    this.dataSeven = this.agendaOneC;
    this.dataEight = this.agendaTwoC;
    this.dataNine = this.agendaThreeC;
  }
}
