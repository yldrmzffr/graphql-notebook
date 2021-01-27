import express from "express";
import { createConnection } from "typeorm";
import { ApolloServer} from "apollo-server-express";
import { buildSchema} from "type-graphql";
import { NotesResolver } from "./resolvers/notes-resolver";

(
    async () => {
        const app = express();
        await createConnection()

        const apolloServer = new ApolloServer({
            schema: await buildSchema({
                resolvers: [ NotesResolver ]
            }),
            context: ({ req, res}) => ({ req, res }),
        })

        apolloServer.applyMiddleware({ app, cors: false});

        app.listen(3030, () => {
            console.log("Server Running!");
        })
    }
)();

