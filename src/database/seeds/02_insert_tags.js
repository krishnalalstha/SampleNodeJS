/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('companies')
    .del()
    .then(() => {
      return knex('companies').insert([
        {
          id: 1,
          name: 'Evolve Asia'
        },
        {
          id: 2,
          name: 'Some new name'
        }
      ]);
    });
}
