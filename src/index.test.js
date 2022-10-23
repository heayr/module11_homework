// продумать тест-кейсы (успешное/неуспешное выполнение функции);
// продумать корнер-кейсы; 
// написать unit-тесты (минимум 3).


import {sum} from './module_11';


xdescribe(('test sum'), () => {
    it('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
    }),
        it('adds 1 + 4 to equal 5', () => {
        const result = sum(1, 4);
        expect(result).toBe(5);
        })
    });