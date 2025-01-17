import { EventFeatureShellComponent } from './event-feature-shell.component';
import { rolesGuard } from '@devmx/shared-ui-global/guards';
import { Event } from '@devmx/shared-api-interfaces';
import { eventResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  EventDetailsContainer,
  EventHomeContainer,
  EventsContainer,
} from './containers';

export const eventFeatureShellRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Eventos',
    },
    canActivate: [rolesGuard('member')],
    component: EventFeatureShellComponent,
    children: [
      {
        path: 'administracao',
        canActivate: [rolesGuard('leader', 'director', 'manager', 'staff')],
        loadChildren: () =>
          import('@devmx/event-feature-admin').then(
            (m) => m.eventFeatureAdminRoutes
          ),
      },
      {
        path: '',
        component: EventsContainer,
      },
      {
        path: ':id',
        data: {
          breadcrumb: (data: { event: Event }) => {
            return data.event.title;
          },
        },
        resolve: { event: eventResolver },
        component: EventDetailsContainer,
        outlet: 'right',
      },
      {
        path: '',
        component: EventHomeContainer,
      },
    ],
  },
];
