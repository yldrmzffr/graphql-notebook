# GraphQL Notebook
Graphql CRUD example for learning

## Stacks

- Typescript
- GraphQL : [type-graphql](https://github.com/MichalLytek/type-graphql)
- ORM : [typeorm](https://github.com/typeorm/typeorm)


## Usage

### Create Note

```graphql
mutation{
  createNote(
    options: {
      title: "Title",
      content: "Note Content"
    }
  ) {
    id
    title
    content
    created_at
  }
}
```

### Get All Notes

```graphql
query{
  notes {
    id
    title
    content
    created_at
  }
}
```

### Get Note By Id

```graphql
query {
  note(id: 42) {
    id
    title
    content
    created_at
  }
}
```

### Update Note

```graphql
mutation{
	updateNote(
    id: 42
    options: {
      title: "Title"
      content: "New Project"
    }
  )
}
```

### Delete Note

```graphql
mutation {
  deleteNote(id: 42)
}
```

## License

[MIT](https://github.com/yldrmzffr/graphql-notebook/blob/master/LICENSE) 🥰🤑
