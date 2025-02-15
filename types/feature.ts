export type LanguageTechnology = {
  id: number;
  name: string;
  type: 'Language' | 'Technology';
  description: string;
  icon: string; // Add icon property
  language?: string; // Add language property (optional)
  technology?: string; // Add technology property (optional)
};
