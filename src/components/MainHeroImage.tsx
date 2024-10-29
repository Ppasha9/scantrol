import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="z-0 lg:absolute">
      <img
        className="w-full object-cover lg:w-full lg:h-full"
        src={mainHero.img}
        alt="back"
      />
    </div>
  );
};

export default MainHeroImage;
