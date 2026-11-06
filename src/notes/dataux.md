strand 1 
2) with the default 800ms delay, what will the screen show for the first 800 milliseconds?
will show "loading tasks" since state loading is default state and when state is loading it returns "loading tasks"
4) why empty and error need to be two separate states instead of one “something's wrong” state?
both  have different meaning: "empty" means request has succcessfuly reached server but nothing to return since no tasks added while "error" means request did not reach server so request is failed. so having both states fall under one message will cause confusion to user

strand 3 
3)