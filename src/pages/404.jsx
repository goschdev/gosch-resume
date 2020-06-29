import React from 'react';

import { SEO } from '../components/SEO';

const NotFoundPage = () => (
  <>
    <SEO title="404: Página não encontrada" />
    <h1>Página não encontrada</h1>
    <p>
      Você só acessou uma rota que não existe. Tente uma rota sem parâmetros.
    </p>
  </>
);

export default NotFoundPage;
