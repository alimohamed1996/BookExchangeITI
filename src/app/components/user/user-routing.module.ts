import { UserComponent } from "./user.component";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserprofileComponent } from "./userprofile/userprofile.component";
import { UsereditprofileComponent } from "./usereditprofile/usereditprofile.component";
import { UserwantbooksComponent } from "./userwantbooks/userwantbooks.component";
import { UserhavebooksComponent } from "./userhavebooks/userhavebooks.component";
import { SearchchatComponent } from "./searchchat/searchchat.component";
import { ComplaintsComponent } from "./complaints/complaints.component";
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: "user/:id",
    component: UserComponent,
    children: [
      { path: "profile", component: UserprofileComponent },
      { path: "editprofile", component: UsereditprofileComponent },
      { path: "wantedbooks", component: UserwantbooksComponent },
      { path: "havedbooks", component: UserhavebooksComponent },
      { path: "searchchat", component: SearchchatComponent ,
      children: [
        { path: ':id' ,component: ChatComponent}
      ]},
      { path: "complaint", component: ComplaintsComponent }
    ]
  }

  // { path: "user/profile", component: UserprofileComponent },
  // { path: "user/editprofile", component: UsereditprofileComponent },
  // { path: "user/wantedbooks", component: UserwantbooksComponent },
  // { path: "user/havedbooks", component: UserhavebooksComponent },
  // { path: "user/searchchat", component: SearchchatComponent },
  // { path: "user/complaint", component: ComplaintsComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
