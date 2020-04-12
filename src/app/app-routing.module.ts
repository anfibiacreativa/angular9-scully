import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeaserlistComponent, StageComponent, AgendaComponent, VenueComponent } from './common/components';

const routes: Routes = [
  {
    path: 'event',
    component: StageComponent
  },
  {
    path: 'sponsors',
    component: TeaserlistComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'speakers',
    component: TeaserlistComponent
  },
  {
    path: 'venue',
    component: VenueComponent
  },
  {
    path: 'organizers',
    component: TeaserlistComponent
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
