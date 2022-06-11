import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../assets/tutorialAdmin/1.png"
import img2 from "../../assets/tutorialAdmin/2.png"
import img3 from "../../assets/tutorialAdmin/3.png"

const DefaultTutorialPageAdmin = () => {
    return ( <div className="container rounded border-secondary bg-light p-4 mt-5">
        <h2 className='text-center' >Como usar o sistema</h2>
        <p>Para estar <b>visualizando</b>, <b>alterando</b> ou <b>adicionando</b> novas informações, basta clicar em um dos botões de navegação que automaticamente ira abrir uma lista de propriedades que você pode estar tratando</p>
        <h4 className='text-center'>Exemplo</h4>
        <p className='text-center'>Acessar a página de filos.</p>

        
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Clique em Taxonomia</h3>
          <p>Ao clicar, irá abrir uma lista de propriedades para você estar acessando</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Clique em filo</h3>
          <p>Ao clicar em filo, irá abrir a página com os filos existentes, logo podendo editar, adicionar e excluir os mesmos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Pronto, você esta na página de filos</h3>
          <p>
            Agora é só estar editando, excluindo ou adicionando novos dados.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    </div>
    );
}
 
export default DefaultTutorialPageAdmin;