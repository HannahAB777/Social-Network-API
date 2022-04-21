const User = require('./user');

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },

      reactionBody: {
        type: String,
        required: true,
        max_length: 280
      },
      userName:[ 
          {
        type: Schema.Types.userName.String,
        ref: 'user',
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
},
{
    toJSON: {
      virtuals: true,
    },
  }
);
  
  const Reaction = model('reaction', reactionSchema);
  
  module.exports = Reaction;