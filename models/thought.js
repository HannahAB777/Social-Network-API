const User = require('./user');
const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
      },
      //created at, date, default is the timestamp, use a getter method to get time stamp
      userName: {
          type: string,
          ref: 'user'
      },
      reactions:[ 
          //reactions
    ],
},
{
    toJSON: {
      virtuals: true,
    },
  }
);
  
  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;