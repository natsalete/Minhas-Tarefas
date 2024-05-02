import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import FiltroCard from "../../components/FiltroCard"
import { RootReducer } from "../../store"
import { alterarTermo } from "../../store/reducers/filtro"

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { Botao, Campo } from '../../styles'

type Props = {
    mostrarFiltros: boolean
}

const BarraLateral = ({mostrarFiltros}: Props) => {
    const navegate = useNavigate()
    const dispath = useDispatch()
    const { termo } = useSelector((state: RootReducer) => state.filtro)
    
    return (
        <S.Aside>
        <div>
            {mostrarFiltros? (
                <>
                <Campo 
                    type="text"
                    placeholder="Busca"
                    value={termo}
                    onChange={evento => dispath(alterarTermo(evento.target.value))}
                />
                <S.Filtros>
                    <FiltroCard
                        valor={enums.Status.PENDENTE}
                        criterio= "status" legenda='pendentes' 
                    />
                    <FiltroCard
                        valor={enums.Status.CONCLUIDA}
                        criterio= "status" legenda='concluidas' 
                    />
                    <FiltroCard 
                        valor={enums.Prioridade.URGENTE}
                        criterio= "prioridade" legenda='urgentes' 
                    />
                    <FiltroCard
                        valor={enums.Prioridade.IMPORTANTE}
                        criterio= "prioridade" legenda='importantes' 
                        />
                    <FiltroCard
                        valor={enums.Prioridade.NORMAL}
                        criterio= "prioridade" legenda='normal' 
                        />
                    <FiltroCard criterio= "todas" legenda='todas'/>
                </S.Filtros>
                </>
            ) : (
                <Botao onClick={() => navegate('/')}>
                    Voltar a lista de tarefas
                </Botao>
            )}
        </div>
    </S.Aside>
    )
}

export default BarraLateral