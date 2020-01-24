import { Controller, Get } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { Alunos } from './alunos'

@Controller() 
export class AlunosController {
    constructor(private alunos: AlunosService) { }

    @Get()
    list(): Alunos[] {
        return this.alunos.list();
    }
}