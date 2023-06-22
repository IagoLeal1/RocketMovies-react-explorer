import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { DeleteButton } from '../../components/DeleteButton';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Form, Texts, Tags, Buttons } from './styles';
import { Tag } from '../../components/Tag';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft/>
               voltar
               </Link>
            <h1>Novo Filme</h1>
          </header>

        <Texts>
          <Input placeholder="Título"/>
          <Input placeholder="Sua nota (de 0 a 5)" name="rating"/>
        </Texts>
          <Textarea placeholder="Observações" />
          
        <Tags>
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react"/>
              <NoteItem isNew placeholder="Nova tag"/>
            </div>
          </Section>
        </Tags>
        
        <Buttons>
          <DeleteButton title="excluir filme" />
          <Button title="Salvar" />
        </Buttons>

        </Form>
      </main>
    </Container>
  )
}