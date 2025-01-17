import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  UserService,
  FindUsersUseCase,
  CreateUserUseCase,
  DeleteUserUseCase,
  FindUserByIDUseCase,
  UpdateSocialUseCase,
  SendUserCodeUseCase,
  UpdateProfileUseCase,
  AuthenticationService,
  UpdatePasswordUseCase,
  ValidateUserCodeUseCase,
  LoadAuthenticationUseCase,
  UpdateRolesUseCase,
} from '@devmx/account-domain/client';

export function provideCreateUserUseCase() {
  return createUseCaseProvider(CreateUserUseCase, [AuthenticationService]);
}

export function provideDeleteUserUseCase() {
  return createUseCaseProvider(DeleteUserUseCase, [UserService]);
}

export function provideFindUserByIDUseCase() {
  return createUseCaseProvider(FindUserByIDUseCase, [UserService]);
}

export function provideFindUsersUseCase() {
  return createUseCaseProvider(FindUsersUseCase, [UserService]);
}

export function provideLoadAuthenticationUseCase() {
  return createUseCaseProvider(LoadAuthenticationUseCase, [
    AuthenticationService,
  ]);
}

export function provideSendUserCodeUseCase() {
  return createUseCaseProvider(SendUserCodeUseCase, [AuthenticationService]);
}

export function provideUpdatePasswordUseCase() {
  return createUseCaseProvider(UpdatePasswordUseCase, [UserService]);
}

export function provideUpdateProfileUseCase() {
  return createUseCaseProvider(UpdateProfileUseCase, [UserService]);
}

export function provideUpdateSocialUseCase() {
  return createUseCaseProvider(UpdateSocialUseCase, [UserService]);
}

export function provideUpdateRolesUseCase() {
  return createUseCaseProvider(UpdateRolesUseCase, [UserService]);
}

export function provideValidateUserCodeUseCase() {
  return createUseCaseProvider(ValidateUserCodeUseCase, [
    AuthenticationService,
  ]);
}

export function provideUseCases() {
  return [
    provideCreateUserUseCase(),
    provideDeleteUserUseCase(),
    provideFindUserByIDUseCase(),
    provideFindUsersUseCase(),
    provideLoadAuthenticationUseCase(),
    provideSendUserCodeUseCase(),
    provideUpdatePasswordUseCase(),
    provideUpdateProfileUseCase(),
    provideUpdateSocialUseCase(),
    provideUpdateRolesUseCase(),
    provideValidateUserCodeUseCase(),
  ];
}
