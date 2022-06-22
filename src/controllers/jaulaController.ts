import sql from "../config/db"
import { getJaula, Jaula } from "../models/JaulaType"
import { getZelador, Zelador } from "../models/ZeladorType"

export const getZeladorByJaulaCodigo = async (jaula: string): Promise<Zelador[]> => {
    const response = await sql`
        select zelador.matricula, zelador.nome, zelador.data_nascimento from zelador inner join jaula_zelador on zelador.matricula = jaula_zelador.id_zelador where jaula_zelador.id_jaula ilike ${jaula} group by zelador.matricula
    `

    const zeladores = response.map( async item => getZelador(item))

    // console.log(await Promise.all(zeladores))
    return await Promise.all(zeladores)
}

export const getJaulaByZeladorMatricula = async (matricula: string): Promise<Jaula[]> => {

    console.log(`Rerultado da pesquisa por jaulas cuidadas pelo zelador de matícula ${matricula}`)

    const response = await sql`
    SELECT jaula.codigo, jaula.area FROM jaula
    INNER JOIN jaula_zelador ON jaula.codigo = jaula_zelador.id_jaula
    INNER JOIN zelador ON zelador.matricula = jaula_zelador.id_zelador
    WHERE matricula ILIKE ${matricula}
    `
    const jaulas = response.map( async item => getJaula(item))
    // console.log(await Promise.all(jaulas))
    console.log((await  Promise.all(jaulas)))
    return await Promise.all(jaulas)
}