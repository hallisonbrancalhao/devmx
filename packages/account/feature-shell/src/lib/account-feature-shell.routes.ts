import { AccountFeatureShellComponent } from './account-feature-shell.component';
import { providePresentation } from '@devmx/presentation-data-access';
import { Route } from '@angular/router';
import {
  provideAccount,
  provideAccountNavFacade,
} from '@devmx/account-data-access';
import {
  SettingsContainer,
  PresentationContainer,
  PresentationsContainer,
} from './containers';

export const accountFeatureShellRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@devmx/account-feature-auth').then(
        (m) => m.accountFeatureAuthRoutes
      ),
  },
  {
    path: '',
    providers: [
      ...provideAccount(),
      ...providePresentation(),
      provideAccountNavFacade([
        {
          path: ['/account', 'settings'],
          text: 'Configurações',
          icon: 'settings',
        },
        {
          path: ['/account', 'presentations'],
          text: 'Apresentações',
          icon: 'collections_bookmark',
        },
      ]),
    ],
    component: AccountFeatureShellComponent,
    children: [
      {
        path: 'board',
        loadChildren: () =>
          import('@devmx/account-feature-board').then(
            (m) => m.accountFeatureBoardRoutes
          ),
      },
      {
        path: 'presentations/:id',
        component: PresentationContainer,
      },
      {
        path: 'settings',
        component: SettingsContainer,
      },
      {
        path: 'presentations',
        component: PresentationsContainer,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'settings',
      },
    ],
  },
];
