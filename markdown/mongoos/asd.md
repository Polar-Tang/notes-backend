Import mongoose to the main JavaScript
```js
import mongoDB from './config/db.config.js'

const port = 3000
const app = express()

app.listen(port, () => {
console.log(`Example app listening on local host http://localhost:${port}`)
})
```

### ORM
```SH
npm install mongoose
```
#### Define a schema

```js
// db.config.js
import mongoDB from 'mongoose'
  
const MONGO_URL = 'mongodb://localhost:27017/users'

mongoDB.connect(MONGO_URL, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then (() => {
console.log('Database connected')
})
.catch((err) => {
console.log("EL ERROR INDESCRIPTIBLE: ",err)
})

export default mongoDB
```
Utilize it:
```js
import User from '../models/user.models.js'

export const registerController = async (req, res) => {

	const user = new User({
	name: value.name,
	email: value.email,
	password: hashedPassword || value.password,
	emailVerified: false,
	verificationToken: ''
	})
	await user.save()
	}
```