import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/components/dashboard/dashboard.component';
import { ProfileComponent } from './components/components/profile/profile.component';
import { PanelComponent } from './Panel.component';



const routes: Routes = [
  {path: '',
  component: PanelComponent,
children: [
{path: 'dashboard', component: DashboardComponent},
{path: 'profile', component: ProfileComponent},

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
