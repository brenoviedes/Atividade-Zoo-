import sql from "../config/db"
import { getEspecime } from "../models/EspecimeType"

export const getEspecimeByEspecieIdOrPopNameOrScientName = async (especie: string | number) => {

    console.log(`Resultado da pesquisa por espécimes que pertencem a espécie '${especie}'`)

    const response = await sql`
        select especime.id, especime.nro_de_serie, especime.apelido, especime.id_especie, especime.id_jaula from especime inner join especie on especime.id_especie = especie.id where especie.id = ${ typeof especie === 'string' ? -5 : especie} or especie.nome_popular ilike ${typeof especie === 'string' ? '%' + especie + '%' : '0'} or especie.nome_cientifico ilike ${typeof especie === 'string' ? '%' + especie + '%' : '0'}
    `

    const especimes = response.map(item => getEspecime(item))

    console.log(especimes)
    return especimes
}

export const getEspecimeByJaulaCod = async (jaula: string) => {

    console.log(`Resultado da pesquisa por espécimes que pertencem a jaula de código '${jaula}'`)

    const response = await sql`
        select * from especime where id_jaula ilike ${jaula}
    `

    const especimes = response.map(item => getEspecime(item))
    
    console.log(especimes)
    return especimes
}

export const getEspecimeByZeladorByMatricula = async (zelador: string) => {

    console.log(`Resultado da pesquisa por espécimes que são cuidadas pelo zelador  de matrícula '${zelador}'`)
    
    const response = await sql`
    select especime.id, especime.nro_de_serie, especime.apelido, especime.id_especie, especime.id_jaula     from especime inner join jaula_zelador on especime.id_jaula = jaula_zelador.id_jaula where  jaula_zelador.id_zelador ilike ${zelador}
    `
    const especimes = response.map(item => getEspecime(item))

    console.log(especimes)
    return especimes
}