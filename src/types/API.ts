export interface ISuccessAsync<T = null> {
  isError: boolean;
  data: T;
}

export interface IReducerParam<T> {
  isloading?: boolean;
  data?: T;
  type: "" | "ISLOADING" | "SUCCESS" | "FAILURE";
  error?: string;
  params?: any[];
}

export interface IReducer<T> {
  (state: IReducerParam<T>, action: IReducerParam<T>): IReducerParam<T>;
}

export type IResponse<T = null> = Promise<ISuccessAsync<T>>;
