import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@wawjs/ngx-ui';

@Component({
	imports: [RouterLink, ButtonComponent],
	templateUrl: './ngx-ui.component.html',
	styleUrl: './ngx-ui.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxUiComponent {}
