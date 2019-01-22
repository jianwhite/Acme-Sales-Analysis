//Given info

const products = [
    {
      id: 1,
      name: 'foo',
      price: 7
    },
    {
      id: 2,
      name: 'bar',
      price: 2
    },
    {
      id: 5,
      name: 'bazz',
      price: 1
    },
  ];
  
  const users = [
    {
       id: 1,
       name: 'moe'
    },
    {
       id: 2,
       name: 'larry'
    },
    {
       id: 3,
       name: 'curly'
    }
  ];
  
  // productId matches up with product in products
  // userId matches up with user in users
  const orders = [
    {
      id: 1,
      productId: 1,
      quantity: 3,
      userId: 1
    },
    {
      id: 2,
      productId: 1,
      quantity: 7,
      userId: 1
    },
    {
      id: 3,
      productId: 5,
      quantity: 70,
      userId: 3
    },
    {
      id: 4,
      productId: 5,
      quantity: 1,
      userId: 3
    }
  ];

  //Instructions: write the productsPurchased, topSellingProductByQuantity, and usersWithOrdersMethods

  //productsPurchased
  const productsPurchased = (orders, products) => {
    let orderedProducts = [];
    for (let i = 0; i < orders.length; i++){
        if (orders[i].productId !== orderedProducts) {
            orderedProducts.push(orders[i].productId);
        }
    } for (let j = 0; j < orderedProducts.length; j++){
        if (orderedProducts[j] === products.id) {
            console.log(products.name);
        }
    }
  };

  //topSellingProductByQuantity

  const topSellingProductByQuantity = (orders, products) => {
    let currentTopProduct = 0;
    let soldQuant = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].quantity > soldQuant) {
            soldQuant = orders[i].quantity;
            currentTopProduct = orders[i].productId;
        }
    }; for (let j = 0; j < products.length; j++) {
        if (currentTopProduct === products[j].productId){
            console.log(products[j].name);
        }
    }
  };

  //usersWithOrdersMethods

  const usersWithOrdersMethods = (users, orders) => {
    let usersWithOrders = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < orders.length; j++) {
            if (users[i].id === orders[j].userId && usersWithOrders !== users[i].id) {
                usersWithOrders.push(users[i].id);
            };
        };
    }; console.log(usersWithOrders);
  };
