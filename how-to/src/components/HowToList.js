import React from "react";

const dummyData = [
  {
    title: "How to bake chicken",
    body:
      "Pound chicken to an even thickness. Place chicken between two pieces of parchment paper or in a sealed plastic bag and lightly pound. This will tenderize the meat and also help the chicken to cook evenly Rub all over with olive oil. You could also use melted butter, or a variety of different types of oil, like avocado or corn oil. Season the chicken well. Rub salt, pepper, garlic powder, chili powder and onion powder all over the chicken. I like to add a sprinkling of salt over the top just to make sure it’s probably seasoned. Sometimes I’ll use paprika in place of chili powder.",
    author: "Yellowblissroad"
  },
  {
    title: "How to bake chicken",
    body:
      "Pound chicken to an even thickness. Place chicken between two pieces of parchment paper or in a sealed plastic bag and lightly pound. This will tenderize the meat and also help the chicken to cook evenly Rub all over with olive oil. You could also use melted butter, or a variety of different types of oil, like avocado or corn oil. Season the chicken well. Rub salt, pepper, garlic powder, chili powder and onion powder all over the chicken. I like to add a sprinkling of salt over the top just to make sure it’s probably seasoned. Sometimes I’ll use paprika in place of chili powder.",
    author: "Yellowblissroad"
  }
];

const HowToList = props => {
  return (
    <div className="articles-container">
      {dummyData.map(art => {
        return (
          <div className="article">
            <h2>{art.title}</h2>
            <p>{art.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HowToList;
