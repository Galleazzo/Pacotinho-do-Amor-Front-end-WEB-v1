import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListComponent } from './animal-list/animal-list.component';

const routes: Routes = [
  { path: '', component: AnimalListComponent },  // Listagem de animais
  { path: 'animal/:id', component: AnimalDetailsComponent }  // Página de visualização
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
