import { feathers } from '@feathersjs/feathers'
import { koa, errorHandler, bodyParser, rest } from '@feathersjs/koa';
import configuration from '@feathersjs/configuration'
import { EchoService } from './services/echoService';
// import { MyAuthService } from './services/authentication';
const app = koa(feathers());
const PORT = 4000;

app.use(bodyParser())
app.use(errorHandler())
app.configure(configuration())
app.configure(rest())

// app.use('/authentication', new MyAuthService(app))
app.use('echo', new EchoService());
console.log('port',app.get('port'));
app.listen(PORT,function(){
    console.log('server is running on port: ',PORT)
})