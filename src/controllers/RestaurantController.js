const restaurantsList = [
  {
    id: 1,
    title: "Amor aos pedaços",
    description:
      "Amor aos Pedaços: Uma deliciosa história recheada de inspiração, intuição, pesquisa, dedicação e talento",
    image:
      "https://www.amoraospedacos.com.br/wp-content/themes/amoraospedacos/assets/images/logo-amoraospedacos.png",
    meals: [
      {
        id: 1,
        name: "Bolo 70% Cacau com Nozes",
        description:
          "Massa cookie recheada e coberta com mousse de chocolate belga 70% cacau e nozes, polvilhada com cacau em pó.",
        image:
          "https://www.amoraospedacos.com.br/wp-content/uploads/2021/09/Bolo-70-Cacau-com-Nozes-2-Copy.jpeg",
        price: 35.5
      },
      {
        id: 2,
        name: "Bolo Abacaxi com Coco 0% de Açúcar",
        description:
          "Bolo branco recheado e coberto com creme de coco, calda de abacaxi e coco em flocos.",
        image:
          "https://www.amoraospedacos.com.br/wp-content/uploads/2021/08/Bolo-Abacaxi-com-Coco-0-e1631538890631.jpg",
        price: 30.99
      },
      {
        id: 3,
        name: "Bolo África",
        description:
          "Bolo de chocolate recheado e coberto com creme de chocolate e crocante de castanhas.",
        image:
          "https://www.amoraospedacos.com.br/wp-content/uploads/2021/08/produto1.png",
        price: 29.9
      }
    ]
  },
  {
    id: 2,
    title: "Outback",
    description: "STEAKHOUSE",
    image:
      "https://cdn.cookielaw.org/logos/29fb1ac6-5fb2-4f86-aaad-74582dc1ce11/ae9079f8-3934-452c-b3e5-784b8f901a69/0545dacf-eac3-459c-bbf4-503d7fe15256/outback-logo-1.png",
    meals: [
      {
        id: 1,
        name: "Junior Ribs",
        description:
          "Essa versão traz meia costela grelhada em chama aberta e temperada com blend de especiarias.",
        image:
          "https://s3.amazonaws.com/institucional-statics-files/site/uploads/JR-Ribs.png",
        price: 55.5
      },
      {
        id: 2,
        name: "Junior Ribs For Two",
        description:
          "Essas duas Junior Ribs servidas com dois acompanhamentos são perfeitas para quem está em dupla.",
        image:
          "https://s3.amazonaws.com/institucional-statics-files/site/uploads/Outback-Megaribs-225x255.jpg",
        price: 75
      },
      {
        id: 2,
        name: "Steak Au Gratin",
        description:
          "Fatias de filet mignon e cogumelos salteados, molho de gorgonzola, nosso Garlic Mashed Potato e mix de queijos gratinados.",
        image:
          "https://s3.amazonaws.com/institucional-statics-files/site/uploads/steak_au_gratin-225x255.jpg",
        price: 45.69
      }
    ]
  },
  {
    id: 3,
    title: "Taco Bell",
    description: "Comida Mexicana",
    image:
      "https://tacobell.com.br/images/compressed/tablet/logotipos/logo-mobile.webp",
    meals: [
      {
        id: 1,
        name: "Bell Box Bacon Fries Burrito",
        description:
          "Burrito recheado com batatas fritas temperadas, bacon em pedaços, proteína, nacho cheese, sour cream, pico de gallo",
        image:
          "https://tacobell.com.br/images/compressed/tablet/home/menu/lancamentos/bellbox-bacon-fries-burrito-nachos.webp",
        price: 35.5
      },
      {
        id: 2,
        name: "Big Taco Box",
        description:
          "A grande Big Taco Box vem com 3 deliciosos Crunchy Tacos Supreme + Cheese Quesadilla com muito queijo + Nachos ou Fritas com tempero especial + Bebida geladinha!",
        image:
          "https://tacobell.com.br/images/compressed/tablet/home/menu/tacos/big-taco-box-copo.webp",
        price: 45
      },
      {
        id: 3,
        name: "Crunchy Taco Supreme Individua",
        description:
          "Da Casa! Taco feito com tortilla crocante, queijo prato, sour cream, alface, tomate e proteína.",
        image:
          "https://tacobell.com.br/images/compressed/tablet/home/menu/individuais/supreme.webp",
        price: 25.69
      }
    ]
  },
];

exports.getAll = (req, res) => {
  return res.send(restaurantsList);
};

exports.getMealByRestaurant = (req, res) => {
  const { id } = req.params;

  const restaurant = getRestauranteById(id);

  res.send(restaurant.meals);
};

exports.getAvailableTimes = (req, res) => {
  const { restId, mealId } = req.params;

  const restaurant = getRestauranteById(restId);
  const meal = getMealById(restaurant.meals, mealId);
  console.log(meal);
  res.send(meal);
};

function getRestauranteById (id) {
  return restaurantsList.reduce((acc, curr) => {
    if (curr.id == id) acc = curr;
    return acc;
  }, []);
}

function getMealById (mealsList, id) {
  return mealsList.reduce((acc, curr) => {
    if (curr.id == id) acc = curr;
    return acc;
  }, []);
}
