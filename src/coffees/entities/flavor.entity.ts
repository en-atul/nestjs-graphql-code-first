import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@ObjectType()
@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column()
  name: string;

  @ManyToMany(type => Coffee, coffee => coffee.flavors /* inverse side */)
  coffees: Coffee[];
}
