migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("827jmv2ov1gy4px")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xgd2ngbw",
    "name": "image",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("827jmv2ov1gy4px")

  // remove
  collection.schema.removeField("xgd2ngbw")

  return dao.saveCollection(collection)
})
