import ReversePolishCalculator from '../src/reverse-polish-calculator';

describe('<ReversePolishCalculator />', () => {
  context('debugging run', () => {
    it('runs', () => {
      ReversePolishCalculator.calculate('2 3 6 + * 4 -');
      ReversePolishCalculator.calculate('1 4');
    });
  });

  context('when a digit is sent', () => {
    it('displays that digit', () => {
      expect(ReversePolishCalculator.calculate('3')).to.eq('3');
      expect(ReversePolishCalculator.calculate('67')).to.eq('67');
      expect(ReversePolishCalculator.calculate('204')).to.eq('204');
    });
  });

  context('when an operation is sent after two numbers', () => {
    it('displays the result of that operation', () => {
      expect(ReversePolishCalculator.calculate('20 5 +')).to.eq('25');
      expect(ReversePolishCalculator.calculate('1 0 *')).to.eq('0');
      expect(ReversePolishCalculator.calculate('1 3 -')).to.eq('-2');
      expect(ReversePolishCalculator.calculate('3 4 /')).to.eq('0.75');
      expect(ReversePolishCalculator.calculate('1 5 / 5')).to.eq('0.2 5');
      expect(ReversePolishCalculator.calculate('7 2 - 3 4')).to.eq('5 3 4');
    });
  });

  context('when multiple operations are sent', () => {
    it('displays the result of those operations', () => {
      expect(ReversePolishCalculator.calculate('4 2 + 3 -')).to.eq('3');
      expect(ReversePolishCalculator.calculate('3 5 8 * 7 + *')).to.eq('141');
    });
  });
});
