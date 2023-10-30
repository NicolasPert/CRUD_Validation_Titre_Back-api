import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { ProduitModule } from './produit/produit.module';
import { CategorieModule } from './categorie/categorie.module';
import { Categorie } from './categorie/entities/categorie.entity';
import { Produit } from './produit/entities/produit.entity';
import { Utilisateur } from './utilisateur/entities/utilisateur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Categorie, Produit, Utilisateur]),
    ConfigModule.forRoot({ envFilePath: [`.env`] }),
    Categorie,
    Produit,
    Utilisateur,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Categorie, Produit, Utilisateur],
      synchronize: false,
    }),
    UtilisateurModule,
    ProduitModule,
    CategorieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
