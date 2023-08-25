const sampleUsers = [
    {
      username: 'user1',
      password: 'password123',
    },
    {
      username: 'user2',
      password: 'securepassword',
    },
  ];
  
  exports.seed = function (knex) {
    return knex('users').insert(sampleUsers);
  };
  