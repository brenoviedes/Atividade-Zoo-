import { Especie } from "./EspecieType"
import { Jaula } from "./JaulaType"

type Especime = {
    id?: number 
    numeroDeSerie: number 
    apelido?: string 
    especie: Especie
    jaula: string
}

export default Especime 

export const getEspecime = (obj: any): Especime => {
    const {id, nro_de_serie, apelido, id_especie, id_jaula} = obj
    

    const especime: Especime = {
        id,
        numeroDeSerie: nro_de_serie,
        apelido,
        especie: id_especie,
        jaula: id_jaula  
    }

    return especime
}