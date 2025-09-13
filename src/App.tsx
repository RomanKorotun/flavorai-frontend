import { useDispatch, useSelector } from "react-redux";
import { RoutesList } from "./routes/RoutesList";
import { AppDispatch, RootState } from "./redux/store";
import { useEffect } from "react";
import { current } from "./redux/api";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const isRefreshing = useSelector(
    (state: RootState) => state.auth.isRefreshing
  );
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <>{isRefreshing ? <div>Refresh user....</div> : <RoutesList />}</>;
}

export default App;
