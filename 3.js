
/*

. equipo[i][0] = (N) El número de tareas asignadas en el equipo
. equipo[i][1] = (T) El número de horas promedio de las tareas en el equipo
. equipo[i][2] = (R) L aduración en horas de la tarea más pequeña en el equipo i

*/

 const teams = [[2,2,1],[3,2,1]]

//  El equipo 0 tiene 2 tareas
// De promedio tarda en realizar cada tarea 2 horas
// La tarea mas pequeña tarda 1 hora
// Cuanto tarda la otra tarea? tarda 3 horas, porque 2 tareas *2 horas de media son 4 menos 1 hora de la tarea más pequeña es 3 horas 

// El equipo 1 tiene 3 tareas
// De promedio tarda en realizar cada tarea 2 horas
// la tarea mas pequeña tarda 1 hora
// Cuanto podría tardar la tarea máxima? 

// En total son 3 tareas por 2 horas = 6 tareas
//  una tarea es de una hora
// Cuanto puede tartar de máximo una de las otras dos ? seria 4 horas asumiendo que una de las dos restantes tardan lo mínimo de tiempo 

// En numeros 1h * 2h = total son 6 horas - 2h = 4 horas

export function maxTaskDuration (teams){
    teams.map(team => {
        const [totalTasks, averageTask,minDuration]= team
        // Calculamos el total de horas que representan todas las tareas
        const totalHours = totalTasks*averageTask; // Calculo de horas totales

        // Calculamor el total de horas que representan todas las tareas más cortas (menos la que puede ser la más larga)

        const shortestTasksTotal = minDuration*(totalTasks-1) //Se multiplica la mínima duración por el total de las tareas menos una ( para saber cuanto puede durar máximo esa última tarea)
        return totalHours - shortestTasksTotal; // al total de las horas le restamos el total de las horas que pueden ser las más pequeñas
    })

}



