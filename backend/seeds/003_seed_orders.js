exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        { 
          order_id: 1,
          customer_id: 1, 
          order_date: '2024-01-01 10:00:00', 
          total_amount: 2999.99,
          status: 'completado' 
        },
        { 
          order_id: 2,
          customer_id: 2, 
          order_date: '2024-02-01 12:00:00', 
          total_amount: 1599.50,
          status: 'procesando' 
        },
        { 
          order_id: 3,
          customer_id: 3, 
          order_date: '2024-03-01 14:00:00', 
          total_amount: 899.99,
          status: 'enviado' 
        },
        { 
          order_id: 4,
          customer_id: 4, 
          order_date: '2024-04-01 16:00:00', 
          total_amount: 4500.00,
          status: 'pendiente' 
        },
        { 
          order_id: 5,
          customer_id: 5, 
          order_date: '2024-05-01 18:00:00', 
          total_amount: 1200.75,
          status: 'cancelado' 
        },
        { 
          order_id: 6,
          customer_id: 6, 
          order_date: '2024-06-01 20:00:00', 
          total_amount: 2200.00,
          status: 'completado' 
        },
        { 
          order_id: 7,
          customer_id: 7, 
          order_date: '2024-07-01 22:00:00', 
          total_amount: 1800.40,
          status: 'procesando' 
        },
        { 
          order_id: 8,
          customer_id: 8, 
          order_date: '2024-08-01 09:00:00', 
          total_amount: 3100.00,
          status: 'enviado' 
        },
        { 
          order_id: 9,
          customer_id: 9, 
          order_date: '2024-09-01 11:00:00', 
          total_amount: 950.99,
          status: 'pendiente' 
        },
        { 
          order_id: 10,
          customer_id: 10, 
          order_date: '2024-10-01 13:00:00', 
          total_amount: 5000.00,
          status: 'cancelado' 
        }
      ]);
    });
};