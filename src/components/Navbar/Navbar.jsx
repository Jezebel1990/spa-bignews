import logo from "../../components/images/LogoBN.png";
import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled";

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise um título" />
        </InputSpace>

        <ImageLogo src={logo} alt="Logo do Breaking News" />

        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
