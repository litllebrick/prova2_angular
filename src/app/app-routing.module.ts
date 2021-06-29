import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './fatura/cadastro/cadastro.component';
import { ListaComponent } from './fatura/lista/lista.component';

const routes: Routes = [
  { path: 'cadastro/fatura', component: CadastroComponent },
  { path: 'lista/fatura', component: ListaComponent },
  { path: '',   redirectTo: 'cadastro/fatura', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
