// Challenge 02 Shorthand Property Names

// This practicle will not have any outputs just write your answer codes for bonus you can try to use the functions to do something and check if they work properly or not.

// Convert the below code to have shorthand property names

function formatMessage(name = "Hero", id = 10, avatar) {
  return {
    name,
    id,
    avatar,
    timestamp: Date.now(),
    save: function () {
      console.log(
        `${name} your id ${id} is updated in the Message saved on ${this.timestamp}`
      );
    },
  };
}

formatMessage().save();
