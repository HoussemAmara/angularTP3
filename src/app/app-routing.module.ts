import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "produit", component: ListProduitComponent },
  { path: "acceuil", component: AcceuilComponent },
  { path: "produit/:id", component: DetailProduitComponent },
  { path: "", redirectTo: "/acceuil", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
