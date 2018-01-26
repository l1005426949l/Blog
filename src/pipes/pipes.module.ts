import { NgModule } from '@angular/core';
import { AsteriskPipe } from './asterisk/asterisk';
import { DaysAgoPipe } from './days-ago/days-ago';
@NgModule({
	declarations: [AsteriskPipe,
    DaysAgoPipe],
	imports: [],
	exports: [AsteriskPipe,
    DaysAgoPipe]
})
export class PipesModule {}
