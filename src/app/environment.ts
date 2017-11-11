export class Environment {
  id: number;
  type: string;
  nodes: Node[];
  eea_sqm_version: string;
  iSecure: number;
  dev_pt: string;
  iSecure_link: string;
  sqm_rich_link: string;
  sqm_thin_link: string;
  eea_sqm_gui_link: string;
  utf8: boolean;
  last_update: string;
  owner: string;
  comments: string;
}

export class Node {
  id: number;
  host: string;
  host_type: string;
  hardware_name: string;
  hardware_cpu: number;
  hardware_ram: number;
  os: string;
  oracle_version: string;
  database_names: string;
}
