import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Form from './Form';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from '../common/AlertTemplate';

export class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <section className="fon" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="jumbotron text-center">
                  <img
                    className="img-fluid d-block mx-auto mb-5"
                    src="/img/logo.png"
                    alt="Magmer"
                  />

                  <h2>О нас</h2>
                  <p className="lead">
                    Надоели скучные праздники, которые заключаются только в
                    поедании калорийных блюд? Хотите действительно ярких
                    впечатлений и мероприятие, которое запомнится каждому
                    присутствующему? Ломаете голову, какими развлечениями
                    удивить гостей? Все вопросы отойдут на второй план если
                    обратитесь в наш магазин мероприятий! Мы поможем воплотить
                    ваши мечты и организовать действительно увлекательные,
                    креативные развлечения! Хороший праздник вызывает массу
                    неповторимых эмоций и позволяет наслаждаться общением с
                    другими людьми. Даже серьёзные проблемы, существующие в
                    обыденной жизни, отходят на второй план в атмосфере
                    праздничного, радостного настроения! Желая произвести новое,
                    оригинальное наполнение праздника, спешите выбрать
                    интересный аттракцион в компании Magmer.
                  </p>
                  <h3>Преимущества Magmer</h3>
                  <p className="lead">
                    Воспользовавшись услугами магазина мероприятий, вы
                    ограждаете себя от многих проблем, связанных с покупкой,
                    проверкой, а главное, грамотным хранением приобретённого
                    товара. Ведь многие аттракционы имеют приличные габариты и
                    требуют выполнения определённых правил, чтобы оставаться
                    исправными и в надлежащем виде. Сохранность требует
                    специального помещения и времени для обслуживания. Мы сдаём
                    в аренду аттракционы как для детских, так и взрослых
                    праздников. Просмотрев каталог и пообщавшись с персоналом,
                    вы сможете определиться с наиболее подходящим товаром.
                  </p>

                  <Link
                    className="btn btn-outline-primary btn-lg btn-block mt-5"
                    to="/catalog"
                  >
                    <i className="fas fa-th-list fa-lg mr-3" />
                    <b>Перейти в каталог</b>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fon-footer" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="jumbotron">
                  <h2 className="text-center">Свяжитесь с нами</h2>
                  <br />
                  <AlertProvider
                    template={AlertTemplate}
                    timeout={3000}
                    position="top center"
                  >
                    <Form />
                  </AlertProvider>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Magmer {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Landing;
