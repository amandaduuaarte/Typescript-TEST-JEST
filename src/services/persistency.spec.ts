import { Persistency } from "./persistency"; 

describe('Persistency', () => {

afterEach(()=> jest.clearAllMocks())

it('should return undefined at saveOrder method', ()=> {
    // System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined()
  })

  it('should call console.log once', ()=> {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.saveOrder();
    //Chamar o method
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('should call console.log with "Pedido realizado"', ()=> {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.saveOrder();
    //Chamar o method
    expect(consoleSpy).toHaveBeenCalledWith('Pedido realizado')
  })
})