import FromStoragePipe from './from-storage.pipe.ts';


describe('FromStoragePipe:', () => {
  it('should get cities from localStorage', () => {
    let pipe = new FromStoragePipe();
    expect(pipe.transform([], 'fav')).toBe(JSON.parse(localStorage.getItem('favCities')))
  })
});
