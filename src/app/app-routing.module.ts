import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChallengesComponent } from "./pages/challenges/challenges.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ConsistencyComponent } from "./challenges/consistency/consistency/consistency.component";

const routes: Routes = [
  { path: "", redirectTo: "/challenges", pathMatch: "full" },
  { path: "challenges", component: ChallengesComponent },
  { path: "404", component: NotFoundComponent },
  { path: "challenges/consistency", component: ConsistencyComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
