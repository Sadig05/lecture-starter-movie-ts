// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IMovie {
    id: number;
    poster_path: string;
    overview: string;
    release_date: string;
}

// I was getting this error, therefore disabled the eslint:
// error  Variable name `poster_path` must match one of the following formats: camelCase, PascalCase, UPPER_CASE   @typescript-eslint/naming-convention
