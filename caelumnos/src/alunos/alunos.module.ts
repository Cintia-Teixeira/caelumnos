import { Module } from '@nestjs/common';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';


@Module({
    imports: [],
    controllers: [AlunosController],
    providers: [AlunosService],
  })
  export class AlunosModule {}