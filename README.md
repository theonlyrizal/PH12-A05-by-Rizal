# PH12-A05-by-Rizal
Programming Hero Batch 12 Assignment 5 submitted by Salman Bari Rizal


         https://theonlyrizal.github.io/PH12-A05-by-Rizal/


# QnA

---

> *What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?*

- **getElementById** -> gets the element containing the specified Id; returns as an object.

- **getElementsByClassName** -> Selects and gets multiple elements that goes by the specified class name; returns as an HTMLCollection

- **querySelector** -> Selects the first element that matches the specified CSS selector; returns as an Element Object

- **querySelectorAll** -> Selects ALL the first element that matches the specified CSS selector; returns as a NodeList

---

> *How do you create and insert a new element into the DOM?*

- **creating and element** -> `const [VARIABLE_NAME_TO_STORE_THE_ELEMENT_IN] = document.createElement('[DESIRED_ELEMENT_TAG_NAME]');`

- **inserting element** -> `[PARENT_ELEMENT_OBJECT].appendChild([CHILD_ELEMENT_OBJECT]);`

---

> *What is Event Bubbling and how does it work?*

- **Event Bubbling** -> When an event happens on an element that event gradually also registered by in parents then grand parents then great-grandparents and so on up-to <html> and lastly DOCUMENT.

---

> *What is Event Delegation in JavaScript? Why is it useful?*

- **Event Delegation** -> Instead of assigning event listeners to every child, assign it to a suitable parent. that event listener of the parent also handles events of the child elements, using the concept of Event bubbling. IT IS USEFUL because it reduces the number of event listeners, improving performance; also better code management.

---

> *What is the difference between preventDefault() and stopPropagation() methods?*

- **preventDefault()** -> stops the default browser action
- **stopPropagation()** -> stops an event from bubbling up the DOM tree.

---
