import { Mensaging } from "./message"; 


const createSut = () => {
    return new Mensaging()
}
describe('Persistency', () => {

afterEach(()=> jest.clearAllMocks())

it('should return undefined at sendMessage method', ()=> {
    // System under test
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined()
  })

  it('should call console.log once', ()=> {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('teste 2');
    //Chamar o method
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('should call console.log with "Mensagem enviada:", and msg', ()=> {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    const message = 'teste 3'

    sut.sendMessage(message);
    //Chamar o method
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada', message )
  })
})