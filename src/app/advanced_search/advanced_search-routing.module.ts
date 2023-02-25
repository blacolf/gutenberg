import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedSearchPage } from './advanced_search.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancedSearchPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedSearchPageRoutingModule {}
