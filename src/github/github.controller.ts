import { Controller, Get, Param, Query } from '@nestjs/common';

import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
    constructor(private readonly service: GithubService) {}

    @Get(':lang')
    async getRepos(@Param('lang') lang: string, @Query('page') page: number): Promise<any> {
      return this.service.getGitRepos(lang, page);
    }
}
