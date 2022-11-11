import { PartialType } from '@nestjs/graphql';
import { CreateCoffeeInput } from './create-coffee.input';

export class UpdateCoffeeInput extends PartialType(CreateCoffeeInput) {}
