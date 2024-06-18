import {Hono} from 'hono'
import {cors} from 'hono/cors';
import {logger} from 'hono/logger';
import {handle} from 'hono/vercel'

export const runtime = "edge"
const app = new Hono().basePath('/api');
app.use(cors());
app.use(logger());

app.get('/hello' , (c)=> {
    return c.json({
        message : "Hello from Hono"
    })
})

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);

