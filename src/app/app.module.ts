import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BradmaxPlayerGorillaModule } from '@bradmax/player-ng/gorilla';
import { BradmaxPlayerMoleModule } from '@bradmax/player-ng/mole';
import { BradmaxPlayerSnakeModule } from '@bradmax/player-ng/snake';
import { BradmaxPlayerZebraModule } from '@bradmax/player-ng/zebra';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BradmaxPlayerGorillaModule.forRoot(),
		BradmaxPlayerMoleModule.forRoot(),
		BradmaxPlayerSnakeModule.forRoot(),
		BradmaxPlayerZebraModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
