import { Environment } from './environment';

export const ENVIRONMENTS: Environment[] = [
  { id: 1,
    type: 'current_development',
    eea_sqm_version: '17.1',
    iSecure: 17.0,
    host: 'crete',
    dev_pt: 'PT',
    hardware_name: 'Xeon Family 6 Model 23',
    hardware_cpu: 4,
    hardware_ram: 22,
    os: 'Red Hat 7.3 (Santiago)',
    oracle_version: '12.1.0.2 Enterprise',
    iSecure_link: 'http://crete.lab254.telcordia.com:8102/ISECURE/',
    sqm_rich_link: 'http://crete.lab254.telcordia.com:8102/SD/',
    sqm_thin_link: 'https://crete.lab254.telcordia.com:8103/App.html',
    eea_sqm_gui_link: '',
    database_names: 'sd',
    utf8: false,
    last_update: '7/24/17',
    owner: 'Umesh',
    comments: 'crete - SQM Application, iSecure, sd database',
  },
  { id: 2,
    type: 'current_development',
    eea_sqm_version: '17.2',
    iSecure: 17.0,
    host: 'neva',
    dev_pt: 'Dev',
    hardware_name: 'Xeon Family 6 Model 23',
    hardware_cpu: 4,
    hardware_ram: 30,
    os: 'Red Hat 7.3 (Santiago)',
    oracle_version: '12.1.0.2 Enterprise',
    iSecure_link: 'http://neva.cc.telcordia.com:8102/ISECURE/',
    sqm_rich_link: 'http://neva.cc.telcordia.com:8102/SD/',
    sqm_thin_link: 'https://neva.cc.telcordia.com:8103/App.html',
    eea_sqm_gui_link: '',
    database_names: 'sd',
    utf8: false,
    last_update: '7/24/17',
    owner: 'Umesh',
    comments: 'neva - SQM Application, iSecure, sd database',
  },
  { id: 3,
    type: 'current_development',
    eea_sqm_version: '17.0',
    iSecure: 17.0,
    host: 'rhodes',
    dev_pt: 'Automation',
    hardware_name: 'Xeon Family 6 Model 23',
    hardware_cpu: 4,
    hardware_ram: 30,
    os: 'Red Hat 6.5 (Santiago)',
    oracle_version: '12.1.0.2 Enterprise',
    iSecure_link: 'http://rhodes.cc.telcordia.com:8102/ISECURE/',
    sqm_rich_link: 'http://rhodes.cc.telcordia.com:8102/SD/',
    sqm_thin_link: 'https://rhodes.cc.telcordia.com:8103/App.html',
    eea_sqm_gui_link: '',
    database_names: 'sd',
    utf8: false,
    last_update: '2/2/17',
    owner: 'Umesh',
    comments: '',
  },
];