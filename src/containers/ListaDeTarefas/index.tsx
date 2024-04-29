import Tarefa from '../../components/Tarefa'

import { Container } from './style'

const ListaDeTarefas = () => (
    <Container>        
        <p>
            2 tarefas marcadas como: "categoria" e "termo"
        </p>
        <ul>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
        </ul>
        </Container>

)

export default ListaDeTarefas