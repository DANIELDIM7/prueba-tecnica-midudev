// F, cantidad de funciones nuevas que escribe Ricardo por día
// R, cantidad de funciones que borra ricardo cada dia al finalizar su trabajo
// D, numero de dias del plazo de entrega
//  T, cantidad de funciones totales que espera el cliente que realice ricardo 
// export function willRicardoMakeItAndNotBeFired(D,T,F,R)


export function willRicardoMakeItAndNotBeFired(D,T,F,R){
    const functionsPerDay = F-R; // las funciones por día que es las funciones nuevas menos las borradas
    const functionsDone = functionsPerDay*D; // Cuantas funciones ha terminado ricardo

    return functionsDone >= T

}