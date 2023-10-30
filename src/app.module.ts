import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { ProduitModule } from './produit/produit.module';
import { CategorieModule } from './categorie/categorie.module';

@Module({
  imports: [UtilisateurModule, ProduitModule, CategorieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
