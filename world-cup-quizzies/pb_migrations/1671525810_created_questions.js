migrate((db) => {
  const collection = new Collection({
    "id": "827jmv2ov1gy4px",
    "created": "2022-12-20 08:43:30.438Z",
    "updated": "2022-12-20 08:43:30.438Z",
    "name": "questions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yv5xed3s",
        "name": "manual_id",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xlmmcwhm",
        "name": "question",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "e1vzgsbw",
        "name": "option_one",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qt10r9gh",
        "name": "option_two",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xfaxh6e9",
        "name": "answer",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("827jmv2ov1gy4px");

  return dao.deleteCollection(collection);
})
