1.Why can't FilterBar and TaskList share filter state directly, without lifting it to a shared parent? 
State belongs to the component that creates it, and React only passes data down from parent to child. FilterBar and TaskList are siblings, so neither can read the other’s state. The fix is to lift filter into their common parent, TaskBoard, which passes it down to both as props.

2.What would go wrong, specifically, if TaskList used the array index as each TaskCard's key instead of task.id? (Strand 2)
Each TaskCard keeps its own state (the checkbox). With an index key, React matches cards by position. If a task is deleted, or a filter changes which tasks show, the remaining tasks shift to new positions and inherit the old position’s key. React then reuses the wrong card, so a checked state can end up on a different task. With key={task.id}, each card keeps its identity.

3.In the sentence "props flow down, requests flow up," what in your TaskBoard app is an example of each direction? (Strand 3) 
Down: TaskBoard passes tasks and filter to TaskList, and filter to FilterBar, as props. Up: NewTaskForm calls onAddTask(data), and TaskCard calls onToggle(id). Those are functions TaskBoard passed down, so calling them runs handleAddTask or handleToggleTask inside TaskBoard, which updates the state.

4.Why is an empty list not the same thing as an error, and what should change in the UI between the two? (Strand 1)
An empty list means the request succeeded and there are simply no tasks (resolve([]), so .then runs). An error means the request failed (reject, so .catch runs) and we don’t know whether tasks exist. The UI should differ: empty shows “No tasks yet. Add your first one below.” with the form, while error shows “We couldn’t load your tasks.” with a Try again button. Using one message for both would make a new user think the app is broken, or make someone whose tasks failed to load think they were deleted.

5.Your form validates with safeParse on submit. Why does the error get stored in errors.title specifically, instead of one single error message for the whole form? (Strand 2)
A form has several fields, and each can fail for a different reason. flatten().fieldErrors groups the Zod errors by field name, so I can show “Title is required” right next to the title input and a different message next to the due date. That tells the user which field to fix. It also lets me set aria-invalid and aria-describedby on just the failing input, so a screen reader announces the problem on the right field.

6.What does aria-live actually do, and why does a loading message need it even though a sighted user can already see the screen change? (Strand 3)'
aria-live="polite" marks a region so that when its content changes, a screen reader announces the new text without the user moving focus there. A sighted user notices “Loading tasks...” change into the list just by looking, but a screen reader user only hears what has focus. Without a live region, they would get no sign that loading finished, or that an error appeared. “Polite” means it waits until the reader finishes what it is saying, rather than interrupting.