import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarEntity } from "../../cars/entities/car.entity.js";

@Entity({ name: 'dealerships' })
export class DealershipEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    name: string;

    @Column({ name: 'city' })
    city: string;

    @Column({ name: 'active' })
    active: boolean;

    @OneToMany(() => CarEntity, (car) => car.dealership)
    cars: CarEntity[];

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;


}
