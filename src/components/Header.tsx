import React from 'react';

import { Popover } from '@headlessui/react';
import { Link } from 'react-scroll';

import config from '../config/index.json';

const Menu = () => {
  const { navigation } = config;

  return (
    <>
      <Popover>
        <div className="relative z-10 pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-center sm:h-10"
            aria-label="Global"
          >
            <div className="hidden sm:block md:space-x-12">
              {navigation.map((item) => {
                return (
                  <Link
                    spy={true}
                    active="active"
                    smooth={true}
                    duration={1000}
                    key={item.name}
                    to={item.href}
                    className="font-medium text-white text-sm"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </Popover>
    </>
  );
};

export default Menu;
