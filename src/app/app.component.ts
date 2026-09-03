import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesignCartActionComponent } from './components/design-cart-action/design-cart-action.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, TopbarComponent, FooterComponent, DesignCartActionComponent],
	template: `
		<div class="flex min-h-screen flex-col">
			<app-topbar />
			<main class="flex-1">
				<router-outlet />
			</main>
			<app-design-cart-action />
			<app-footer />
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
