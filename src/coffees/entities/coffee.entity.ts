// 📝 coffee.entity file

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity()
@ObjectType({ description: 'Coffee model' })
export class Coffee {
  @PrimaryGeneratedColumn()
  @Field((type) => ID, { description: 'A unique identifier' }) // 👈
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany(
    type => Flavor,
    flavor => flavor.coffees /* inverse side */,
    {
      cascade: true,
    },
  )
  flavors?: Flavor[];

  @CreateDateColumn()
  createdAt?: Date;
}
