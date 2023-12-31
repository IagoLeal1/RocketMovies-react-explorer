import { Container } from './styles'
import { Tag } from '../Tag'
import { FiStar } from 'react-icons/fi'

export function Note({ data, ...rest }){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div>
        {[...Array(5)].map(star => {
          return <FiStar size={12}/>;
        })}
      </div>
      <p>{data.description}</p>
      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tag  key={tag.id} title={tag.name}/>)
          }
        </footer>
      }
    </Container>
  )
}