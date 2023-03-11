import { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalStateProvider";
const useGlobal = () => {
    return useContext(GlobalStateContext);
}

export default useGlobal;