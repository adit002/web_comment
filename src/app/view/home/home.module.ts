import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { ContentModule } from '../content/content.module';
import { SideContentModule } from '../side-content/side-content.module';
import { CommentModule } from '../comment/comment.module';
import { TopicModule } from '../topic/topic.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    LoginModule,
    RegisterModule,
    ContentModule,
    SideContentModule,
    CommentModule,
    TopicModule
  ]
})
export class HomeModule { }
