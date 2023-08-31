import { willRicardoMakeItAndNotBeFired } from "../2";
import { test, expect } from "vitest";

// F, cantidad de funciones nuevas que escribe Ricardo por día
// R, cantidad de funciones que borra ricardo cada dia al finalizar su trabajo
// D, numero de dias del plazo de entrega
//  T, cantidad de funciones totales que espera el cliente que realice ricardo 
// export function willRicardoMakeItAndNotBeFired(D,T,F,R)

test('willRicardoMakeItAndNotBeFired', () => { 
    expect(
        willRicardoMakeItAndNotBeFired(1,10,10,0)
    ).toBe(true)
    expect(
        willRicardoMakeItAndNotBeFired(1,10,10,1)
    ).toBe(false)
    expect(
        willRicardoMakeItAndNotBeFired(2,20,10,0)
    ).toBe(true)
    expect(
        willRicardoMakeItAndNotBeFired(2,20,10,1)
    ).toBe(false)
 })