const { appendNumber, setOperation, clearDisplay, calculate } = require('../public/script.js');

describe('Calculator Functions', () => {
  let display;

  beforeEach(() => {
    document.body.innerHTML = `
      <input type="text" id="display" disabled>
    `;
    display = document.getElementById('display');
  });

  test('appendNumber should add number to display', () => {
    appendNumber(7);
    expect(display.value).toBe('7');
  });

  test('setOperation should set operation and clear display', () => {
    appendNumber(7);
    setOperation('+');
    expect(display.value).toBe('');
  });

  test('clearDisplay should clear all values', () => {
    appendNumber(7);
    clearDisplay();
    expect(display.value).toBe('');
  });

  test('calculate should return correct result for addition', () => {
    appendNumber(7);
    setOperation('+');
    appendNumber(3);
    calculate();
    expect(display.value).toBe('10');
  });

  test('calculate should return correct result for subtraction', () => {
    setOperation('-');
    appendNumber(5);
    setOperation('-');
    appendNumber(3);
    calculate();
    expect(display.value).toBe('2');
  });

  test('calculate should return correct result for multiplication', () => {
    setOperation('*');
    appendNumber(2);
    setOperation('*');
    appendNumber(3);
    calculate();
    expect(display.value).toBe('6');
  });

  test('calculate should return correct result for division', () => {
    setOperation('/');
    appendNumber(9);
    setOperation('/');
    appendNumber(3);
    calculate();
    expect(display.value).toBe('3');
  });
});
