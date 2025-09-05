/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').truncate()
  await knex('todos').insert([
    {
        message: "Workout early in the Morning"
    },
    {
        message: "Learn a Technology"
    },
    {
        message: "Work on a Project"
    },
    {
        message: "Meditate"
    }
  ]);
};
