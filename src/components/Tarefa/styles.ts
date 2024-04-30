import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type TagProps = {
    prioridade?: string
    status?: string
}

function retornaCorDeFundo(props: TagProps): string {
    if('status' in props){
        if (props.status === 'pendente') return variaveis.amarelo
        if (props.status === 'concluída') return variaveis.verde
    }else if ('prioridade' in props){
        if (props.prioridade === 'urgente') return variaveis.vermelho
        if (props.prioridade === 'importante') return variaveis.amarelo2
    }

    return '#CCC'
}

export const Card = styled.div`
    background-color: #FCFCFC;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 16px;
    margin-bottom: 32px;
    border-radius: 16px;
`

export const Titulo = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
    padding: 4px 8px;
    color: #FFF;
    font-weight: bold;
    font-size: 10px;
    background-color: ${(props) => retornaCorDeFundo(props)};
    border-radius: 8px;
    margin-right: 16px;
    display: inline-block;
`

export const Descricao = styled.textarea`
    color: #8B8B8B;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Roboto Mono'; monospace;
    display: block;
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
    resize: none;
    border: none;
    background-color: transparent;
`

export const BarraAcoes = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 16px;
`

export const Botao = styled.button`
    font-weight: bold;
    font-size: 12px;
    color: #FFF;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: #2F3640;
    border-radius: 8px;
    margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
    background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
    background-color: ${variaveis.vermelho};
`

