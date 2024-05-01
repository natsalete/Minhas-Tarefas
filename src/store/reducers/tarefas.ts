import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Tarefa from "../../models/Tarefa";
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
    itens: Tarefa[]
}

const initialState: TarefasState = {
    itens: [
        {
            id: 1,
            descricao: 'Estudar JavaScript revendo o exercício do módulo 7',
            prioridade: enums.Prioridade.NORMAL,
            status: enums.Status.PENDENTE,
            titulo: 'Estudar TypeScript'
        },
        {
            id: 2,
            descricao: 'Estudar material de apoio',
            prioridade: enums.Prioridade.NORMAL,
            status: enums.Status.PENDENTE,
            titulo: 'Estudar TypeScript'
        },
        {
            id: 3,
            descricao: 'Praticar a construção de uma landing page',
            prioridade: enums.Prioridade.IMPORTANTE,
            status: enums.Status.PENDENTE,
            titulo: 'Estudar Bootstrap'
        },
    ]
}

const tarefasSlice = createSlice({
    name: 'tarefas',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter(tarefa => tarefa.id !== action.payload)
        }
    }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer