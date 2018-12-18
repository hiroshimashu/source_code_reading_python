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

    @Test void testFrancMultiplication() {
        Money five = Money.franc(5);
        assertEquals(Money.franc(10), five.times(2));
    }

    @Test
    public void testCurrency() {
        assertEquals("USD", Money.dollar(1).currency());
        assertEquals("CHF", Money.franc(1).currency());
    }

    


}

