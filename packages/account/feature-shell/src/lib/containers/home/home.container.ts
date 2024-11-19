import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devmx-home',
  templateUrl: './home.container.html',
  styleUrl: './home.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainer {}
