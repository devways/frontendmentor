import Head from 'next/head';
import { Fragment } from 'react';

import FourCardFeatureSectionComponent from '../../components/four-card-feature-section';

const FourCardFeatureSectionPage = () => (
  <Fragment>
    <Head>
      <title>Frontend Mentor | Four card feature section</title>
      <link rel="icon" src="/favicon.ico" />
    </Head>
    <FourCardFeatureSectionComponent />
  </Fragment>
);

export default FourCardFeatureSectionPage;