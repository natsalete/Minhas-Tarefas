import { useDispatch, useSelector } from "react-redux"
import FiltroCard from "../../components/FiltroCard"

import * as S from './styles'
import { RootReducer } from "../../store"
import { alterarTermo } from "../../store/reducers/filtro"

const BarraLateral = () => {
    const dispath = useDispatch()
    const { termo } = useSelector((state: RootReducer) => state.filtro)
    return (
        <S.Aside>
        <div>
            <S.Campo 
                type="text"
                placeholder="Busca"
                value={termo}
                onChange={evento => dispath(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
                <FiltroCard legenda='pendentes' contador={1}/>
                <FiltroCard legenda='concluidas' contador={2} />
                <FiltroCard legenda='urgentes' contador={3} />
                <FiltroCard legenda='importantes' contador={4}/>
                <FiltroCard legenda='normal' contador={5}/>
                <FiltroCard legenda='todas' contador={10} ativo/>
            </S.Filtros>
        </div>
    </S.Aside>
    )
}

export default BarraLateral