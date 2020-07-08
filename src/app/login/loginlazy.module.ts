import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import {Routes} from '@angular/router'
import  {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';




export const loginroute:Routes=[


    {path:'',component:LoginComponent}

]



@NgModule({

    declarations:[LoginComponent],
    imports:[CommonModule,RouterModule.forChild(loginroute),
        FormsModule,ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    
    ],
    providers:[],
    exports:[LoginComponent]


})


export class LoginLazyClass{    
}


