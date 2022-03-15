import React, { Component } from 'react';
import {
  $DatosP,
  $DatosParrafo,
  $tituloDatos,
} from '../styled/StyleComponents';

export default class Contacto extends Component {
  render() {
    return (
      <$DatosP>
        <$tituloDatos>
          <strong> DATOS PERSONALES Y CONTACTO</strong>
        </$tituloDatos>
        <$DatosParrafo>
          <strong>Cc:</strong> 1 032 444 437
        </$DatosParrafo>
        <$DatosParrafo>
          <strong>TELÉFONO:</strong>
          304 6343387
        </$DatosParrafo>
        <$DatosParrafo>
          Dirección: Carrera 13 #21-93 Chía - Cundinamarca
        </$DatosParrafo>
        <$DatosParrafo>CORREO ELECTRÓNICO: dsp5502@gmail.com</$DatosParrafo>
      </$DatosP>
    );
  }
}
