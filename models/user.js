//require mongoose
const { Schema, model } = require('mongoose')
//require bcrypt
const bcrypt = require('bcrypt')

// SALT_ROUNDS 
const SALT_ROUNDS = 10

const userSchema = new Schema ({
  profilePicture: {type: String},
  username: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 10,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  tumblrUrl: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  post: [{
    type: Schema.Types.ObjectId,
    ref: 'Posts'
  }],
  following:[{type: String}]
}, {
    timestamps: true,
    toJSON: {
      transform (doc, ret) {
        delete ret.password
        return ret
      }
    }
})

userSchema.pre('save', async function (next) {
  // 'this' is the user doc
  if (!this.isModified('password')) return next()
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
  return next()
})

const User = model('User', userSchema)

module.exports = User

// module.exports = model('User', userSchema)