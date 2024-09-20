/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
//import { useHistory } from 'react-router-dom'
//import ReactLoading from 'react-loading';
//import { useSelector } from 'react-redux';
import { ProductProd, ContainerVerMais, TitleProduct } from "./products";
import { FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../header";
import SlidsProducts from "../slids/SlidsProducts";
import { SlidsMenu } from "../slids/SlidsMenu";
import Footer from "../footer/footer";
import { SlidsListProducts } from "../slids/SlidsListProducts";
//import { SlidsListProductsRevert } from "../slids/SlidsListProductsRevert";
//import { urlNova } from '../../redux/cart/cart';
import { useSelector } from "react-redux";
import { ProductsLoading } from "./ProductsLoading";
import imgCopy from "./images/Decontos.gif";
import "./styles.css";
import api from "../../api/api";

export const Products = () => {
  useEffect(() => {
    window.scroll({
      top: 100,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const req = await api.get("/category");
      const res = await req.data;

      setData(res);
    })();
  }, []);

  console.log(data);
  //const products = useSelector(productSlace => productSlace.products.items)

  function LocalSto(e) {
    localStorage.removeItem("id");
    localStorage.removeItem("bar_code");
    localStorage.removeItem("categoryId");

    const dados = JSON.stringify(e);
    const id = JSON.parse(dados);
    localStorage.setItem("id", id.id);
    localStorage.setItem("categoryId", e.id);
    localStorage.setItem("bar_code", e.bar_code);

    //dispatch(addDecription(e))

    //console.log(dados)

    scrollToTop();
  }

  // Aqui estamos fazenso as requisição na API REstful com o axio,
  //e recebendo os dados atraves do useState para poder manipula os estados//

  const [vernais, setVermais] = useState(0);
  const [vernais2, setVermais2] = useState(0);

  //chamada api via redux e axios
  const categorys = useSelector((productSlace) => productSlace.categorys);
  const tsLoading = [categorys];
  const listCategory = tsLoading.map((res) => res.items);

  const listCategorys = [listCategory];

  //console.log(categorys, "teste") 790e0e23-e3ec-4084-b61d-986aa062e8c6

  //Filtragem de categorias por id
  const filterCategoryBlusaFeminina = listCategorys[0]?.filter(
    (categ) => categ.id == "93158fac-7da5-4502-ab51-fd88b147fba7"
  );
  const dataBlusaFeminina = filterCategoryBlusaFeminina.map(
    (res) => res.products_categories
  );
  const BlusaFeminina = dataBlusaFeminina.map((res) => res);

  let BlusaFemininas = [BlusaFeminina];

  //console.log(BlusaFeminina);

  const filterCategoryBolsaFeminina = listCategorys[0]?.filter(
    (categ) => categ.id == "ecd13019-463a-4966-a9ce-52b50bec3448"
  );
  const dataBolsaFeminina = filterCategoryBolsaFeminina.map(
    (res) => res.products_categories
  );
  const BolsaFeminina = dataBolsaFeminina.map((res) => res);

  const filterCategoryCalcados = listCategorys[0]?.filter(
    (categ) => categ.id == "e3dbb7aa-d442-4721-ac17-18c61e895da8"
  );
  const dataCalcados = filterCategoryCalcados.map(
    (res) => res.products_categories
  );
  const Calcados = dataCalcados.map((res) => res);

  const filterCategoryVestido = listCategorys[0]?.filter(
    (categ) => categ.id == "0daf8636-e40d-42dd-ac1c-8df574068932"
  );
  const dataVestido = filterCategoryVestido.map(
    (res) => res.products_categories
  );
  const Vestido = dataVestido.map((res) => res);

  const filterCategoryConjuntoFeminino = listCategorys[0]?.filter(
    (categ) => categ.id == "89669525-dace-4256-a783-9ad59cd03622"
  );
  const dataConjuntoFeminino = filterCategoryConjuntoFeminino.map(
    (res) => res.products_categories
  );
  const ConjuntoFeminino = dataConjuntoFeminino.map((res) => res);

  const filterCategorySaia = listCategorys[0]?.filter(
    (categ) => categ.id == "a8990632-bace-4550-b722-6bae4fd37b02"
  );
  const dataSaia = filterCategorySaia.map((res) => res.products_categories);
  const Saia = dataSaia.map((res) => res);

  const filterCategoryEletronico = listCategorys[0]?.filter(
    (categ) => categ.id == "a9ea721a-f1f0-4fd0-b8ea-402430da8f9d"
  );
  const dataEletronico = filterCategoryEletronico.map(
    (res) => res.products_categories
  );
  const Eletronico = dataEletronico.map((res) => res);

  const filterCategoryBody = listCategorys[0]?.filter(
    (categ) => categ.id == "faa46edc-e25d-49e6-9054-6a47dde483d4"
  );
  const dataBody = filterCategoryBody.map((res) => res.products_categories);
  const Body = dataBody.map((res) => res);

  const filterCategoryEstetica = listCategorys[0]?.filter(
    (categ) => categ.id == "0d45c7cc-493f-481f-8b26-d5294fe1601c"
  );
  const dataEstetica = filterCategoryEstetica.map(
    (res) => res.products_categories
  );
  const Estetica = dataEstetica.map((res) => res);

  const filterCategoryMacaquinho = listCategorys[0]?.filter(
    (categ) => categ.id == "389354f6-0fbe-4ff3-8fd7-1b56e68db756"
  );
  const dataMacaquinho = filterCategoryMacaquinho.map(
    (res) => res.products_categories
  );
  const Macaquinho = dataMacaquinho.map((res) => res);

  const filterCategoryIntimo = listCategorys[0]?.filter(
    (categ) => categ.id == "3c83dc7a-b3f1-42d9-8098-90763370e84c"
  );
  const dataIntimo = filterCategoryIntimo.map((res) => res.products_categories);
  const Intimo = dataIntimo.map((res) => res);

  const filterCategoryAcessorio = listCategorys[0]?.filter(
    (categ) => categ.id == "69553e36-9e1d-4807-b089-470725b510f6"
  );

  let filterCategoryAcessorios = [filterCategoryAcessorio];

  const dataAcessorio = filterCategoryAcessorios[0]?.map(
    (res) => res.products_categories
  );

  let dataAcessorios = [dataAcessorio];

  const Acessorio = dataAcessorios.map((res) => res);

  //console.log(Vestido[0][2])

  const nameCategory = "Calça Feminina";
  const nameCategory1 = "Conjunto Feminina";
  //const nameCategory2 = "Calça Masculina";
  //const nameCategory3 = "Conjunto Masculino"

  return (
    <>
      <Header />
      <SlidsProducts />
      {<SlidsMenu />}
      {filterCategoryBolsaFeminina == "" ? (
        <ProductsLoading />
      ) : (
        <div>
          <SlidsListProducts />
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryBlusaFeminina[0]?.name == "Blusas"
                ? nameCategory
                : filterCategoryBlusaFeminina[0]?.name}
            </h2>
            <hr />
          </TitleProduct>
          <ProductProd>
            <section>
              {BlusaFemininas.map((res) =>
                res.map((req) => {
                  //localStorage.removeItem("id")
                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc"} onClick={() => LocalSto(req.products)}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h1 className="oldPricereal"> R$ {novo_price},00</h1>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryCalcados == ""
                ? ""
                : filterCategoryCalcados[0]?.name}
            </h2>
            <hr />
          </TitleProduct>
          <ProductProd>
            <section>
              {Calcados.map((res) =>
                res.map((req) => {
                  //console.log(filterCategoryVestido)

                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc"} onClick={() => LocalSto(req.products)}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryVestido == ""
                ? ""
                : filterCategoryVestido[0]?.name}
            </h2>
            <hr />
          </TitleProduct>
          <ProductProd>
            <section>
              {Vestido.map((res) =>
                res.map((req) => {
                  //console.log(filterCategoryVestido)

                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc"} onClick={() => LocalSto(req.products)}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryConjuntoFeminino[0]?.name == "Conjunto F"
                ? nameCategory1
                : filterCategoryConjuntoFeminino[0]?.name}
            </h2>
            <hr />
          </TitleProduct>

          <ProductProd>
            <section>
              {ConjuntoFeminino.map((res) =>
                res.map((req) => {
                  //console.log(filterCategoryVestido)

                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc"} onClick={() => LocalSto(req.products)}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategorySaia == "" ? "" : filterCategorySaia[0]?.name}
            </h2>
            <hr />
          </TitleProduct>

          <ProductProd>
            <section>
              {Saia.map((res) =>
                res.map((req) => {
                  //console.log(filterCategoryVestido)

                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc"} onClick={() => LocalSto(req.products)}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>

          <br />
          <br />
          <TitleProduct>
            <h2 className="titleProduct">Você tambem pode gostar</h2>
            <hr />
          </TitleProduct>
          <>
            <a href="/vestido">
              <img src={imgCopy} alt="img" className="imgCopy" />
            </a>
          </>
          {/* <SlidsListProductsRevert />*/}
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryBody == "" ? "" : filterCategoryBody[0]?.name}
            </h2>
            <hr />
          </TitleProduct>
          <ProductProd>
            <section>
              {Body.map((res) =>
                res.map((req) => {
                  //console.log(filterCategoryVestido)

                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc"} onClick={() => LocalSto(req.products)}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryEstetica == ""
                ? ""
                : filterCategoryEstetica[0]?.name}
            </h2>
            <hr />
          </TitleProduct>

          <ProductProd>
            <section>
              {Estetica.map((res) =>
                res.map((req) => {
                  //console.log(filterCategoryVestido)

                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc"} onClick={() => LocalSto(req.products)}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>
          <TitleProduct>
            {Intimo == "" ? (
              ""
            ) : (
              <>
                <h2 className="titleProduct">
                  {filterCategoryMacaquinho == ""
                    ? ""
                    : filterCategoryMacaquinho[0]?.name}
                </h2>
                <hr />
              </>
            )}
          </TitleProduct>
          {Intimo == "" ? (
            ""
          ) : (
            <ProductProd>
              <section>
                {Macaquinho.map((res) =>
                  res.map((req) => {
                    //console.log(filterCategoryVestido)

                    const { id, name, image, price } = req.products;

                    let percentual = 0.25;
                    let aumento = price * percentual;
                    let novo_price = price - aumento;

                    return (
                      <Link to={"/desc"} onClick={() => LocalSto(req.products)}>
                        <div key={id}>
                          <img src={image[0]} alt="img" />
                          <h5>{name}</h5>
                          <b className="frete">Frete Gratis</b>
                          <img src="card.jpg" alt="img" className="cartImg" />
                          <span>
                            <p className="p">
                              <FaCreditCard className="cartao" /> Em até 12x sem
                              juros
                            </p>
                          </span>
                          <h3 className="oldPrice">R${price},00 </h3>
                          <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                        </div>
                      </Link>
                    );
                  })
                )}
              </section>
            </ProductProd>
          )}
          <TitleProduct>
            {Intimo == "" ? (
              ""
            ) : (
              <>
                <h2 className="titleProduct">
                  {filterCategoryIntimo == ""
                    ? ""
                    : filterCategoryIntimo[0]?.name}
                </h2>
                <hr />
              </>
            )}
          </TitleProduct>
          <ContainerVerMais>
            {vernais === 0 ? (
              <button className="vermais" onClick={() => setVermais(1)}>
                Ver mais
              </button>
            ) : (
              <>
                <TitleProduct>
                  <h2 className="titleProduct">
                    {filterCategoryEletronico == ""
                      ? ""
                      : filterCategoryEletronico[0]?.name}
                  </h2>
                  <hr />
                </TitleProduct>

                <ProductProd>
                  <section>
                    {Eletronico.map((res) =>
                      res.map((req) => {
                        //console.log(filterCategoryVestido)

                        const { id, name, image, price } = req.products;

                        let percentual = 0.25;
                        let aumento = price * percentual;
                        let novo_price = price - aumento;

                        return (
                          <Link
                            to={"/desc"}
                            onClick={() => LocalSto(req.products)}
                          >
                            <div key={id}>
                              <img src={image[0]} alt="img" />
                              <h5>{name}</h5>
                              <b className="frete">Frete Gratis</b>
                              <img
                                src="card.jpg"
                                alt="img"
                                className="cartImg"
                              />
                              <span>
                                <p className="p">
                                  <FaCreditCard className="cartao" /> Em até 12x
                                  sem juros
                                </p>
                              </span>
                              <h3 className="oldPrice">R${price},00 </h3>
                              <h4 className="oldPricereal">
                                {" "}
                                R$ {novo_price},00
                              </h4>
                            </div>
                          </Link>
                        );
                      })
                    )}
                  </section>
                </ProductProd>
                {Intimo == "" ? (
                  ""
                ) : (
                  <ProductProd>
                    <section>
                      {BolsaFeminina.map((res) =>
                        res.map((req) => {
                          //console.log(filterCategoryVestido)

                          const { id, name, image, price } = req.products;

                          let percentual = 0.25;
                          let aumento = price * percentual;
                          let novo_price = price - aumento;

                          return (
                            <Link
                              to={"/desc"}
                              onClick={() => LocalSto(req.products)}
                            >
                              <div key={id}>
                                <img src={image[0]} alt="img" />
                                <h5>{name}</h5>
                                <b className="frete">Frete Gratis</b>
                                <img
                                  src="card.jpg"
                                  alt="img"
                                  className="cartImg"
                                />
                                <span>
                                  <p className="p">
                                    <FaCreditCard className="cartao" /> Em até
                                    12x sem juros
                                  </p>
                                </span>
                                <h3 className="oldPrice">R${price},00 </h3>
                                <h4 className="oldPricereal">
                                  {" "}
                                  R$ {novo_price},00
                                </h4>
                              </div>
                            </Link>
                          );
                        })
                      )}
                    </section>
                  </ProductProd>
                )}
                <TitleProduct>
                  {Intimo == "" ? (
                    ""
                  ) : (
                    <>
                      <h2 className="titleProduct">
                        {filterCategoryAcessorio == ""
                          ? ""
                          : filterCategoryAcessorio[0]?.name}
                      </h2>
                      <hr />
                    </>
                  )}
                </TitleProduct>

                {vernais2 === 0 ? (
                  <button className="vermais" onClick={() => setVermais2(1)}>
                    Ver mais
                  </button>
                ) : (
                  <>
                    {Intimo == "" ? (
                      ""
                    ) : (
                      <ProductProd>
                        <section>
                          {Intimo.map((res) =>
                            res.map((req) => {
                              //console.log(filterCategoryVestido)

                              const { id, name, image, price } = req.products;

                              let percentual = 0.25;
                              let aumento = price * percentual;
                              let novo_price = price - aumento;

                              return (
                                <Link
                                  to={"/desc"}
                                  onClick={() => LocalSto(req.products)}
                                >
                                  <div key={id}>
                                    <img src={image[0]} alt="img" />
                                    <h5>{name}</h5>
                                    <b className="frete">Frete Gratis</b>
                                    <img
                                      src="card.jpg"
                                      alt="img"
                                      className="cartImg"
                                    />
                                    <span>
                                      <p className="p">
                                        <FaCreditCard className="cartao" /> Em
                                        até 12x sem juros
                                      </p>
                                    </span>
                                    <h3 className="oldPrice">R${price},00 </h3>
                                    <h4 className="oldPricereal">
                                      {" "}
                                      R$ {novo_price},00
                                    </h4>
                                  </div>
                                </Link>
                              );
                            })
                          )}
                        </section>
                      </ProductProd>
                    )}
                    }
                    <TitleProduct>
                      {Intimo == "" ? (
                        ""
                      ) : (
                        <>
                          <h2 className="titleProduct">
                            {filterCategoryIntimo == ""
                              ? ""
                              : filterCategoryIntimo[0]?.name}
                          </h2>
                          <hr />
                        </>
                      )}
                    </TitleProduct>
                    <>
                      {Intimo == "" ? (
                        ""
                      ) : (
                        <ProductProd>
                          <section>
                            {Acessorio.map((res) =>
                              res.map((req) => {
                                //console.log(filterCategoryVestido)

                                const { id, name, image, price } = req.products;

                                let percentual = 0.25;
                                let aumento = price * percentual;
                                let novo_price = price - aumento;

                                return (
                                  <Link
                                    to={"/desc"}
                                    onClick={() => LocalSto(req.products)}
                                  >
                                    <div key={id}>
                                      <img src={image[0]} alt="img" />
                                      <h5>{name}</h5>
                                      <b className="frete">Frete Gratis</b>
                                      <img
                                        src="card.jpg"
                                        alt="img"
                                        className="cartImg"
                                      />
                                      <span>
                                        <p className="p">
                                          <FaCreditCard className="cartao" /> Em
                                          até 12x sem juros
                                        </p>
                                      </span>
                                      <h3 className="oldPrice">
                                        R${price},00{" "}
                                      </h3>
                                      <h4 className="oldPricereal">
                                        {" "}
                                        R$ {novo_price},00
                                      </h4>
                                    </div>
                                  </Link>
                                );
                              })
                            )}
                          </section>
                        </ProductProd>
                      )}
                    </>
                  </>
                )}
              </>
            )}
          </ContainerVerMais>
        </div>
      )}
      <Footer />
    </>
  );
};
