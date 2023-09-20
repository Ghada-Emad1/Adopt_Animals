import { useQuery } from "@tanstack/react-query";
import { fetchBreedList } from "../Api/FetchBreedList";

export default function useBreedList(animal) {
  const result=useQuery(["breed",animal],fetchBreedList);
  //console.log(result);

  return [result?.data?.breeds ?? [], result.status];
}