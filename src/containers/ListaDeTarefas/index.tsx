import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar  TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade:enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
]

const ListaDeTarefas = () => (
    <Container>        
        <p>
            2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
        </p>
        <ul>
          {tarefas.map((t) => (
            <li key={t.titulo}>
              <Tarefa 
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

export default ListaDeTarefas