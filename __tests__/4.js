import { calculateDaysToPayDebts } from "../4";
import { test, expect } from "vitest";

// F, cantidad de funciones nuevas que escribe Ricardo por día
// R, cantidad de funciones que borra ricardo cada dia al finalizar su trabajo
// D, numero de dias del plazo de entrega
//  T, cantidad de funciones totales que espera el cliente que realice ricardo 
// export function willRicardoMakeItAndNotBeFired(D,T,F,R)

test('calculateDaysToPayDebts', () => { 
    expect(
        calculateDaysToPayDebts([1])
    ).toStrictEqual([1]) // hace una comparación estrica del array
   
 })