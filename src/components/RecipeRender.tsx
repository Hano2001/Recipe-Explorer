import React from "react";
import { Imain, Tdata } from "./InterFaces_and_Types";
import YoutubeRender from "./YoutubeRender";

export default function RecipeRender(props: {
  main: Imain;
  ingredients: Tdata;
  measures: Tdata;
}) {
  const { main, ingredients, measures } = props;
  const vowels = "AEIOU";
  const article = vowels.includes(main.strArea[0]) ? "An" : "A";
  const descriptionString = `${article} ${main.strArea} ${main.strCategory} dish!`;
  const backgroundStyles = {
    backgroundImage: `url('${main.strMealThumb}')`,
  } as React.CSSProperties;
  const youtubeID = main.strYoutube
    ? main.strYoutube.slice(main.strYoutube.indexOf("=") + 1)
    : "";

  return (
    <div
      className="bg-cover bg-no-repeat h-full overflow-y-auto"
      style={backgroundStyles}
    >
      <div className="bg-black">
        <h1 className="text-center">{main.strMeal}</h1>
        <h1 className="text-center">{descriptionString}</h1>
        {main.strYoutube ? <YoutubeRender id={youtubeID} /> : ""}
      </div>
      <div className="flex flex-row mt-6 z-1 bg-black mt-0">
        <h2 className="basis-1/2 text-center">Ingredients and Measures</h2>
        <h2 className="basis-1/2 text-center">Instructions</h2>
      </div>

      <div className="flex flex-row bg-light bg-opacity-50">
        <table className="align-center basis-1/3 h-[90%]">
          <thead>
            <tr>
              <th className="text-left" scope="col">
                Ingredients
              </th>
              <th className="text-left" scope="col">
                Measure
              </th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ing: string, index: number) => {
              return (
                <tr key={index} className="border solid black">
                  <td scope="row">{ing}</td>
                  <td scope="row">{measures[index]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <span className="mt-2 basis-2/3 whitespace-pre-wrap px-3 mb-5">
          {main.strInstructions}
        </span>
      </div>

      <div className="bg-orange"></div>
    </div>
  );
}
