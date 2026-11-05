import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DealershipEntity } from "../../dealerships/entities/dealership.entity.js";

export enum CarStatus {
    AVAILABLE = 'AVAILABLE',
    RESERVED = 'RESERVED',
    SOLD = 'SOLD'
}

@Entity({ name: 'cars' })
export class CarEntity {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true  })
    plate: string;

    @Column({ name: 'brand' })
    brand: string;

    @Column({ name: 'model' })
    model: string;

    @Column({ name: 'year' })
    year: number;

    @Column({ name: 'price' })
    price: number;

    @Column({ name: 'status' })
    status: CarStatus;

    @Column({ type: 'int', nullable: true })
    dealership_id: number | null;

    @ManyToOne(() => DealershipEntity, { nullable: true })
    @JoinColumn({ name: 'dealership_id' })
    dealership: DealershipEntity | null;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;
}
