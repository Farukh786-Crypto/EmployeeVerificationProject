
import {  NgModule } from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common'
import { SignUpComponent } from './sign-up.component'
import  {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { MaterialModule } from '../material/material.module'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule, MatRadioModule, MatInputModule } from '@angular/material'

export const signuproute:Routes=[

    {path:'',component:SignUpComponent}

]


@NgModule({

    declarations:[SignUpComponent],
    imports:[CommonModule,
        RouterModule.forChild(signuproute),
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatRadioModule,
        MatInputModule
    ],
    providers:[],
    exports:[SignUpComponent]

})

export class SignUpLazyClass{



}








