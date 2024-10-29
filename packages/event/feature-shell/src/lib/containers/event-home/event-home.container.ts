import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'devmx-event-home',
  templateUrl: './event-home.container.html',
  styleUrl: './event-home.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatDialogModule, IconComponent],
  standalone: true,
})
export class EventHomeContainer {}