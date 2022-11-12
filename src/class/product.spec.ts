import { Product } from "./product"; 


const createSut = (name:string, price: number) => {
    return new Product(name, price);
}
describe('Persistency', () => {

afterEach(()=> jest.clearAllMocks())

it('should have properties name and price', ()=> {
    // System under test
    const sut = createSut('Xbox', 2400);
    expect(sut).toHaveProperty('name', 'Xbox');
    expect(sut).toHaveProperty('price', 2400);
    //expect(sut.price).toBeCloseTo(2400); Se fosse float
  })

})