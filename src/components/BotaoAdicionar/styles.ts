import { Link } from 'react-router-dom'

import style from  'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = style(Link)`
    height: 64px;
    width: 64px;
    background-color: ${variaveis.verde};
    color: #FFF;
    position: fixed;
    bottom: 40px;
    right: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    text-decoration: none;
`
