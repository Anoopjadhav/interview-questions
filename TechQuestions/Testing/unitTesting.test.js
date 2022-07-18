describe('<UnitTests />', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('moduleName 1', () => {
    jest.doMock('./moduleName', () => {
      return jest.fn(() => 1);
    });
    const moduleName = require('./moduleName');
    expect(moduleName()).toEqual(1);
  });

  it('moduleName 2', () => {
    jest.doMock('./moduleName', () => {
      return jest.fn(() => 2);
    });
    const moduleName = require('./moduleName');
    expect(moduleName()).toEqual(2);
  });
})