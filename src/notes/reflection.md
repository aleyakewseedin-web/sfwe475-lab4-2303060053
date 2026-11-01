1.Why can't FilterBar and TaskList share filter state directly, without lifting it to a shared parent? a state belongs to the component itself it can not be shared unless lifted to parent
2.What would go wrong, specifically, if TaskList used the array index as each TaskCard's key instead of task.id? (Strand 2)
the wrong taskcard may be updated if updates took place 
3.In the sentence "props flow down, requests flow up," what in your TaskBoard app is an example of each direction? (Strand 3) 



4.Why is an empty list not the same thing as an error, and what should change in the UI between the two? (Strand 1)
5.Your form validates with safeParse on submit. Why does the error get stored in errors.title specifically, instead of one single error message for the whole form? (Strand 2)
6.What does aria-live actually do, and why does a loading message need it even though a sighted user can already see the screen change? (Strand 3)