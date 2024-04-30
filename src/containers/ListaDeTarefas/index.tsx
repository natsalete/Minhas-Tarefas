import Tarefa from '../../components/Tarefa'

import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar  TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: 'importante',
    status: 'pendente'
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