import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const envs = [
      { id: 0,
        type: 'current_development_env',
        eea_sqm_version: '17.2',
        build_number: 13,
        iSecure: 17.0,
        nodes: [{
          id: 101,
          host: 'gamma',
          host_type: 'SQM Core',
          hardware_name: 'Xeon Family 6 Model 26',
          hardware_cpu: 16,
          hardware_ram: 94,
          os: 'Red Hat 7.3 (Santiago)',
          oracle_version: 'N/A',
          database_names: 'N/A'
        }, {
          id: 102,
          host: 'delta',
          host_type: 'Oracle',
          hardware_name: 'Xeon Family 6 Model 26',
          hardware_cpu: 12,
          hardware_ram: 64,
          os: 'Red Hat 7.3 (Santiago)',
          oracle_version: '12.1.0.2 Enterprise',
          database_names: 'sd'
        }],
        dev_pt: 'PT',
        iSecure_link: 'http://gamma.cc.telcordia.com:8102/ISECURE/',
        sqm_rich_link: 'http://gamms.cc.telcordia.com:8102/SD/',
        sqm_thin_link: 'https://gamma.cc.telcordia.com:8103/App.html',
        eea_sqm_gui_link: '',
        utf8: false,
        last_update: '7/24/17',
        owner: 'Umesh',
        comments: 'crete - SQM Application, iSecure, sd database',
      },
      { id: 1,
        type: 'current_development_env',
        eea_sqm_version: '17.2',
        build_number: 13,
        iSecure: 17.0,
        nodes: [{
          id: 104,
          host: 'neva',
          host_type: 'SQM Core',
          hardware_name: 'Xeon Family 6 Model 23',
          hardware_cpu: 4,
          hardware_ram: 30,
          os: 'Red Hat 7.3 (Santiago)',
          oracle_version: '12.1.0.2 Enterprise',
          database_names: 'sd'
        }],
        dev_pt: 'Dev',
        iSecure_link: 'http://neva.cc.telcordia.com:8102/ISECURE/',
        sqm_rich_link: 'http://neva.cc.telcordia.com:8102/SD/',
        sqm_thin_link: 'https://neva.cc.telcordia.com:8103/App.html',
        eea_sqm_gui_link: '',
        utf8: true,
        last_update: '11/03/17',
        owner: 'Umesh',
        comments: 'neva - SQM Application, iSecure, sd database',
      },
      { id: 2,
        type: 'current_development_env',
        build_number: 13,
        nodes: [{
          id: 105,
          host: 'sdperf1',
          host_type: 'Oracle',
          hardware_name: 'Xeon Family 6 Model 26',
          hardware_cpu: 24,
          hardware_ram: 80,
          os: 'Red Hat 7.3 (Santiago)',
          oracle_version: '12.1.0.2 Enterprise',
          database_names: 'sd & bo'
        }, {
          id: 106,
          host: 'sdperf2',
          host_type: 'SQM Core',
          hardware_name: 'Xeon Family 6 Model 26',
          hardware_cpu: 6,
          hardware_ram: 108,
          os: 'Red Hat 7.3 (Santiago)',
          oracle_version: 'N/A',
          database_names: 'N/A'
        }],
        eea_sqm_version: '17.1',
        iSecure: 17.0,
        dev_pt: 'Automation',
        iSecure_link: 'http://sdperf1.cc.telcordia.com:8102/ISECURE/',
        sqm_rich_link: 'http://sdperf1.cc.telcordia.com:8102/SD/',
        sqm_thin_link: 'https://sdperf1.cc.telcordia.com:8103/App.html',
        eea_sqm_gui_link: '',
        utf8: true,
        last_update: '11/03/17',
        owner: 'Umesh',
        comments: 'Comcast Data',
      },
      { id: 3,
        type: 'open_releases',
        build_number: 11,
        nodes: [{
          id: 109,
          host: 'test',
          host_type: 'Oracle',
          hardware_name: 'Xeon Family 6 Model 26',
          hardware_cpu: 24,
          hardware_ram: 80,
          os: 'Red Hat 6.3 (Santiago)',
          oracle_version: '12.1.0.2 Enterprise',
          database_names: 'sd & bo'
        }, {
          id: 110,
          host: 'test2',
          host_type: 'SQM Core',
          hardware_name: 'Xeon Family 6 Model 26',
          hardware_cpu: 6,
          hardware_ram: 108,
          os: 'Red Hat 7.3 (Santiago)',
          oracle_version: 'N/A',
          database_names: 'N/A'
        }],
        eea_sqm_version: '17.1',
        iSecure: 17.0,
        dev_pt: 'Automation',
        iSecure_link: 'http://sdperf1.cc.telcordia.com:8102/ISECURE/',
        sqm_rich_link: 'http://sdperf1.cc.telcordia.com:8102/SD/',
        sqm_thin_link: 'https://sdperf1.cc.telcordia.com:8103/App.html',
        eea_sqm_gui_link: '',
        utf8: true,
        last_update: '11/03/17',
        owner: 'Umesh',
        comments: 'Comcast Data',
      }
    ];
    return {envs};
  }
}
