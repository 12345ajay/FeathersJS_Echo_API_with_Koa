import { feathers } from '@feathersjs/feathers'
import { koa, errorHandler, bodyParser, rest } from '@feathersjs/koa';
import { EchoService } from './services/echoService';
const app = koa(feathers());
const PORT = 4000;

app.use(bodyParser())
app.use(errorHandler())
app.configure(rest())


app.use('echo', new EchoService());

app.listen(PORT,function(){
    console.log('server is running on port: ',PORT)
})