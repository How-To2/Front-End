import React from 'react';

import HowTo from './HowTo';

const dummyData = [
    {
        title: 'How to bake chicken',
        body: 'Pound chicken to an even thickness. Place chicken between two pieces of parchment paper or in a sealed plastic bag and lightly pound. This will tenderize the meat and also help the chicken to cook evenly Rub all over with olive oil. You could also use melted butter, or a variety of different types of oil, like avocado or corn oil. Season the chicken well. Rub salt, pepper, garlic powder, chili powder and onion powder all over the chicken. I like to add a sprinkling of salt over the top just to make sure it’s probably seasoned. Sometimes I’ll use paprika in place of chili powder.Place the chicken side by side in a glass baking dish. Arrange each piece of chicken in the opposite direction and you should be able to fit 4 chicken breasts in a 13×9-inch dish. For best results, the chicken pieces can be close together but not on top of each other. They will shrink slightly as they cook.Roast in the oven at 450 degrees for about 15 minutes. It doesn’t sound like a long time, but at the higher temperature the chicken will cook fast. Once chicken reaches the optimal temperature, remove the pan from the oven and ten with foil to allow the chicken time to rest.',
        author: 'Yellowblissroad'
    },
    {
        title: 'How to bake chicken',
        body: 'Pound chicken to an even thickness. Place chicken between two pieces of parchment paper or in a sealed plastic bag and lightly pound. This will tenderize the meat and also help the chicken to cook evenly Rub all over with olive oil. You could also use melted butter, or a variety of different types of oil, like avocado or corn oil. Season the chicken well. Rub salt, pepper, garlic powder, chili powder and onion powder all over the chicken. I like to add a sprinkling of salt over the top just to make sure it’s probably seasoned. Sometimes I’ll use paprika in place of chili powder.Place the chicken side by side in a glass baking dish. Arrange each piece of chicken in the opposite direction and you should be able to fit 4 chicken breasts in a 13×9-inch dish. For best results, the chicken pieces can be close together but not on top of each other. They will shrink slightly as they cook.Roast in the oven at 450 degrees for about 15 minutes. It doesn’t sound like a long time, but at the higher temperature the chicken will cook fast. Once chicken reaches the optimal temperature, remove the pan from the oven and ten with foil to allow the chicken time to rest.',
        author: 'Yellowblissroad'
    }
]

const HowToList = props => {

    return (
        <>
            {dummyData.map(art => {
                return <HowTo article={dummyData}/>
            })}
        </>
    )
}

export default HowToList;
