import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  year: number;

  @Column({length: 100, nullable: true})
  genre: string;

  @CreateDateColumn()
    createdAt: Date;
}