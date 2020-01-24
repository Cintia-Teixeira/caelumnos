import { Injectable } from '@nestjs/common';
import { Alunos } from './alunos';

@Injectable()
export class AlunosService {
    alunos : Alunos[] = [];

    list(): Alunos[] {
        return this.alunos;
    }

    //add

   // update

    //remove
}