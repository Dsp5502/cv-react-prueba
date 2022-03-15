import React, { Component } from 'react';
import About_me from '../components/About_me';
import Contacto from '../components/Contacto';
import Educacion from '../components/Educacion';

import Titulo from '../components/Titulo';
import { $Sidebar } from '../styled/StyleComponents';

export default class Container extends Component {
  render() {
    return (
      <div>
        <Titulo />
        <About_me />
        <$Sidebar>
          <Contacto />
          <Educacion />
        </$Sidebar>
      </div>
    );
  }
}
