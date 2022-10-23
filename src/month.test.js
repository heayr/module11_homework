// продумать тест-кейсы (успешное/неуспешное выполнение функции);
// продумать корнер-кейсы; 
// написать unit-тесты (минимум 3).

import {getMonth} from './month';

describe(('tests for getMonth function'), () => {
    const october = 10;
    it('should return month: январь', ()=> {
        const result = getMonth(1);
        expect(result).toBe('январь');
    }),
    it('should return month: октябрь', ()=> {
        const result = getMonth(october);
        expect(result).toBe('октябрь');
    }),
    it('should return error: неизвестно', ()=> {
        // const result = getMonth(NaN);
        expect(getMonth(NaN)).toBe('неизвестно');
    });
    // corner-case
    it('should return : 13-й месяц', ()=> {
        // const result = getMonth(NaN);
        expect(getMonth(13)).toBe('неизвестно');
    });
});
