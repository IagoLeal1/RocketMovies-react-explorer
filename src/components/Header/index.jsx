import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Brand, Search } from './styles';
import { Input } from '../Input'

export function Header() {
  return (
    <Container>

      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile to="/profile">
        <img
          src="https://github.com/iagoleal1.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Iago Leal</strong>
        </div>
      </Profile>

    </Container>
  );
}
