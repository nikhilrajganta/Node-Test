import { Entity } from "electrodb"; // ORM(Object relation mapping) // Adapter on adapter

import { client } from "../util/dbconnection.js";

const Products = new Entity(
  {
    model: {
      entity: "Products",
      version: "1",
      service: "ProductsService",
    },
    attributes: {
      productId: {
        type: "string",
      },
      name: {
        type: "string",
      },
      description: {
        type: "string",
      },
      price: {
        type: "number",
      },
      category: {
        type: "string",
      },
      stockQuantity: {
        type: "number",
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["productId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client, table: "products" }
);

export { Products };
