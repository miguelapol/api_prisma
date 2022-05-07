const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/commanders', async (req, res) => {
    const commanders = await prisma.commander.findMany({});
    res.json(commanders);
});

app.get('/commanders/:id', async (req, res) => {
   const id = req.params.id;
   const commander= await prisma.commander.findUnique({where:{id: parseInt(id)}});
   res.json(commander); 
});
//aqui crearemos una nueva ruta para crear un nuevo comandante
app.post('/commanders/new', async (req, res) => {
    const commander={
        name: req.body.name,
        missionCommander: req.body.missionCommander,
        enrollments: req.body.enrollments
    }
    const message='Commander created successfully';
    await prisma.commander.create({data: commander});
    res.json({message});
})
//aqui crearemos una nueva ruta para actualizar un comandante
app.put('/commanders/update/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.commander.update({
        where:{id:id},
        data:{
            name: req.body.name,
            missionCommander: req.body.missionCommander,
            enrollments: req.body.enrollments

        }      
    })
    const message='Commander updated successfully';
    res.json({message});
})
//aqui eliminaremos un comandante
app.delete('/commanders/delete/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.commander.delete({where:{id:id}});
    const message='Commander deleted successfully';
    res.json({message});
})

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});