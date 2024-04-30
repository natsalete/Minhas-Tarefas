import { useState } from 'react'
import * as S from './styles'

type Props = {
    titulo: string
    prioridade: string
    status: string
    descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: Props)  =>{
    const [estaEditando, setEstaEditando] = useState(false)
    
    return (
        <S.Card>
            <S.Titulo>{titulo}</S.Titulo>
            <S.Tag>{prioridade}</S.Tag>
            <S.Tag>{status}</S.Tag>
            <S.Descricao value={descricao} />
            <S.BarraAcoes>
                {estaEditando ? (
                    <>
                        <S.Botao>Salvar</S.Botao>
                        <S.Botao onClick={() => setEstaEditando(false)}>Cancelar</S.Botao>
                    </>   
                ) : (
                    <>
                        <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
                        <S.Botao>Remover</S.Botao>
                    </>
                )}
            </S.BarraAcoes>
        </S.Card>
        )
}

export default Tarefa