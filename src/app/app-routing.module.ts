import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent, StageComponent, AgendaComponent, VenueComponent } from './common/components';

const routes: Routes = [
  {
    path: 'event',
    component: StageComponent
  },
  {
    path: 'sponsors',
    component: ListComponent,
    data: { 
      teaserType: 1,
      show_sponsors: true
    }
  },
  {
    path: 'speakers',
    component: ListComponent,
    data: { 
      teaserType: 0,
      show_speakers: true
    }
  },
  {
    path: 'venue',
    component: VenueComponent
  },
  {
    path: 'organizers',
    component: ListComponent,
    data: { 
      teaserType: 2,
      show_organizer: false
    }
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  { 
    path: '', loadChildren: () => import('./common/components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: 'event'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only)],
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
