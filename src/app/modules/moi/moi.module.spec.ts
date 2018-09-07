import { MoiModule } from './moi.module';

describe('MoiModule', () => {
  let moiModule: MoiModule;

  beforeEach(() => {
    moiModule = new MoiModule();
  });

  it('should create an instance', () => {
    expect(moiModule).toBeTruthy();
  });
});
