import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',  // Ruta predeterminada
    pathMatch: 'full',
  },
  {
    path: 'folder',
    loadChildren: () => import('./home/folder.module').then(m => m.FolderModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
