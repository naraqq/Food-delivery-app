import { useContext, createContext, useState, useEffect } from "react";
import { otherServices } from "../services/otherServices";

const FoodContext = createContext();

export function useFood() {
  return useContext(FoodContext);
}

export default function FoodProvider(props) {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    otherServices.getAllFood().then(data => data.json()).then(re => setFoods(re.data))
  }, []);
  return (
    <FoodContext.Provider value={[foods, setFoods]}>
      {props.children}
    </FoodContext.Provider>
  );
}
