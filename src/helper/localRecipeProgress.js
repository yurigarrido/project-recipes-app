const localRecipeProgress = (category, id, array = []) => {
  const categoryType = category === 'comidas' ? 'meals' : 'cocktails';

  if (!localStorage.inProgressRecipes) {
    if (category === 'comidas') {
      localStorage.inProgressRecipes = JSON.stringify(
        { cocktails: {}, meals: { [id]: [] } },
      );
    } else {
      localStorage.inProgressRecipes = JSON.stringify(
        { cocktails: { [id]: [] },
          meals: {} },
      );
    }
  } else {
    const local = JSON.parse(localStorage.inProgressRecipes);
    localStorage.inProgressRecipes = JSON.stringify(
      {
        ...local,
        [categoryType]: {
          ...local[categoryType],
          [id]: [...local[categoryType][id],
            array],
        },
      },
    );
  }
};

export default localRecipeProgress;
