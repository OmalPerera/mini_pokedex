# Mini Pokédex for Kids
kid-friendly way to explore the world of Pokémon!

Hey hey 👋, here are some information about the assignment scope selected by me. attached images are screenshots of the completed assignment.

## Selected scope

Scope for the assignment is the **Mini Pokedex** Application which includes the following:

1. Daily Pokemon: A tab displaying a daily Pokemon.
2. Pokemon Search: wildcard search for Pokemons and A list of popular Pokemons for exploration.
3. Favorite Pokemons: kids can mark and view their favorite Pokemons.
4. Pokemon Detail Screen: Detailed view for individual Pokemons, displaying characteristics, evolutions, and stats.


![developed screens](https://github.com/OmalPerera/mini_pokedex/blob/main/__documentation__/github_banner.png)

App walkthrough - [https://github.com/user-attachments/assets/625a0ec7-3ff1-4b93-a057-af3c034f1888
](https://github.com/user-attachments/assets/625a0ec7-3ff1-4b93-a057-af3c034f1888)


## Get started with tech
This is an [Expo](https://expo.dev) project.

_Due to time constraints, the nature of the requirements, and development compatibility, I decided to proceed with the Exp project._

Follow the steps to run the app
1. clone the repo and navigate into the project
2. Install the dependencies : `npm install`
3. Start the app: `npx expo start`

### Tech stack

| Technology/Library       | Description  |
|--------------------------|-------------------|
|   | Developed using TypeScript|
| @react-navigation/*      | For tab and stack navigation. [(navigationRoute)](src/navigation/NavigationRouter.tsx) |
| MobX                     | For reactive state management. [(mobX store)](src/store/pokedex.store.ts) |
| mobx-persist-store       | For persisting favorites between app kills.  |
| graphql                  | For connecting with the server|
| @apollo/rover            | For introspection and downloading the schema|
| @graphql-codegen/*       | For automatically generating types from the schema, generating GraphQL React hooks from GraphQL query definitions and fragments. [(fragments)](src/api/queries/pokemon.gql) [(auto generated react hooks)](src/api/queries/pokemon.operations.generated.ts) |
| @apollo/client           | To execute queries and in-memory caching. [(apollo client)](src/api/apollo-client.ts) |
| react-native-reanimated  | For creating nice animations. |
| expo-haptics             | For haptic feedback. |


&nbsp;
<a id="test_app"></a>
## Testing the app
- unit test done for utility functions using jest. use `npm test` to run jest tests
- ES-Lint and Prettier have been set up with rules to ensure code quality.


#### Some final thoughts:

- This API (https://graphql.pokeapi.co/v1beta2) has a rate limit of 200 requests/h. So I focused on caching, pre-loading, and persisting details for each Pokémon, and slightly increased the number of items per page to reduce server calls.
- There is still much room for reach perfection, but I’m limited by the time. :)

END --
