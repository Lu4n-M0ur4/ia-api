import {fastify} from 'fastify'
import {fastifyCors} from '@fastify/cors'
import { getAllPrompts } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAIcompletionRoute } from './routes/generate-ia-completion'

const app = fastify()


app.register(fastifyCors,{
    origin:'*',
    
})

app.register(getAllPrompts)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAIcompletionRoute)



app.listen({
port:3333
}).then(()=>{[
    console.log("HTTP server Running")
]})