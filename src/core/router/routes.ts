import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  hotelCollection: string;
  createHotel: string;
  // editHotel: string;
  characterCollection: string;
  character: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  hotelCollection: '/hotels',
  createHotel: '/hotels/create',
  //editHotel: '/hotels/:id',
  characterCollection: '/characters',
  character: '/character/:id'
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'character'> {
  character: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  // editHotel: (id) => generatePath(switchRoutes.editHotel, { id }),
  character: (id) => generatePath(switchRoutes.character, { id })
};
