import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MarkedPipe, SafeHtmlPipe } from '@devmx/shared-ui-global/editor';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { Course } from '@devmx/shared-api-interfaces';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'devmx-course-details',
  templateUrl: './course-details.container.html',
  styleUrl: './course-details.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  imports: [
    RouterModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    IconComponent,
    SafeHtmlPipe,
    MarkedPipe,
    AsyncPipe,
    JsonPipe
  ],
  standalone: true,
})
export class CourseDetailsContainer {
  route = inject(ActivatedRoute);

  course$ = this.route.data.pipe(
    filter((data) => 'course' in data),
    map((data) => data['course'] as Course)
  );
}