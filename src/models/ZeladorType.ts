export type Zelador = {
    matricula: string 
    nome: string 
    dataNascimento: Date
}

export const getZelador = (obj: any): Zelador => {
    const {matricula, nome, data_nascimento} = obj


    const zelador: Zelador = {
        matricula,
        nome,
        dataNascimento: data_nascimento,
    }

    return zelador
}


