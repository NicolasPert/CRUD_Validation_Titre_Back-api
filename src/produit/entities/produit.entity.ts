import { Categorie } from 'src/categorie/entities/categorie.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prix: number;

  @Column()
  quantité: number;

  @ManyToOne(() => Categorie, (Categorie) => Categorie.produit)
  categorie: Categorie;
}
