import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserForm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  companyName: string;
  
  @Column()
  jobTitle: string;
  
  @Column()
  workEmail: string;
  
  @Column()
  phoneNo: string;
}