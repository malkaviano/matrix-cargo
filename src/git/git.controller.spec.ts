import { Test, TestingModule } from '@nestjs/testing';
import { GitController } from './git.controller';
import { GitService } from './git.service';

describe('Git Controller', () => {
  let controller: GitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GitController],
      providers: [
        { provide: GitService, useValue: {} }
      ]
    }).compile();

    controller = module.get<GitController>(GitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
