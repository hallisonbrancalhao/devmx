import { LayoutComponent, LayoutSidenav } from '@devmx/shared-ui-global/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthFacade } from '@devmx/account-data-access';
import { Router, RouterModule } from '@angular/router';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-career-feature-shell',
  template: `<devmx-layout />`,
  styles: `
    :host {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, LayoutComponent],
  standalone: true,
})
export class CareerFeatureShellComponent implements OnInit {
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  authFacade = inject(AuthFacade);
  sidenav = inject(LayoutSidenav);

  ngOnInit() {
    this.authFacade.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        const userExists = !!user;
        if (userExists) {
          this.sidenav.setRoles(user.roles);

          this.waitingForLogout();
        }
      });

    this.authFacade.loadAuthUser();
  }

  waitingForLogout() {
    this.authFacade.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        const userIsNull = !user;

        if (userIsNull) {
          this.sidenav.resetRoles();
          this.router.navigateByUrl('/conta/auth');
        }
      });
  }
}