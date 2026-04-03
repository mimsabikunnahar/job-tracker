1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
a) getElementBYId: নির্দিষ্ট Element- এর Id নাম ধরে খুজে আনে
b) getElementsByClassName: নির্দিষ্ট Element- এর Class নাম ধরে খুজে আনে
c) querySelector: একাধিক Element একই Class নামে থাকলে শুধু প্রথমটা খুজে আনে
d) querySelectorAll: একই Class নামের সব Element- এর ওপর কাজ করে

2. How do you create and insert a new element into the DOM?
Ans:
Create Element into DOM:
                  const hello = document.creatElement("div");
Insert new element:
         hello.textContent = "programming hero";
         hello.setAttribute("class", "main-card");
    
3. What is Event Bubbling? And how does it work?
Ans:
Event Bubbling: An event in JS is something that happens in the webpage when a user triggered.
How it works:
1. By clicking button
2. passing a key or mouse

4. What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event Delegation: Event Delegation is a process where we put eventListener on parent element but that eventListener also handle child elements events.

It is helpful for:
1. we don't have to use same eventListner for every child. We can only use it one time  on  parent
2.its make code lightweight & faster.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault(): element‑এর কাজ থামায়
stopPropagation(): ইভেন্টকে parent element‑এ bubble হওয়া থেকে আটকায়