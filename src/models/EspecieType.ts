export type Especie = {
    id?: number 
    nomeCientifico: string 
    nomePopular: string 
    habitat: string 
    familia: string 
    ordem: string 
}

export const getEspecie = (obj: any): Especie => {
    const {
        id,
        nome_cientifico,
        nome_popular,
        habitat,
        familia,
        ordem
    } = obj 

    const especie: Especie = {
        id,
        habitat,
        familia,
        ordem,
        nomeCientifico: nome_cientifico,
        nomePopular: nome_popular
    }

    return especie
}