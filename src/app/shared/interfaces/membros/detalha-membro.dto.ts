import { IListaCargoDto } from "../cargos/lista-cargos.dto";

export interface IDetalhaMembroDto {
    idMembro: string;
    nome: string;
    dataNascimento: string;
    endereco: string;
    cpf: string;
    
    cargo: IListaCargoDto;
    

}