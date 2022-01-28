import { NavMenu } from '@purplecipher/shared/model';

export type NavConfig = {
  title: string;
  menu: NavMenu[];
  hasSecondary: boolean;
};
