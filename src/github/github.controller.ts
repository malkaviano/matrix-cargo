import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
    constructor(private readonly service: GithubService) {}

    @ApiQuery({
      name: "page",
      required: false,
      type: Number
    })
    @Get(':lang')
    async getRepos(@Param('lang') lang: string, @Query('page') page?: number): Promise<any> {
      return this.service.getGitRepos(lang, page);
    }
}
