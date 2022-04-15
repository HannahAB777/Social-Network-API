

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      max_length: 50,
      //unique and trim
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
      //unique and valid email
    },
    thoughts:[ 
        {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    }
  ],
    friends:[
         {
      type: Schema.Types.ObjectId,
      ref: 'user',
    }
  ],
},
{
  toJSON: {
    virtuals: true,
  },
}
);

const User = model('user', userSchema);

module.exports = User;
