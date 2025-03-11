import React from "react";
import { FormattedMessage, FormattedDate, FormattedNumber } from "react-intl";

const Job = (props) => {
  const { offer, locale, index } = props;

  // Selecciona el sufijo adecuado para el salario según el idioma y el valor
  let salarySuffix;
  if (locale === "es") {
    salarySuffix = offer.salary === 1 ? (
      <FormattedMessage id="millionSingular" />
    ) : (
      <FormattedMessage id="millionPlural" />
    );
  } else {
    salarySuffix = <FormattedMessage id="million" />;
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{offer.name}</td>
      <td>{offer.company}</td>
      <td>
        {offer.salary} {salarySuffix}
      </td>
      <td>{offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={offer.visits} />
      </td>
    </tr>
  );
};

export default Job;
