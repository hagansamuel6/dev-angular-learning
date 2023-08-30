import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { TourofherosComponent } from "./tourofheros/tourofheros.component";


const routes : Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'tour-of-heroes',
        component: TourofherosComponent
    }
]

export default routes