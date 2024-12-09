export interface PolicySection {
  title: string;
  content: string | string[];
  subsections?: PolicySection[];
}

export interface PolicyPage {
  title: string;
  lastUpdated: string;
  sections: PolicySection[];
}