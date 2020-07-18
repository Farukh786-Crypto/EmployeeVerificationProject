import {Routes} from '@angular/router'
import { SignUpComponent } from './sign-up/sign-up.component'
import { LoginComponent } from './login/login.component'
import { ErrorComponentComponent } from './error-component/error-component.component'


export const route1:Routes=[

    {path:'',loadChildren:'./login/loginlazy.module#LoginLazyClass'},
    {path:'signup',loadChildren:'./sign-up/signuplazy.module#SignUpLazyClass'},
    {path:'**',component:ErrorComponentComponent}  //wild route
    
]