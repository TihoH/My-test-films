import React from "react";
import clases from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={clases.footer}>
      <ul className={clases.list}>
        <li className={clases.item_list}>О компании</li>
        <li>
          <a href="">Вакансии</a>
        </li>
        <li>
          <a href="">Программа бета-тестирования</a>
        </li>
        <li>
          <a href="">О компании</a>
        </li>
        <li>
          <a href="">Размещение рекламы</a>
        </li>
        <li>
          <a href="">Пользовательское соглашение</a>
        </li>
        <li>
          <a href="">Политика конфиденциальности</a>
        </li>
        <li>
          <a href="">Комплаенс</a>
        </li>
      </ul>
      <ul className={clases.list}>
        <li className={clases.item_list}>Разделы</li>
        <li>
          <a href="">Мой Иви</a>
        </li>
        <li>
          <a href="">Что нового</a>
        </li>
        <li>
          <a href="">Комплаенс</a>
        </li>
        <li>
          <a href="">Фильмы</a>
        </li>
        <li>
          <a href="">Сериалы</a>
        </li>
        <li>
          <a href="">Мультфильмы</a>
        </li>
        <li>
          <a href="">Что посмотреть</a>
        </li>
        <li>
          <a href="">Активация сертификата</a>
        </li>
      </ul>
      <ul className={clases.list}>
        <li className={clases.item_list}>Служба поддержки</li>
        <li>
          <a href="">Мы всегда готовы вам помочь. Наши операторы онлайн 24/7</a>
        </li>
        <li>
            <a href=""> 
                <span>ask.ivi.ru</span>
                <span>Ответы на вопросы</span>
            </a>
        </li>
      </ul>
      <ul className={clases.list}>
        <li></li>
        <li>Смотрите фильмы, сериалы и мультфильмы без рекламы</li>
      </ul>
    </div>
  );
};

export default Footer;
