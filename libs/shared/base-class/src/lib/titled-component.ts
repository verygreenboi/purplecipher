import { Title } from '@angular/platform-browser';

export interface TitledComponent {
  titleService: Title;
  title: string;
  setTitle: (title: string) => void;
}
