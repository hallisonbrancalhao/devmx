import { AccountRefDto } from '@devmx/account-data-source';
import { CityRefDto } from '@devmx/location-data-source';
import { RangeDto } from '@devmx/shared-data-source';
import { Exclude, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  JobOut,
  JobMode,
  JobType,
  JobContract,
  ExperienceLevel,
} from '@devmx/shared-api-interfaces';

export class CreatedJobDto implements JobOut {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  requirements: string[];

  @ApiProperty({
    type: 'enum',
    enum: ['junior', 'mid', 'senior'],
    example: 'senior',
  })
  experience: ExperienceLevel;

  @ApiProperty({
    type: 'enum',
    enum: ['CLT', 'PJ'],
    example: 'CLT',
  })
  contract: JobContract;

  @ApiProperty({
    type: 'enum',
    enum: ['full-time', 'part-time', 'contract', 'freelance'],
    example: 'full-time',
  })
  type: JobType;

  @ApiProperty({
    type: 'enum',
    enum: ['office', 'remote', 'hybrid'],
    example: 'remote',
  })
  mode: JobMode;

  @ApiProperty({ type: [String] })
  benefits?: string[] | undefined;

  @Type(() => RangeDto)
  @ApiProperty({ type: () => RangeDto })
  salary?: RangeDto;

  @Exclude()
  city?: CityRefDto;

  @ApiProperty()
  contact?: string;

  @ApiProperty()
  company?: string;

  @ApiProperty()
  link?: string;

  @Exclude()
  owner: AccountRefDto;
}
