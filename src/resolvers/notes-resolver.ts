import { Arg, Mutation, Resolver, Query, Int } from "type-graphql";
import { Note } from "../entity/Note";
import { NoteInput } from "../types/note";
import { NotFoundException } from "../errors/not-found-exception";

@Resolver()
export class NotesResolver {
    @Query(() => [Note])
    async notes() {
        return Note.find();
    }

    @Query(() => Note)
    async note(@Arg('id', () => Int) id: number){
        const note: Note = await Note.findOne({ id });

        if (!note) {
            throw new NotFoundException();
        }

        return note;
    }

    @Mutation(()=> Note)
    async createNote(@Arg('options', () => NoteInput) options: NoteInput) {
        return Note.create(options).save();
    }

    @Mutation(() => Boolean)
    async deleteNote(@Arg('id', () => Int) id: number){
        const note: Note = await Note.findOne({ id });

        if (!note) {
            throw new NotFoundException();
        }

        await Note.delete({ id });
        return true;
    }

    @Mutation(()=> Boolean)
    async updateNote(
        @Arg('id', () => Int) id: number,
        @Arg('options', () => NoteInput ) options: NoteInput
    ) {
        await Note.update({ id }, options);
        return true;
    }

}
