// File: types/next-page-props.d.ts
declare module '.next/types/app/physio/patient-record/[id]/page' {
  export interface PageProps {
    params: {
      id: string;
    };
    searchParams?: {
      [key: string]: string | string[] | undefined;
    };
  }
}
