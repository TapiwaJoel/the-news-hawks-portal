import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdministratorComponent} from './administrator.component';
import {AdministratorListComponent} from './administrator-list/administrator-list.component';

const routes: Routes = [{
  path: '',
  component: AdministratorComponent,
  children: [{
    path: 'list',
    component: AdministratorListComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorRoutingModule {
}
