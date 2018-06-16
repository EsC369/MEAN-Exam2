import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Added components:
import { ProductsComponent } from './products/products.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: "products", component: ProductsComponent},
  {path: "products/new", component: NewComponent},
  {path: "products/:id", component: ShowComponent},
  {path: "products/:id/edit", component: EditComponent},
  {path: "", pathMatch: "full", redirectTo: "/products"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
