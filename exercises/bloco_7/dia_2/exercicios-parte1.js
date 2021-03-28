const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

/* Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
Note que o parâmetro da função já está sendo passado na chamada da função */

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const endereco = order.address;
  const nameDelivery = order.order.delivery.deliveryPerson
  const nameRecipient = order.name
  const phone = order.phoneNumber

  console.log(`Olá ${nameDelivery}, entrega para: ${nameRecipient}, Telefone: ${phone}, R. ${endereco.street}, Nº: ${endereco.number}, AP: ${endereco.apartment}`)
}

customerInfo(order);

/* Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00 */

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let nameRecipient = order.name;
  nameRecipient = "Luiz Silva";
  const drink = order.order.drinks.coke.type;
  let pizzas = Object.keys(order.order.pizza)
  let price = order.payment.total;
  price = 50
  console.log(`Olá ${nameRecipient}, o total do seu pedido de ${pizzas} e ${drink} é R$ ${price},00`)
}

orderModifier(order);