import { Module, HttpModule } from '@nestjs/common';
import { GitController } from './git.controller';
import { GitService } from './git.service';

@Module({
  controllers: [GitController],
  providers: [GitService],
  imports: [HttpModule]
})
export class GitModule {}
