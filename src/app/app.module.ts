import { DatabaseService } from './services/database.service';
import { firebaseConfig } from './../environments/firebase.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2/index'

import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateDishComponent } from './components/create-dish/create-dish.component';
import { SearchDishPipe } from './pipes/search-dish.pipe';

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CreateDishComponent,
    SearchDishPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot([
      { path: '', component: OverviewComponent },
      { path: 'create', component: CreateDishComponent }
    ])
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
