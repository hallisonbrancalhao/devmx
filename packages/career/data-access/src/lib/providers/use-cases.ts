import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  JobService,
  FindJobsUseCase,
  CreateJobUseCase,
  RemoveJobUseCase,
  UpdateJobUseCase,
  FindJobByIDUseCase,
} from '@devmx/career-domain/client';

export function provideCreateJobUseCase() {
  return createUseCaseProvider(CreateJobUseCase, [JobService]);
}

export function provideFindJobsUseCase() {
  return createUseCaseProvider(FindJobsUseCase, [JobService]);
}

export function provideFindJobByIDUseCase() {
  return createUseCaseProvider(FindJobByIDUseCase, [JobService]);
}

export function provideUpdateJobUseCase() {
  return createUseCaseProvider(UpdateJobUseCase, [JobService]);
}

export function provideRemoveJobUseCase() {
  return createUseCaseProvider(RemoveJobUseCase, [JobService]);
}

export function provideUseCases() {
  return [
    provideCreateJobUseCase(),
    provideFindJobsUseCase(),
    provideFindJobByIDUseCase(),
    provideUpdateJobUseCase(),
    provideRemoveJobUseCase(),
  ];
}