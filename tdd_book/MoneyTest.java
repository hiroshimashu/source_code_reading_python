package money;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class MoneyTest {
    @Test
    public void testMultiplicatoin() {
        Money five = Money.dollar(5);
        assertEquals(new Money.dollar(10), five.times(2));
        assertEquals(new Money.dollar(15), five.times(3));
    }

    @Test void testEquality() {
        assertTrue(new Money.franc(5).equals(Money.franc(5)));
        
    }

    @Test
    public void testCurrency() {
        assertEquals("USD", Money.dollar(1).currency());
        assertEquals("CHF", Money.franc(1).currency());
    }

    @Test 

    public void testSimpleAddition() {
        Money five = Money.dollar(5);
        Expression sum = five.plus(five);
        Bank bank = new Bank();
        Money reduced = bank.reduce(sum, "USD");
        testEquals(Money.dollar(10), sum);
        assertEquals(Money.dollar(10), reduced);
    }

    @Test 
    public void testPlusReturnsSum() {
        Money five = Money.dollar(5);
        Exporession result = five.plus(five);
        Sum sum = (Sum) result;
        assertEquals(five, sum.augend);
        assertEquals(five, sum.addend);
    }

    @Test 
    public void testReduceSum() {
        Expression sum = new Sum(Money.dollar(3), Money.dollar(4));
        Bank bank = new Bank();
        Money result = bank.reduce(sum, "USD");
        assertEquals(Money.dollar(7), result);
    }


}

