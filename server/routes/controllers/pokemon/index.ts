import { NextFunction, Request, Response } from "express";
import { Knex } from "knex";
import { SinglePokemon } from "../../../utils/Types";
import { z } from "zod";
import { pokemonSchema } from "../../../utils/Types";
const knex: Knex = require("../../../db/knex");

export const getAllPokemon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pokemonList = await knex
      .select()
      .from("pokemon")
      // TODO: CHange this to Pokemon type
      .then((pokemon: any) => {
        return res.status(200).json(pokemon);
      });
    next();
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Error getting all pokemon");
  }
};

export const getPokemonByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const singlePokemon = await knex
      .select()
      .from("pokemon")
      .where("dexID", req.params.dexID)
      .then((pokemon: any) => {
        if (pokemon.length === 0) {
          return res.status(404).send("No pokemon with that id");
        }
        return res.status(200).json(pokemon);
      });
    next();
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Error getting pokemon");
  }
};

// TODO: Flesh this out
export const deleteSinglePokemon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("deleting");
  console.log("req.params.dexID:", req.params.dexID);
  await knex("pokemon")
    .where("dexID", req.params.dexID)
    .del()
    .then((val) => {
      res.status(200).send("Deleting!");
      next();
    })
    .catch((err) => {
      res.status(404).send(`Error deleting pokemon: ${err}`);
      next();
    });
};

export const postNewPokemon = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("posting");
  const pokemon = req.body;
  // console.log("pokemon:", pokemon);
  console.log("req.body:", req.body);
  // console.log("pokemonSchema.parse(pokemon):", pokemonSchema.parse(pokemon));
};
