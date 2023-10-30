import { Injectable } from '@nestjs/common';
import { CreateCategorieDto } from './dto/create-categorie.dto';
// import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categorie } from './entities/categorie.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategorieService {
  constructor(
    @InjectRepository(Categorie)
    private categorieRepository: Repository<Categorie>,
  ) {}

  async create(createCategorieDto: CreateCategorieDto) {
    const categorie = this.categorieRepository.create(createCategorieDto);
    const result = await this.categorieRepository.save(categorie);
    return result;
  }

  findAll() {
    return this.categorieRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} categorie`;
  }

  // update(id: number, updateCategorieDto: UpdateCategorieDto) {
  //   return `This action updates a #${id} categorie`;
  // }

  remove(id: number) {
    return `This action removes a #${id} categorie`;
  }
}
