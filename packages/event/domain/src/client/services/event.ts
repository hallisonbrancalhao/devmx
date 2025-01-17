import {
  Event,
  Page,
  QueryParams,
  RSVP,
  RSVPStatus,
} from '@devmx/shared-api-interfaces';
import { EntityService } from '@devmx/shared-api-interfaces/client';
import { Observable } from 'rxjs';

export abstract class EventService extends EntityService<Event> {
  abstract findAll(params: QueryParams<Event>): Observable<Page<Event>>;

  abstract createRSVP(event: string, status: RSVPStatus): Observable<RSVP>;

  abstract findRSVPByEvent(event: string): Observable<RSVP[]>;

  abstract findRSVPConfirmedByEvent(event: string): Observable<RSVP[]>;
}
