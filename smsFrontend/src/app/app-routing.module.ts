import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDataComponent} from './view-data/view-data.component';
import { AddDataComponent} from './add-data/add-data.component';

const routes: Routes = [
  {path: '', component: ViewDataComponent },
  {path:'AddData', component:AddDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
