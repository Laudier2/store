/* eslint-disable eqeqeq */
import { useState } from "react";
import { useSelector } from "react-redux";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";
import { AiFillAlert } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { BsJournalText } from "react-icons/bs";
import { LuPackageSearch } from "react-icons/lu";
import Cart from "../cart/index";
import logosimples from "./images/LogoTop2.png";

// Styles
import {
  Container,
  Logo,
  Buttons,
  ContainerAMR,
  ContainerPRT,
  DivContainer,
} from "./styles";
import { SeartResult } from "./SeartResult";

export function Header() {
  const complite = "produtos";
  const [dados, setDados] = useState(complite);

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const products = useSelector((productSlace) => productSlace.products.items);
  const length = useSelector((state) => state.cart.cartItems.length);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  //console.log(category)

  const handleSearch = (e) => {
    e.preventDefault();

    const value = e.target.value;

    setDados(value.toLowerCase()); //Todas as letras minusculas
    //setDados(value.toUpperCase()) //Todas as letras maiusculas
    //setDados(value.replace(/^./, dados[0].toUpperCase()))
  };

  //const str = dados.toUpperCase()
  //Filtro de pesquisa do input
  const filterData = products.filter(
    (e) =>
      e.slug[0] == dados ||
      e.slug[1] == dados ||
      e.slug[2] == dados ||
      e.slug[3] == dados ||
      e.slug[4] == dados ||
      e.slug[5] == dados ||
      e.slug[6] == dados ||
      e.slug[7] == dados ||
      e.slug[8] == dados ||
      e.slug[9] == dados ||
      e.slug[10] == dados ||
      e.slug[11] == dados ||
      e.slug[12] == dados ||
      e.slug[13] == dados ||
      e.slug[14] == dados ||
      e.slug[15] == dados ||
      e.slug[16] == dados ||
      e.slug[17] == dados ||
      e.slug[18] == dados ||
      e.slug[19] == dados ||
      e.slug[20] == dados ||
      e.slug[21] == dados ||
      e.slug[22] == dados
  );

  //const filterData = products.filter(e => e.slug[0] == dados)
  //const filterData = products.filter(e => e.slug == "Vestido")

  return (
    <>
      <ContainerAMR>
        <Logo>
          <a href="/">
            <img src={logosimples} alt="img" className="img3" />
            OnShops
          </a>
        </Logo>
        <a href="/">
          <AiFillAlert className="mb-2 h4" /> SUPER OFERTAS - OnShops tem de
          tudo
        </a>
      </ContainerAMR>

      <Container>
        <input
          type="search"
          name="test"
          id="test"
          placeholder="Pesquisar"
          onChange={(e) => handleSearch(e)}
        />
        <DivContainer>
          <div>{filterData ? <SeartResult data={filterData} /> : ""}</div>
        </DivContainer>

        <Buttons>
          <div onClick={handleCartClick}>
            <b className="bg">{length}</b>
            {length > 0 ? (
              <SlBasketLoaded style={{ fontSize: 30, marginLeft: "-2px" }} />
            ) : (
              <SlBasket style={{ fontSize: 30 }} />
            )}
          </div>
        </Buttons>
        <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
      </Container>
      <ContainerPRT>
        <ul>
          <li>
            <a
              href="https://wa.me/5575998172448?text=Ol%C3%A1%20tudo%20bem%2C%20gostaria%20de%20saber%20mais%20sobre%20alguns%20produtos%20da%20Loja%3F"
              target="blank"
            >
              <AiOutlineWhatsApp className="text-white h5 m-1 mb-2 p" />
              Contato
            </a>
          </li>
          <li>
            <a
              href="https://rastreamento.correios.com.br/app/index.php"
              target="blank"
            >
              <BsTruck className="text-white h5 m-1 mb-2 p" />
              Rastreio
            </a>
          </li>
          <li>
            <a href="/politicatrocadevolucao" target="blank">
              <LuPackageSearch className="text-white h5 m-1 mb-2 p" />
              Devolução
            </a>
          </li>
          <li>
            <a href="/descpage">
              <AiFillAlert className="text-white h5 m-1 mb-2 p" />
              Novidade
            </a>
          </li>
          <li>
            <a href="/politica" target="blank">
              <BsJournalText className="text-white h5 m-1 mb-2 p" />
              Politica
            </a>
          </li>
          <li>
            <a href="/meuproduto" target="blank">
              <LuPackageSearch className="text-white h5 m-1 mb-2 p" />
              MeusPedido
            </a>
          </li>
        </ul>
      </ContainerPRT>
    </>
  );
}