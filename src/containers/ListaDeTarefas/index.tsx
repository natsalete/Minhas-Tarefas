import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'


const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) =>  state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const flitraTarefas = () => {
    return itens.filter((item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0)
  }

  return(
    <Container>        
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
      </p>
      <ul>
        {flitraTarefas().map((t) => (
          <li key={t.titulo}>
            <Tarefa 
            id ={t.id}
            descricao={t.descricao} 
            titulo={t.titulo} 
            status={t.status} 
            prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
    

export default ListaDeTarefas