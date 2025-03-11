// JobsList.js
import React, { useState } from "react";
import Job from "./job";
import { IntlProvider, FormattedMessage } from "react-intl";
import messagesEn from "../locales/en.json";
import messagesEs from "../locales/es.json";

const messages = {
  en: messagesEn,
  es: messagesEs,
};

const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      visits: 1250,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      visits: 50200,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      visits: 3050,
    },
  ]);

  // Detecta el idioma del navegador: 'es' para español, 'en' para inglés.
  // Para pruebas, puedes reemplazar navigator.language por 'es' o 'en'

  const locale = navigator.language.startsWith("es") ? "es" : "en";
  
  // const locale = 'es';
  // const locale = 'en';

  // Según el requerimiento: light para español y dark para inglés.
  const headerClass = locale === "es" ? "table-light" : "table-dark";

  // Debug: console.log(locale, headerClass);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <table className="table">
          <thead className={headerClass}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <FormattedMessage id="position" />
              </th>
              <th scope="col">
                <FormattedMessage id="company" />
              </th>
              <th scope="col">
                <FormattedMessage id="salary" />
              </th>
              <th scope="col">
                <FormattedMessage id="city" />
              </th>
              <th scope="col">
                <FormattedMessage id="date" />
              </th>
              <th scope="col">
                <FormattedMessage id="visits" />
              </th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer, index) => (
              <Job key={offer.id} offer={offer} locale={locale} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </IntlProvider>
  );
};

export default JobsList;
