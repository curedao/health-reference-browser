import { useLocation } from "react-router-dom";

const useQuery = (param: string) => new URLSearchParams(useLocation().search).get(param);

export default useQuery;
