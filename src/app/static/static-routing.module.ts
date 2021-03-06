import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./containers/notfound/not-found.component";
import { AboutPage } from "./pages/about/about.page";
import { ContactPage } from "./pages/contact/contact.page";
import { IndexPage } from "./pages/index/index.page";

export const routes: Routes = [
  {
    path: "",
    component: IndexPage,
  },
  {
    path: "about",
    component: AboutPage,
    data: {
      title: "About Immerge",
    },
  },
  {
    path: "contact",
    component: ContactPage,
    data: { title: "Contact Immerge" },
  },
  {
    path: "404",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticRoutingModule {}
