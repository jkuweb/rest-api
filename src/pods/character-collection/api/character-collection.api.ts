import { ENV_VARIABLES } from "#core/env";
import { CharacterMemberApiModel } from "./character-collection.api.model";

// export const getCharacterCollectionPerPage = async (page: string) => {
//   const response = await fetch(
//     `${ENV_VARIABLES.CHARACTERS_API_BASE_URL}/character/?page=${page}`
//   ).then(response => response.json());


//   return response.results;
// };
export const getCharacterCollectionApi = async (): Promise<CharacterMemberApiModel[]> => {
  const response = await fetch(
    `${ENV_VARIABLES.CHARACTERS_API_BASE_URL}/character`
  ).then(response => response.json());


  return response.results;
};
