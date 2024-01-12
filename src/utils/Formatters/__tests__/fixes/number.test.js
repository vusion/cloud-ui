import NumberFormatter from '../../NumberFormatter';

describe('Test NumberFormater', () => {
    it('小数点后不处理千分位bug测试', () => {
        const formatter = new NumberFormatter();

        expect(formatter.format(20008.1231, '0#,.####')).toBe('20,008.1231');
        expect(formatter.format(2000008.1231, '0#,.####')).toBe('2,000,008.1231');
        expect(formatter.format(20099999908.1231, '0#,.####')).toBe('20,099,999,908.1231');
    });
});
