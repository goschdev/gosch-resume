import React from 'react';

import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { Contact } from '../components/Sections/Contact';
import { Links } from '../components/Sections/Links';
import { About } from '../components/Sections/About';
import { Technologies } from '../components/Sections/Technologies';
import { Experiences } from '../components/Sections/Experiences';
import { Courses } from '../components/Sections/Courses';
import { PageBreak } from '../visual/styles/PageBreak';

const IndexPage = () => (
  <>
    <SEO />
    <Layout>
      <Contact />
      <Links />
      <About />
      <Technologies />
      <PageBreak />
      <Experiences />
      <Courses />
    </Layout>
  </>
);

export default IndexPage;
