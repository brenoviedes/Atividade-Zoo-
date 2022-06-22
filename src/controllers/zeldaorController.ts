import sql from "../config/db"
import { getZelador } from "../models/ZeladorType"


export const getZeladorByEspecimeForEspeciesIdOrPopNameOrScientName = async (especie: string | number) => {

    console.log(`Rerultado da pesquisa por zeladores que cuidam de espécimes da espécie ${especie}`)

    const response = await sql`
        select zelador.matricula, zelador.nome, zelador.data_nascimento from zelador 
        inner join jaula_zelador on zelador.matricula = jaula_zelador.id_zelador 
        inner join especime on especime.id_jaula = jaula_zelador.id_jaula 
        inner join especie on especie.id = especime.id_especie where  especie.id = ${ typeof especie === 'string' ? -5 : especie} 
        or especie.nome_popular ilike ${typeof especie === 'string' ? '%' + especie + '%' : '0'} 
        or especie.nome_cientifico ilike ${typeof especie === 'string' ? '%' + especie + '%' : '0'} 
        group by zelador.matricula 
    `

    const zeladores = response.map(async item => getZelador(item))

    console.log(await Promise.all(zeladores))
    return await Promise.all(zeladores)
}
