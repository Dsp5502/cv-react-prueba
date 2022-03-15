import React, { Component } from 'react';
import { $DatEducacion, $EducacionStilos } from '../styled/StyleComponents';

export default class Educacion extends Component {
  render() {
    return (
      <$EducacionStilos>
        <$DatEducacion>EDUCACIÓN</$DatEducacion>
        <ul>
          <li>
            <p>Curso de Fundamentos de programación en aplicaciones web</p>
            <p>
              <strong>UNIVERSIDAD DE ANTIOQUIA</strong>
              <small>Febrero 2021 – En curso</small>
            </p>
          </li>
          <li>
            <p>Técnico de Fotografía</p>
            <p>
              <strong>ESCUELA DE FOTOGRAFIA MOTIVARTE</strong>
              <small>Marzo 2011 – Diciembre 2014</small>
            </p>
          </li>
          <li>
            <p>Bachillerato</p>
            <p>
              <strong>Colegio parroquial San Luis Gonzaga</strong>
              <small>Marzo 2004 - Diciembre 2009</small>
            </p>
          </li>
        </ul>
      </$EducacionStilos>
    );
  }
}
