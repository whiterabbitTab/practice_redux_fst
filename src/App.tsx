import './App.module.scss';
import { RecipeItem } from './components/recipe-item/RecipeItem';

import { Header } from './components/Header/Header'
import { User } from './components/userComp/User';
import { useGetRecipesQuery } from './store/api/Api';
import { CreateRecipe } from './components/createRecipe/CreateRecipe';

const userId = 1

function App() {

  const {isLoading, data} = useGetRecipesQuery(null, { // зачем то есть первый аргумент, поэтому просто _ или undefined
    skip: !userId, // условия в хуке, что-то вроде фильтрации, в данном случае проверяем на наличие userId ( если есть userId, то будем получать данные с сервака, здесь от противного)
  })
  // #typescript: useGetRecipesQuery если не прокидываете аргументик, то просто прокинуть null
  return (
    <section>
      <Header />
      <CreateRecipe />
      <div>
        {
          isLoading ? <div>Loading...</div> :
          data ? data.map(recipe => 
            <RecipeItem key={recipe.id}
            recipe={recipe}
            />
          ) : <div>Not Found  </div>}
        {/* <RecipeItem recipe={{ --->> фууу
          name: 'Strawberry',
          id: 1,
          }}
        />
        <RecipeItem recipe={{ 
          name: 'Cherry',
          id: 2,
          }}
        />
        <RecipeItem recipe={{ 
          name: 'PineApple',
          id: 3,
          }}
        /> */}
      </div>
      <User></User>
      <div>
        {}
      </div>
    </section>
  );
}

export default App;
