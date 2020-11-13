import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';

import {AdministratorComponent} from './administrator.component';
import {AdministratorListComponent} from './administrator-list/administrator-list.component';
import {AdministratorRoutingModule} from './administrator-routing.module';


const components = [AdministratorComponent, AdministratorListComponent];

@NgModule({
  imports: [
    ThemeModule,
    AdministratorRoutingModule,
  ],
  declarations: [...components],
})
export class AdministratorModule {
}

