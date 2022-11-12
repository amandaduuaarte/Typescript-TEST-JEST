describe('Primitive values', ()=>{
    it('should test jest assertions', ()=> {
        const number = 10; 

        expect(number).toBe(10)
        expect(number).toBeLessThanOrEqual(11)
        expect(number).toHaveProperty('toString')
    })
})

describe('Objects', ()=>{
    it('should test jest assertions with objects', ()=> {
        const person = {
            name: 'Amanda',
            age: 21,
            height: 1.70
        }
        const anotherPerson = {...person}

        expect(person).toEqual(anotherPerson);
        expect(person).toHaveProperty('age', 21);
        expect(person).not.toHaveProperty('lastName', 'Duarte');
    })
})