/*
Una nueva aplicacion de prestamos sin cuotas de manejo, ni intereses, quiere probar una nueva modalidad de pagos en los péstamos, la misma consiste en que el primer día del prestamo la persona debe paga solamente un peso, y cada día que pase debe pagar el doble de lo que pagó el día anterior y así sucesivamente. El último día solo dederá pagar lo que le falte.

Los interesados en la aplicación quieren hacer un pqeueño simulador, que mermita conocer la cantidad de días que se requieren para pagar la deuda en su totalidad con este sistema, dada la cantidad a prestar inicialmente.

dado un número N deberás devolver un entero indicando la cantidad de días necesarios para resolverlo.

funcion descriptiva
complete la función en el editos de trabajo, la función recive la lista de deudas, y debe devolver una lista que representa el número de días necesarios para pagar cada deuda

1 dia --> 1 peso
2 dia  --> pesos
3 día --> 4 pesos
4 día --> 8 pesos 

*/

export function calculateDaysToPayDebts(debts){
    return debts.map(debt =>{ // <---- usar el map para devolver el array
        let payment = 1 //peso
        let days = 0 // días que han pasado
        let pendingDebt = debt // deuda pendient

        while (pendingDebt >0){
            days ++
            pendingDebt -= payment
            payment *=2
        }

        return days
    })

}

