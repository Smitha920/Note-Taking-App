import Note from "../models/note.model.js";
export const createNote = async(req, res) => {
    try{
        const {title,content} = req.body;
        if(!title || !content){
            return res.status(400).json({message:"Title and content are required"});
        }
        const newNote = new Note({title,content})
        await newNote.save();
        res.status(201).json(newNote);

    }catch(error){
        res.status(500).json({message:error.message});
    }
}