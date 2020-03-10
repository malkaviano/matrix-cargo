import { Test, TestingModule } from '@nestjs/testing';
import { GithubService } from './github.service';
import { HttpModule } from '@nestjs/common';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubService],
      imports: [HttpModule]
    }).compile();

    service = module.get<GithubService>(GithubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
