import {BX} from './BX';
import {Enrichments} from './enrichments';

export class Hero {
  recordId: string;
  title: string;
  isExpanded: boolean;
  originalBX:  BX;
  thumbnailLinks: string[];
  generalData: string;
  type: string;
  nuiTitle: string;
  enrichments: Enrichments;

}
