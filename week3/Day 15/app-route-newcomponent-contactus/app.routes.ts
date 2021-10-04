import { Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import {AboutComponent1 } from './about.component.1';
import { HomeComponent } from './home.component';
import { HelpComponent } from './help.component';
import { ContactusComponent} from './contactus/contactus.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: 'security', component: AboutComponent1 },
  { path: 'contactus', component: ContactusComponent }
];
