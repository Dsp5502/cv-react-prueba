import React, { Component } from 'react';
import { $img, $titulo, $tituloNombre } from '../styled/StyleComponents';

export default class Titulo extends Component {
  render() {
    return (
      <$titulo>
        <$img
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1647295631/Foto_Perfil_AltaCalidad_dn4kwc.jpg'
          alt=''
        />
        <$tituloNombre>DAVID PUERTO GUERRERO</$tituloNombre>
      </$titulo>
    );
  }
}
