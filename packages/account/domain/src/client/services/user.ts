import { EntityService } from '@devmx/shared-api-interfaces/client';
import { User } from '@devmx/shared-api-interfaces';
import { Observable } from 'rxjs';
import {
  UpdatePassword,
  UpdateProfile,
  UpdateRoles,
  UpdateSocial,
} from '../../lib/dtos';

export abstract class UserService extends EntityService<User> {
  abstract updatePassword(data: UpdatePassword): Observable<User | null>;

  abstract updateProfile(data: UpdateProfile): Observable<User | null>;

  abstract updateSocial(data: UpdateSocial): Observable<User | null>;

  abstract updateRoles(data: UpdateRoles): Observable<User | null>;
}
