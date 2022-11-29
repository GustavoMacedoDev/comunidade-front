import { IIdCargoDto } from "../cargos/id-cargo.dto";

export interface ICadastraMembroDto {
    nome: string;
    cpf: string;
    endereco: string;
    dataNascimento: string;
    idCargo: any;
    email: string;
    telefone: string;
}