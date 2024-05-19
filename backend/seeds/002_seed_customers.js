exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        { 
          customer_id: 1, 
          first_name: 'Homero', 
          last_name: 'Simpson', 
          email: 'homero.simpson@springfield.com', 
          phone_number: '555-1234', 
          address: '742 Evergreen Terrace', 
          city: 'Springfield', 
          state: 'NT', 
          zip_code: '49007' 
        },
        { 
          customer_id: 2, 
          first_name: 'Marge', 
          last_name: 'Simpson', 
          email: 'marge.simpson@springfield.com', 
          phone_number: '555-5678', 
          address: '742 Evergreen Terrace', 
          city: 'Springfield', 
          state: 'NT', 
          zip_code: '49007' 
        },
        { 
          customer_id: 3, 
          first_name: 'Bart', 
          last_name: 'Simpson', 
          email: 'bart.simpson@springfield.com', 
          phone_number: '555-8765', 
          address: '742 Evergreen Terrace', 
          city: 'Springfield', 
          state: 'NT', 
          zip_code: '49007' 
        },
        { 
          customer_id: 4, 
          first_name: 'Lisa', 
          last_name: 'Simpson', 
          email: 'lisa.simpson@springfield.com', 
          phone_number: '555-4321', 
          address: '742 Evergreen Terrace', 
          city: 'Springfield', 
          state: 'NT', 
          zip_code: '49007' 
        },
        { 
          customer_id: 5, 
          first_name: 'Maggie', 
          last_name: 'Simpson', 
          email: 'maggie.simpson@springfield.com', 
          phone_number: '555-8760', 
          address: '742 Evergreen Terrace', 
          city: 'Springfield', 
          state: 'NT', 
          zip_code: '49007' 
        },
        { 
          customer_id: 6, 
          first_name: 'Ned', 
          last_name: 'Flanders', 
          email: 'ned.flanders@springfield.com', 
          phone_number: '555-2345', 
          address: '744 Evergreen Terrace', 
          city: 'Springfield', 
          state: 'NT', 
          zip_code: '49007' 
        },
        { 
          customer_id: 7, 
          first_name: 'Moe', 
          last_name: 'Szyslak', 
          email: 'moe.szyslak@springfield.com', 
          phone_number: '555-6789', 
          address: 'Moe\'s Tavern', 
          city: 'Springfield', 
          state: 'NT', 
          zip_code: '49007' 
        },
        { 
          customer_id: 8, 
          first_name: 'Apu', 
          last_name: 'Nahasapeemapetilon', 
          email: 'apu.nahasapeemapetilon@springfield.com', 
          phone_number: '555-2468', 
          address: 'Kwik-E-Mart', 
          city: 'Springfield', 
          state: 'NT', 
          zip_code: '49007' 
        },
        { 
          customer_id: 9, 
          first_name: 'Milhouse', 
          last_name: 'Van Houten', 
          email: 'milhouse.vanhouten@springfield.com', 
          phone_number: '555-1357', 
          address: '1206 Evergreen Terrace', 
          city: 'Springfield', 
          state: 'NT', 
          zip_code: '49007' 
        },
        { 
          customer_id: 10, 
          first_name: 'Montgomery', 
          last_name: 'Burns', 
          email: 'montgomery.burns@springfield.com', 
          phone_number: '555-9753', 
          address: 'Burns Manor', 
          city: 'Springfield', 
          state: 'NT', 
          zip_code: '49007' 
        }
      ]);
    });
};