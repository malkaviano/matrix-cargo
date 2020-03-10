import { Controller, Get, Param, Query } from '@nestjs/common';

import { GitService } from './git.service';

@Controller('git')
export class GitController {
    constructor(private readonly service: GitService) {}

    @Get(':lang')
    async getRepos(@Param('lang') lang: string, @Query('page') page: number): Promise<any> {
      return this.service.getGitRepos(lang, page);
    }
}
