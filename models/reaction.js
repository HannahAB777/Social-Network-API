

const reactionSchema = new Schema(
    {
     //reaction id

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
  //created at
},
{
    toJSON: {
      virtuals: true,
    },
  }
);
  
  const Reaction = model('reaction', reactionSchema);
  
  module.exports = Reaction;