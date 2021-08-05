# MongoDb

## Database Management

### Show all databases
```sh
show dbs
``` 

### Show current database
```sh
db
```

### Create or switch to a database
```sh
use <database_name>
```

### Drop current database
```sh
db.dropDatabase()
```

## Collection Management

### Create a collection
```sh
db.createCollection('<collection_name>')
```

### Show collections
```sh
show collections
```

## Document Management

### Insert document/s
```sh
db.<collection_name>.insert({ key: 'value' })
```
```sh
db.<collection_name>.insertMany([{ key: 'value' }, { key: 'value' }])
```

### Find documents
```sh
# All
db.<collection_name>.find()
```
```sh
# With pretty printing
db.<collection_name>.find().pretty()
```

```sh
# With query
db.<collection_name>.find({ key: 'value' })
```

```sh
# With Primary Key
db.<collection_name>.findOne({ key: 'value' })
```

```sh
# Sorted Asc/Desc
db.<collection_name>.find().sort({ key: 1 })
db.<collection_name>.find().sort({ key: -1 })
```

```sh
# With limit
db.<collection_name>.find().limit(10)
```

```sh
# Find an element in an Array
db.posts.find({
  comments: {
     $elemMatch: {
       user: 'Mary Williams'
       }
    }
  }
)
```

```sh
# Greater & Less Than
db.posts.find({ views: { $gt: 2 } })
db.posts.find({ views: { $gte: 7 } })
db.posts.find({ views: { $lt: 7 } })
db.posts.find({ views: { $lte: 7 } })
```

```sh
# Text Search With regex
db.posts.find({
  $text: {
    $search: "\"Post O\""
    }
})
```

```sh
# Chained
db.<collection_name>.find().sort({ key: 1 }).limit(10)
```

### Count Documents
```sh
db.<collection_name>.count()
```

### Update Document
```sh
# Filter - New Value - Options
# Upsert creates if non existing
db.<collection_name>.update({ key: 'value' },
    { key: 'value', date: Date() },
    { upsert: true }
)
```

```sh
# Update Only a specific field
db.<collection_name>.update({ key: 'value' },
 $set: { date: Date() }
)
```

```sh
# Increment field
db.<collection_name>.update({ key: 'value' },
 { $inc: { count: <number> } }
)
```

```sh
# Rename field
db.<collection_name>.update({ key: 'value' },
 { $rename: { old_key: 'new_key' } }
)
```

### Delete document
```sh
db.<collection_name>.remove({ key: 'value' })
```

### Sub Documents
```sh
db.posts.update({ title: 'Post One' },
{
  $set: {
    comments: [
      {
        body: 'Comment One',
        user: 'Mary Williams',
        date: Date()
      },
      {
        body: 'Comment Two',
        user: 'Harry White',
        date: Date()
      }
    ]
  }
})
```

## Indexes
Indexes support the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan, i.e. scan every document in a collection, to select those documents that match the query statement. If an appropriate index exists for a query, MongoDB can use the index to limit the number of documents it must inspect.

MongoDB creates a unique index on the _id field during the creation of a collection. The _id index prevents clients from inserting two documents with the same value for the _id field. You cannot drop this index on the _id field.


```sh	
# String index
db.posts.createIndex({ title: 'text' })
```

```sh
# Numeric index descending
db.collection.createIndex( { name: -1 } )
```	

## JavaScript 
```js
db.<collection_name>.find().forEach(function(doc) {
    print(`Key: ${doc.key}`);
});
```