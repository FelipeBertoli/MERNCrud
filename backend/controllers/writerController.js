import db from "mongoose";
import { WriterSchema } from "../models/writerModel";

const Writer = db.model("Writer", WriterSchema);

export const addNewWriter = (req, res) => {
  try {
    let newWriter = new Writer(req.body);
    newWriter.save();
    res.json(newWriter);
  } catch (error) {
    res
      .status(501)
      .send({ response: `Erro ao cadastrar autor: ${error.message}` });
  }
};

export const getWriters = async (req, res) => {
  try {
    const articles = await Writer.find({});
    res.json(articles);
  } catch (error) {
    res
      .status(501)
      .send({ response: `Erro ao encontrar autor: ${error.message}` });
  }
};

export const getWriterWithID = async (req, res) => {
  try {
    const article = await Writer.findById(req.params.WriterId );
    res.json(article);
  } catch (error) {
    res
      .status(501)
      .send({ response: `Erro ao encontrar autor: ${error.message}` });
  }
};

export const updateWriter = async (req, res) => {
  try {
    const article = await Writer.findOneAndUpdate({_id: req.params.WriterId}, req.body, {new: true});
    res.json(article);
  } catch (error) {
    res
      .status(501)
      .send({ response: `Erro ao encontrar autor: ${error.message}` });
  }
};

export const deleteWriter = async (req, res) => {
  try {
    await Writer.findOneAndDelete(req.params.WriterId );
    res.json({message: 'Escritor deletado com sucesso'});
  } catch (error) {
    res
      .status(501)
      .send({ response: `Erro ao encontrar autor: ${error.message}` });
  }
};
