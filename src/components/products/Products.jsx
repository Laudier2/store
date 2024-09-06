/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
//import { useHistory } from 'react-router-dom'
//import ReactLoading from 'react-loading';
//import { useSelector } from 'react-redux';
import { ProductProd, ContainerVerMais } from "./products";
import { FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../header";
import SlidsProducts from "../slids/SlidsProducts";
import { SlidsMenu } from "../slids/SlidsMenu";
import Footer from "../footer/footer";
import { SlidsListProducts } from "../slids/SlidsListProducts";
import { SlidsListProductsRevert } from "../slids/SlidsListProductsRevert";
//import { urlNova } from '../../redux/cart/cart';
import { useSelector } from "react-redux";
import { ProductsLoading } from "./ProductsLoading";
//import { useDispatch } from 'react-redux';
//import { addDecription } from '../../redux/cart/cart';

/*const Example = () => (
    /*
    blank
    balls
    bars
    bubbles
    cubes
    cylon
    spin
    spinningBubbles
    spokes 
    */
/*<LoadingPage>
    <ReactLoading type='spokes' color='aqua' height={'100%'} width={'100%'} delay={'100'} />
  </LoadingPage>
);*/

//const product = []

export const Products = () => {
  //const dispatch = useDispatch()

  /*const handleUrlId = (e) => {
    dispatch(urlNova(e))
    //console.log(e)
  }*/

  //dispatch(addTm(dataTm))
  //dispatch(addCor(dataCor))

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

  //console.log(categorys, "teste")

  //Filtragem de categorias por id
  const filterCategoryBolsaFeminina = listCategory[0].filter(
    (categ) => categ.id == "d1f64724-e124-42c7-bf24-57a6c73262c5"
  );
  const dataBolsaFeminina = filterCategoryBolsaFeminina.map(
    (res) => res.products_categories
  );
  const BolsaFeminina = dataBolsaFeminina.map((res) => res);

  const filterCategoryCalcados = listCategory[0].filter(
    (categ) => categ.id == "e3dbb7aa-d442-4721-ac17-18c61e895da8"
  );
  const dataCalcados = filterCategoryCalcados.map(
    (res) => res.products_categories
  );
  const Calcados = dataCalcados.map((res) => res);

  const filterCategoryVestido = listCategory[0].filter(
    (categ) => categ.id == "0daf8636-e40d-42dd-ac1c-8df574068932"
  );
  const dataVestido = filterCategoryVestido.map(
    (res) => res.products_categories
  );
  const Vestido = dataVestido.map((res) => res);

  const filterCategoryConjuntoFeminino = listCategory[0].filter(
    (categ) => categ.id == "89669525-dace-4256-a783-9ad59cd03622"
  );
  const dataConjuntoFeminino = filterCategoryConjuntoFeminino.map(
    (res) => res.products_categories
  );
  const ConjuntoFeminino = dataConjuntoFeminino.map((res) => res);

  const filterCategorySaia = listCategory[0].filter(
    (categ) => categ.id == "a8990632-bace-4550-b722-6bae4fd37b02"
  );
  const dataSaia = filterCategorySaia.map((res) => res.products_categories);
  const Saia = dataSaia.map((res) => res);

  const filterCategoryBody = listCategory[0].filter(
    (categ) => categ.id == "faa46edc-e25d-49e6-9054-6a47dde483d4"
  );
  const dataBody = filterCategoryBody.map((res) => res.products_categories);
  const Body = dataBody.map((res) => res);

  //const filterCategoryEletronicos = listCategory[0].filter(categ => categ.id == "a9ea721a-f1f0-4fd0-b8ea-402430da8f9d" )
  //const dataEletronicos = filterCategoryEletronicos.map(res => res.products_categories)
  //const Eletronicos = dataEletronicos.map(res => res)

  const filterCategoryEstetica = listCategory[0].filter(
    (categ) => categ.id == "0d45c7cc-493f-481f-8b26-d5294fe1601c"
  );
  const dataEstetica = filterCategoryEstetica.map(
    (res) => res.products_categories
  );
  const Estetica = dataEstetica.map((res) => res);

  const filterCategoryMacaquinho = listCategory[0].filter(
    (categ) => categ.id == "389354f6-0fbe-4ff3-8fd7-1b56e68db756"
  );
  const dataMacaquinho = filterCategoryMacaquinho.map(
    (res) => res.products_categories
  );
  const Macaquinho = dataMacaquinho.map((res) => res);

  //const filterCategoryConjuntoMasculino = listCategory[0].filter(categ => categ.id == "f447aa30-1c84-4efd-b2e3-6fd0073df1ef" )
  //const dataConjuntoMasculino = filterCategoryConjuntoMasculino.map(res => res.products_categories)
  //const ConjuntoMasculino = dataConjuntoMasculino.map(res => res)

  const filterCategoryBolsaMasculina = listCategory[0].filter(
    (categ) => categ.id == "ecd13019-463a-4966-a9ce-52b50bec3448"
  );
  const dataBolsaMasculina = filterCategoryBolsaMasculina.map(
    (res) => res.products_categories
  );
  const BolsaMasculina = dataBolsaMasculina.map((res) => res);

  //const filterCategoryInformatica = listCategory[0].filter(categ => categ.id == "13d29bf9-49ae-4500-a12e-865cbece096c" )
  //const dataInformatica = filterCategoryInformatica.map(res => res.products_categories)
  //const Informatica = dataInformatica.map(res => res)

  //const filterCategorySmartphone = listCategory[0].filter(categ => categ.id == "eef260e6-4706-4a33-9ef6-caef4ac8ddbf" )
  //const dataSmartphone = filterCategorySmartphone.map(res => res.products_categories)
  //const Smartphone = dataSmartphone.map(res => res)

  const filterCategoryIntimo = listCategory[0].filter(
    (categ) => categ.id == "3c83dc7a-b3f1-42d9-8098-90763370e84c"
  );
  const dataIntimo = filterCategoryIntimo.map((res) => res.products_categories);
  const Intimo = dataIntimo.map((res) => res);

  //const filterCategoryRelogio = listCategory[0].filter(categ => categ.id == "0d4512b9-1ec8-4c7e-9ba9-f28b6240a46c" )
  //const dataRelogio = filterCategoryRelogio.map(res => res.products_categories)
  //const Relogio = dataRelogio.map(res => res)

  const filterCategoryAcessorio = listCategory[0].filter(
    (categ) => categ.id == "69553e36-9e1d-4807-b089-470725b510f6"
  );
  const dataAcessorio = filterCategoryAcessorio.map(
    (res) => res.products_categories
  );
  const Acessorio = dataAcessorio.map((res) => res);

  //console.log(Vestido[0][2])

  const nameCategory = "Calça Feminina";
  const nameCategory1 = "Conjunto Feminina";
  const nameCategory2 = "Calça Masculina";
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
          <ProductProd>
            <section>
              <h2 className="ml-3">
                {filterCategoryBolsaFeminina[0].name == "Bolsa"
                  ? nameCategory
                  : filterCategoryBolsaFeminina[0].name}
              </h2>

              {BolsaFeminina.map((res) =>
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
                        <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>
          <ProductProd>
            <section>
              <h2 className="ml-3">
                {filterCategoryCalcados == ""
                  ? ""
                  : filterCategoryCalcados[0].name}
              </h2>

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
          <ProductProd>
            <section>
              <h2 className="ml-3">
                {filterCategoryVestido == ""
                  ? ""
                  : filterCategoryVestido[0].name}
              </h2>

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

          <ProductProd>
            <section>
              <h2 className="ml-3">
                {filterCategoryConjuntoFeminino[0].name == "Conjunto F"
                  ? nameCategory1
                  : filterCategoryConjuntoFeminino[0].name}
              </h2>

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

          <ProductProd>
            <section>
              <h2 className="ml-3">
                {filterCategorySaia == "" ? "" : filterCategorySaia[0].name}
              </h2>

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
          <SlidsListProductsRevert />

          <ProductProd>
            <section>
              <h2 className="ml-3">
                {filterCategoryBody == "" ? "" : filterCategoryBody[0].name}
              </h2>

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

          <ProductProd>
            <section>
              <h2 className="ml-3">
                {filterCategoryEstetica == ""
                  ? ""
                  : filterCategoryEstetica[0].name}
              </h2>

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

          <ProductProd>
            <section>
              <h2 className="ml-3">
                {filterCategoryMacaquinho == ""
                  ? ""
                  : filterCategoryMacaquinho[0].name}
              </h2>

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
          <ContainerVerMais>
            {vernais === 0 ? (
              <button className="vermais" onClick={() => setVermais(1)}>
                Ver mais
              </button>
            ) : (
              <>
                <ProductProd>
                  <section>
                    <h2 className="ml-3">
                      {filterCategoryBolsaMasculina[0].name == "Calça M"
                        ? nameCategory2
                        : filterCategoryBolsaMasculina[0].name}
                    </h2>

                    {BolsaMasculina.map((res) =>
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

                {vernais2 === 0 ? (
                  <button className="vermais" onClick={() => setVermais2(1)}>
                    Ver mais
                  </button>
                ) : (
                  <>
                    <ProductProd>
                      <section>
                        <h2 className="ml-3">
                          {filterCategoryIntimo == ""
                            ? ""
                            : filterCategoryIntimo[0].name}
                        </h2>

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
                    <ProductProd>
                      <section>
                        <h2 className="ml-3">
                          {filterCategoryAcessorio == ""
                            ? ""
                            : filterCategoryAcessorio[0].name}
                        </h2>

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
