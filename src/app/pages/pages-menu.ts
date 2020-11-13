import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Administrators',
    icon: 'people-outline',
    link: '/pages/administrator/list',
  },
  {
    title: 'Sub. Packages',
    icon: 'options-2-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Uploads',
    icon: 'cloud-upload-outline',
    link: '/pages/ui-features',
  },
  {
    title: 'REPORTS',
    group: true,
  },
  {
    title: 'Subscribers',
    icon: 'people-outline',
    link: '/pages/administrator/list',
  },
  {
    title: 'Subscriptions',
    icon: 'menu-outline',
    link: '/pages/administrator/list',
  },
];
