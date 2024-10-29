import React from 'react';

import About from '../components/About';
import Accessories from '../components/Accessories';
import DetailedInformation from '../components/DetailedInformation';
import Header from '../components/Header';
import MainHero from '../components/MainHero';

const App = () => {
  return (
    <div
      className={`grid gap-y-16 overflow-hidden`}
      style={{
        backgroundImage: `url("/assets/images/back.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: '#aa998d',
      }}
    >
      <div className={`relative`}>
        <div className="max-w-full mx-auto">
          <div
            className={`relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
      </div>
      <DetailedInformation />
      <Accessories />
      <About />
    </div>
  );
};

export default App;
