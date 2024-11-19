import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolderPage } from './home/folder.page';  // Importar el componente correcto

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FolderPageRoutingModule {}
