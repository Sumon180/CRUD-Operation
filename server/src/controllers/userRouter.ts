import { Request, Response } from "express";
import { Contact } from "../entities/Contact";
import { AppDataSource } from "../data-source";

export const getContact = async (req: Request, res: Response) => {
  const contactRepositery = AppDataSource.getRepository(Contact);
  //  find all the records
  const allRecords = await contactRepositery.find();
  res.send(allRecords);
};

export const postContact = async (req: Request, res: Response) => {
  const contactRepositery = AppDataSource.getRepository(Contact);

  let contactINFO: Contact = new Contact();
  contactINFO.name = req.body["name"];
  contactINFO.email = req.body["email"];
  contactINFO.contact = req.body["contact"];

  const userInsert = await contactRepositery.save(contactINFO);

  res.json(userInsert);
};

export const deleteContact = async (req: Request, res: Response) => {
  const contactRepositery = AppDataSource.getRepository(Contact);
  const id = req.params.id;
  await contactRepositery.delete(id);
  res.send("deleted");
};

export const updateContact = async (req: Request, res: Response) => {
  const contactRepositery = AppDataSource.getRepository(Contact);
  const id = req.params.id;
  const allRecords = await contactRepositery.findOneBy({
    id: parseInt(id),
  });
  res.send(allRecords);
};

export const putContact = async (req: Request, res: Response) => {
  const contactRepositery = AppDataSource.getRepository(Contact);
  const id = req.params.id;
  const userUpdated = await contactRepositery.update(id, {
    name: req.body["name"],
    email: req.body["email"],
    contact: req.body["contact"],
  });

  res.json({
    status: 200,
    message: "success",
  });
};
