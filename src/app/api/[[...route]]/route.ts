import { createAccessory, getAccessoriesByType} from '@/db/queries/accessories';
import { createPet, deletePet, getAllPets, getPetsByType, updatePet } from '@/db/queries/pets';
import {Hono} from 'hono'
import {cors} from 'hono/cors';
import {logger} from 'hono/logger';
import {handle} from 'hono/vercel'

// export const runtime = "edge"
const app = new Hono().basePath('/api');
app.use(cors());
app.use(logger());

// Pets
const pet = new Hono().basePath('/pets');
pet.get('/', async(c)=>{
    try {
        const pets = await getAllPets();
        return c.json(pets, 200)
    } catch (e) {
        return c.json({message : e}, 500)
    }
})

pet.post('/', async (c)=> {
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

pet.put('/:id', async (c)=> {
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

pet.delete('/:id', async (c)=> {
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

pet.get('/:type' , async (c)=> {
    try {
        const petType = c.req.param('type');
        const pets = await getPetsByType(petType);
        return c.json(pets, 200)
    } catch (err) {
        return c.json({message : err}, 500)
    }
}) 

// Pet utils
const accessory = new Hono().basePath('/accessories');


accessory.post('/', async (c)=> {
    try {
        const data = await c.req.json();
        const result = await createAccessory(data);
        if (!result) {
            return c.json({message : "Failed to add data"}, 400);
        }
        return c.json({message : result}, 201);
    } catch (err) {
        return c.json({message : err}, 500)
    }
})
accessory.get('/:type', async (c)=> {
    try {
        const accessoryType = c.req.param('type');
        const accessories = await getAccessoriesByType(accessoryType);

        console.log(accessories)
        return c.json(accessories, 200)
    } catch (err) {
        return c.json({message : err}, 500)
    }
}) 

app.route('/', pet);
app.route('/', accessory);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);

