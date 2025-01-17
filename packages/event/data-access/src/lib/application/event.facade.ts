import { createClientProvider, EntityFacade } from '@devmx/shared-data-access';
import { EditableEvent, Event } from '@devmx/shared-api-interfaces';
import { toEventPage, toEventSchema } from '../mappers';
import { filter, map } from 'rxjs';
import {
  FindEventsUseCase,
  DeleteEventUseCase,
  CreateEventUseCase,
  UpdateEventUseCase,
  FindEventByIDUseCase,
  FindAllEventsUseCase,
} from '@devmx/event-domain/client';

export class EventFacade extends EntityFacade<Event> {
  page$ = this.select((state) => state.selected).pipe(
    filter((event) => !!event),
    map((event) => toEventPage(event))
  );

  schema$ = this.page$.pipe(map((event) => toEventSchema(event)));

  constructor(
    private createEventUseCase: CreateEventUseCase,
    private findEventsUseCase: FindEventsUseCase,
    private findAllEventsUseCase: FindAllEventsUseCase,
    private findEventByIDUseCase: FindEventByIDUseCase,
    private updateEventUseCase: UpdateEventUseCase,
    private deleteEventUseCase: DeleteEventUseCase
  ) {
    super({
      response: { data: [], items: 0, pages: 0 },
      params: {
        page: 0,
        size: 10,
        filter: { title: '', format: '' },
        sort: { date: 'asc' },
      },
      selected: null,
    });
  }

  load() {
    this.onLoad(this.findEventsUseCase.execute(this.state.params));
  }

  loadAll() {
    this.onLoad(this.findAllEventsUseCase.execute(this.state.params));
  }

  loadOne(id: string) {
    this.onLoadOne(this.findEventByIDUseCase.execute(id));
  }

  create(data: EditableEvent) {
    this.onCreate(this.createEventUseCase.execute(data));
  }

  update(data: EditableEvent) {
    this.onUpdate(this.updateEventUseCase.execute(data));
  }

  delete(id: string) {
    this.onDelete(this.deleteEventUseCase.execute(id));
  }
}

export function provideEventFacade() {
  return createClientProvider(EventFacade, [
    CreateEventUseCase,
    FindEventsUseCase,
    FindAllEventsUseCase,
    FindEventByIDUseCase,
    UpdateEventUseCase,
    DeleteEventUseCase,
  ]);
}
