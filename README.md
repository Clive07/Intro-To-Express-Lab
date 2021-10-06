# Introduction to Express - Lab

(THIS README HAS BEEN COPIED FROM ORIGINAL GIT REPO.)

Those are exercises to do by yourself during the session, with the instructor available for help. 

(actually done after lesson)

## General instructions

For each of the exercises, create a new express application from scratch in a different folder. This will both give you practice and avoid having conflict between your rules.

(will actually be done within one folder for speed)

## 1. Happy birthday

We want to create a small web application where a user can insert their first name and birthdate.

On submit, we'll show them a page with a message "Happy birthday, _NAME_" if today is indeed their birthday and a simple greeting "Hi,  _NAME_" if not.
Replace _NAME_ with first name value coming from the form.

> Hint: You'll want to get back to how [Date work in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

> Hint: All the control flow works exactly like in Modern JavaScript modules. You can even use a function here as we did for the "add" example

## 2. Calculator

Let's reimplement the calculator from the [JavaScript function lab](https://github.com/SkillsUnion/js-functions-lab/blob/main/src/index.js#L33) using express. We'll want a form allowing the user to insert both numbers and the operator (using a `<select>`). On submit, the user should see a small HTML page with the result of the calculation.

## 3. Calculator API

We want to add review the previous exercise but a plain JavaScript API:

- On submit we should make a `POST` request on the `/compute` endpoint with content a JSON object like: 

```JSON
{ "first": 8, "second": 21, "operator": "ADD" }
```

- `/compute` should respond with JSON object like:

```JSON
{ "operation": "8 + 21", "result": 29 }
```
