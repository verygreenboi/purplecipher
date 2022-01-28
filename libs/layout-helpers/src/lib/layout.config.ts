import { LayoutHelperService } from './layout-helper.service';

export interface LayoutConfig {
  layoutHelperService: LayoutHelperService;
  toggleNav: (show: boolean) => void;
  toggleFooter: (show: boolean) => void;
}
