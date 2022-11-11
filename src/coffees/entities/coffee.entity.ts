// 📝 coffee.entity file

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({type:"json"})
  flavors: string[];
}
