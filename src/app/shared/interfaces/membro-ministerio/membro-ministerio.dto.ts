import { IListaCargoDto } from "../cargos/lista-cargos.dto";
import { IListaMembrosDto } from "../membros/lista-membros.dto";
import { IListaMinisterioDto } from "../ministerio/lista-ministerios.dto";

export interface IListaMembrosPorMinisterioDto {
    idMembroMinisterio: string;
    dataEntrada: string;
    responsavel: number;
    membro: IListaMembrosDto;
    ministerio: IListaMinisterioDto;
    cargo: IListaCargoDto;
}