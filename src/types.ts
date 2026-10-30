export type Language = 'en' | 'ar';
export type ThemeMode = 'dark' | 'light';

export type PageId = 
  | 'home' 
  | 'about' 
  | 'projects' 
  | 'project-ghaith' 
  | 'project-application' 
  | 'project-zena'
  | 'project-munqidh'
  | 'team'
  | 'contact';

export interface ProjectData {
  id: 'ghaith' | 'application' | 'zena';
  pageId: PageId;
  name: {
    en: string;
    ar: string;
  };
  codeName?: {
    en: string;
    ar: string;
  };
  type: {
    en: string;
    ar: string;
  };
  status: {
    en: string;
    ar: string;
  };
  shortDescription: {
    en: string;
    ar: string;
  };
  imagePath: string;
  imageAlt: {
    en: string;
    ar: string;
  };
  tag: {
    en: string;
    ar: string;
  };
  number: string;
}
