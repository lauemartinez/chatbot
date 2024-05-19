exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('order_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('order_details').insert([
        { 
          order_detail_id: 1,
          order_id: 1, 
          book_id: 1, 
          quantity: 1, 
          price: 2999.99
        },
        { 
          order_detail_id: 2,
          order_id: 2, 
          book_id: 2, 
          quantity: 2, 
          price: 1599.50
        },
        { 
          order_detail_id: 3,
          order_id: 3, 
          book_id: 3, 
          quantity: 1, 
          price: 899.99
        },
        { 
          order_detail_id: 4,
          order_id: 4, 
          book_id: 4, 
          quantity: 3, 
          price: 4500.00
        },
        { 
          order_detail_id: 5,
          order_id: 5, 
          book_id: 5, 
          quantity: 2, 
          price: 1200.75
        },
        { 
          order_detail_id: 6,
          order_id: 6, 
          book_id: 6, 
          quantity: 1, 
          price: 2200.00
        },
        { 
          order_detail_id: 7,
          order_id: 7, 
          book_id: 7, 
          quantity: 2, 
          price: 1800.40
        },
        { 
          order_detail_id: 8,
          order_id: 8, 
          book_id: 8, 
          quantity: 1, 
          price: 3100.00
        },
        { 
          order_detail_id: 9,
          order_id: 9, 
          book_id: 9, 
          quantity: 2, 
          price: 950.99
        },
        { 
          order_detail_id: 10,
          order_id: 10, 
          book_id: 10, 
          quantity: 1, 
          price: 5000.00
        }
      ]);
    });
};