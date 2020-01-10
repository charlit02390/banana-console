import { Tag } from './tag'
export interface Area {
     idarea?: number;
     label: string;
     finca: string;
     color?: string;
     tags?: Tag[];
}