import { defineDb, defineTable, column } from "astro:db";

const Event = defineTable({
  columns: {},
});

const Category = defineTable({
  columns: {
    id: column.text(),
    name: column.text(),
  },
});

export default defineDb({
  tables: { Event, Category },
});
