import { Test, TestingModule } from '@nestjs/testing';
import { GitService } from './git.service';
import { HttpModule } from '@nestjs/common';

describe('GitService', () => {
  let service: GitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GitService],
      imports: [HttpModule]
    }).compile();

    service = module.get<GitService>(GitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
