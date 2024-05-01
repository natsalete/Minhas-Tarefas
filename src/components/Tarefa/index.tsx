import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

import { remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ descricao, prioridade, status, titulo, id }: Props)  =>{
    const dispath = useDispatch()
    const [estaEditando, setEstaEditando] = useState(false)
    
    return (
        <S.Card>
            <S.Titulo>{titulo}</S.Titulo>
            <S.Tag parametro='prioridade' prioridade={prioridade}>{prioridade}</S.Tag>
            <S.Tag parametro='status' status={status}>{status}</S.Tag>
            <S.Descricao value={descricao} />
            <S.BarraAcoes>
                {estaEditando ? (
                    <>
                        <S.BotaoSalvar>Salvar</S.BotaoSalvar>
                        <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>Cancelar</S.BotaoCancelarRemover>
                    </>   
                ) : (
                    <>
                        <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
                        <S.BotaoCancelarRemover onClick={() => dispath(remover(id))}>Remover</S.BotaoCancelarRemover>
                    </>
                )}
            </S.BarraAcoes>
        </S.Card>
        )
}

export default Tarefa