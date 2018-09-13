import { MyContactsModule } from './my-contacts.module';

describe('MyContactsModule', () => {
  let myContactsModule: MyContactsModule;

  beforeEach(() => {
    myContactsModule = new MyContactsModule();
  });

  it('should create an instance', () => {
    expect(myContactsModule).toBeTruthy();
  });
});
