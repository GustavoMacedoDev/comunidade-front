import { IListaCargo } from "../cargos/lista-cargo.dto";

export interface IListaMembrosDto {
    idMembro: string;
    nome: string;
    dataNascimento: string;
    endereco: string;
    cpf: string;
    
    cargo: IListaCargo;

}