import { createPet, deletePet, getAllPets, updatePet } from '@/db/queries/pets';
import {Hono} from 'hono'
import {cors} from 'hono/cors';
import {logger} from 'hono/logger';
import {handle} from 'hono/vercel'

// export const runtime = "edge"
const app = new Hono().basePath('/api');
app.use(cors());
app.use(logger());

app.get('/hello' , (c)=> {
    return c.json({
        message : "Hello from Hono"
    })
})

// Pets
app.get('/pets', async(c)=>{
    try {
        const pets = await getAllPets();
        return c.json(pets, 200)
    } catch (e) {
        return c.json({message : e}, 500)
    }
})

app.post('/pets', async (c)=> {
    try {
        const data = await c.req.json();
        const result = await createPet(data);
        if (!result) {
            return c.json({message : "Failed to add data"}, 400);
        }
        return c.json({message : result}, 201);
    } catch(err) {
        return c.json({message : err}, 500)
    }
});

app.put('/pets/:id', async (c)=> {
    try {
        const data = await c.req.json();
        const petId = Number(c.req.param('id') );
        const result = await updatePet(petId, data);
        if (!result) {
            return c.json({message : "Failed to update data"}, 400);
        }
        return c.json({message : result}, 200);
    } catch(err) {
        return c.json({message : err}, 500)
    }
})

app.delete('/pets/:id', async (c)=> {
    try {
        const petId = Number(c.req.param('id') );
        const result = await deletePet(petId);
        if (!result) {
            return c.json({message : "Failed to delete data"}, 400);
        }
        return c.json({message : result}, 200);
    } catch(err) {
        return c.json({message : err}, 500)
    }
})

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);

