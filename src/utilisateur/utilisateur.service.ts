import { Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
// import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { Utilisateur } from './entities/utilisateur.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UtilisateurService {
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateurRepository: Repository<Utilisateur>,
  ) {}
  async create(createUtilisateurDto: CreateUtilisateurDto) {
    const utilisateur = this.utilisateurRepository.create(createUtilisateurDto);
    const result = await this.utilisateurRepository.save(utilisateur);
    return result;
  }

  findAll() {
    return `This action returns all utilisateur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} utilisateur`;
  }

  // update(id: number, updateUtilisateurDto: UpdateUtilisateurDto) {
  //   return `This action updates a #${id} utilisateur`;
  // }

  remove(id: number) {
    return `This action removes a #${id} utilisateur`;
  }
}
