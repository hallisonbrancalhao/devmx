import { SharedDatabaseModule, SharedResourceModule } from '@devmx/shared-resource';
import { PresentationResourceModule } from '@devmx/presentation-resource';
import { AccountResourceModule } from '@devmx/account-resource';
import { LocationResourceModule } from '@devmx/location-resource';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { env } from './envs/env';

@Module({
  imports: [
    ServeStaticModule.forRoot(env.static),
    SharedResourceModule.forRoot(env),
    SharedDatabaseModule,
    AccountResourceModule,
    PresentationResourceModule,
    LocationResourceModule
  ]
})
export class AppModule {}
