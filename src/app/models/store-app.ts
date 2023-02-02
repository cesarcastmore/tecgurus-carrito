import { AlertState } from "../store/alert.reducer";
import { LoadingState } from "../store/loading.reducer";
import { ProductsState } from "../store/product.reducer";

export interface StoreApp{
    loading: LoadingState;
      alert: AlertState
      products: ProductsState
}