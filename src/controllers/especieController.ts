import sql from "../config/db"
import { getEspecie } from "../models/EspecieType";

export const getEspecieByHabitat = async (habitat: string) => {

    console.log(`Resultado da pesquisa por espécies de animais que vivem no habitat '${habitat}'`)

    const habitatSubString = '%' + habitat + '%'
    const response = await sql`
        select * from especie where habitat ilike ${habitatSubString}
    `

    const especies = response.map((item) => getEspecie(item));

    console.log(especies)
    return especies;
}

export const getEspecieByScientificName = async (scientificName: string) => {

    console.log(`Resultado da pesquisa por espécies de animais que possuem o nome científico '${scientificName}'`)

    const scientificNameSubString = '%' + scientificName+ '%'

    const response = await sql`
        select * from especie where nome_cientifico ilike ${scientificNameSubString}
    `

    const especies = response.map(item => getEspecie(item))

    console.log(especies)
    return especies
}