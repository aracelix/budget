import TransactionUtils from './TransactionUtils';

describe('Transaction Utils', () => {
  it('calculates all income', () => {
    let transactions = [];
    expect(TransactionUtils.calculateIncome(transactions)).toBe(0);

    transactions = null;
    expect(TransactionUtils.calculateIncome(transactions)).toBe(0);

    transactions = undefined;
    expect(TransactionUtils.calculateIncome(transactions)).toBe(0);

    //no income
    transactions = [
      { id: 1, amount: -6789 },
      { id: 2, amount: -90 }
    ];
    expect(TransactionUtils.calculateIncome(transactions)).toBe(0);

    //mixed
    transactions = [
      { id: 1, amount: -6789 },
      { id: 2, amount: 12345 }
    ];
    expect(TransactionUtils.calculateIncome(transactions)).toBe(12345);
  });
  
  it('calculates all expenses', () => {
    let transactions = [];
    expect(TransactionUtils.calculateExpenses(transactions)).toBe(0);

    transactions = null;
    expect(TransactionUtils.calculateExpenses(transactions)).toBe(0);

    transactions = undefined;
    expect(TransactionUtils.calculateExpenses(transactions)).toBe(0);

    //no expenses
    transactions = [
      { id: 1, amount: 6789 },
      { id: 2, amount: 90 }
    ];
    expect(TransactionUtils.calculateExpenses(transactions)).toBe(0);

    //mixed
    transactions = [
      { id: 1, amount: -6789 },
      { id: 2, amount: 12345 }
    ];
    expect(TransactionUtils.calculateExpenses(transactions)).toBe(-6789);
  });

  it('calculates total', () => {
    let transactions = [];
    expect(TransactionUtils.calculateTotal(transactions)).toBe(0);

    transactions = null;
    expect(TransactionUtils.calculateTotal(transactions)).toBe(0);

    transactions = undefined;
    expect(TransactionUtils.calculateTotal(transactions)).toBe(0);

    transactions = [
      { id: 1, amount: -6000 },
      { id: 2, amount: 4000 }
    ];
    expect(TransactionUtils.calculateTotal(transactions)).toBe(-2000);
  });
});