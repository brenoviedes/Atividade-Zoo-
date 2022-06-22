import { getZeladorByJaulaCodigo } from "../controllers/jaulaController"
import { Zelador } from "./ZeladorType"

export type Jaula = {
    codigo: string
    area: string
    zeladoresResponsaveis?: Zelador[]
}

export const getJaula = async (obj: any): Promise<Jaula> => {
    const {codigo, area } = obj
    
    const zeladoresResponsaveis = await getZeladorByJaulaCodigo(codigo)

    const jaula: Jaula = {
        codigo,
        area,
        zeladoresResponsaveis
    }

    return jaula
}