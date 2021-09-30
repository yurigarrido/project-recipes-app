// import React, { useState, useEffect } from 'react';

// const recipeCardExplore = ({list}) => {
//   const pageName = window.location.pathname.split('/')[1];

//   return (
//     <div>
//       {list.map((el, index) => {
//         return (
//           <div>
//           {/* ta faltando implementar essa parte  */}
//           <span
//           data-testid={`${index}-ingredient-card`}
//           >
//             ingredientes
//           </span>
//           <img
//             data-testid={`${index}-ingredient-card`}
//             src={ pageName === 'bebidas' ? el.strDrinkThumb : el.strMealThumb }
//             alt={ pageName === 'bebidas' ? el.strDrink : el.strMeal}
//           />
//           <span
//             data-testid={`${index}-card-name`}
//           >
//             { pageName === 'bebidas' ? el.strDrink : el.strMeal}
//           </span>
//         </div>
//       })
//       }
//     </div>
//   );
// };

// export default recipeCardExplore;
