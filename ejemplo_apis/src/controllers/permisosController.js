import permiSchema from "../models/permisos.js";
const createUser = (req, res)=>{
const permisos = permiSchema(req.body);
permisos
    .save()
    .then((data) => res.status(201).json(data))
    .catch((error) => res.status(503).json({ message: error }))
};

const consultarUsers = (req, res) => {
    permiSchema
        .find()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(404).json({ message: error }))
};

const consultarUser = (req, res) => {
    const { id } = req.params;
    permiSchema
        .findById(id)
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(404).json({ message: error }));
};

export default {createPermiso, consultarPermiso, };
