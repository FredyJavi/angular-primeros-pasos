import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './component/list/list.component';
import { AddCharacterComponent } from './component/add-character/add-character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
    
  ],
  exports:[
    MainPageComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
