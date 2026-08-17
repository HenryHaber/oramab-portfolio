export type CompanyKey =
  | "cloudfro"
  | "nerdbug"
  | "capivas"
  | "gtext"
  | "showgear"
  | "visaguard"
  | "saf";

export interface Company {
  name: string;
  website?: string;
}

export const companies: Record<CompanyKey, Company> = {
  cloudfro: {
    name: "CLOUDFRO (cloudfro.online)",
    website: "https://www.cloudfro.online",
  },
  nerdbug: {
    name: "NERDBUG LIMITED",
    website: "https://www.nerdbug.io",
  },
  capivas: {
    name: "CAPIVAS AFRICA LTD",
    website: "https://capivasafrica.com",
  },
  gtext: {
    name: "GTEXT HOLDINGS",
    website: "https://gtextholdings.com",
  },
  showgear: {
    name: "SHOWGEARONLINE LTD",
    website: "https://www.showgearonline.com",
  },
  visaguard: {
    name: "VisaGuard Africa",
    website: "https://visaguardafrica.com",
  },
  saf: {
    name: "Stephen Akintayo Foundation",
  },
};