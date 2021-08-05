# Python SQLite 3

## Import Package
```py
import sqlite3 as sql
```

## Create / Connect to a existing DB
```py	
conn = sql.connect('test.db')
```

## Run Queries
```py
cursor = conn.cursor()

cursor.execute('SELECT * FROM users')
```

```py
# If the query is a SELECT statement, fetch the results
result = cursor.fetchall()
```

```py
# Parametrized queries
cursor.execute('SELECT * FROM users WHERE id=?', 1)
```

```py
# Execute multiple queries
cursor.executemany('INSERT INTO users VALUES (?, ?)', range(10))
```

## Commit And Close
```py
conn.commit()
conn.close()
```

