import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="ml-60 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <table>
          <tbody>
            <tr>
              <td>
                <img src="/assets/images/logo.png" alt="back" />
              </td>
              <td>
                <h1 className="text-white sm:text-3xl md:text-4xl ml-5">
                  <span className="block">{mainHero.title}</span>
                </h1>
                <h1 className="text-white sm:text-3xl md:text-4xl ml-5">
                  <span className={`block`}>{mainHero.subtitle}</span>
                </h1>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-10 text-white sm:text-2xl md:text-3xl sm:max-w-xl">
          {mainHero.description}
        </p>
        <table>
          <thead>
            <tr>
              <th>
                <div className="text-white text-sm">Measurement speed</div>
              </th>
              <th>
                <div className="text-white text-sm ml-20">Scan Resolution</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="text-white text-sm">1.100.000 points/sec</div>
              </td>
              <td>
                <div className="text-white text-sm ml-20">0.15 - 4.00 mm</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="text-white text-sm">Accuracy</div>
              </td>
              <td>
                <div className="text-white text-sm -ml-14">
                  ±0.040 mm ± 0.070 mm/m
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-60 flex justify-start">
          <div>
            <a
              href=""
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent rounded-full bg-white md:py-4 md:px-10 sm:text-xl md:text-xl`}
            >
              <div style={{ color: '#78350f' }}>MORE INFO</div>
            </a>
          </div>
          <div className="mt-3 sm:mt-0 ml-9">
            <a
              href=""
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent rounded-full bg-white md:py-4 md:px-10 sm:text-xl md:text-xl`}
            >
              <div style={{ color: '#78350f' }}>BUY NOW</div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
