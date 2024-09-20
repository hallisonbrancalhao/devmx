import { CreatePresentationDto } from './create-presentation.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePresentationDto extends PartialType(CreatePresentationDto) {}
