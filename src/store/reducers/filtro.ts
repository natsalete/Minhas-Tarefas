import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type FiltroState = {
    termo: string
    criterio: 'prioridade' | 'status' | 'todas'
    valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
    termo: '',
    criterio: 'todas'
}

const filtroSlice = createSlice({
    name: 'filtro',
    initialState,
    reducers: {
        alterarTermo: (state, action: PayloadAction<string>) => {
            state.termo = action.payload
        }
    }
})

export const { alterarTermo } = filtroSlice.actions

export default filtroSlice.reducer