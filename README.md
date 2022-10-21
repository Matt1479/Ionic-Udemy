# Ionic Notes

<br>

<nav>

## Navigation <span id="navi"></span>

<br>

### <a href="#t01">**Section 01: Getting Started**</a>

### <a href="#t02">**Section 02: Angular Refresher**</a>

### <a href="#t03">**Section 03: Ionic Component Basics**</a>

### <a href="#t04">**Section 04: Angular + Ionic**</a>

### <a href="#t05">**Section 05: Building Native Apps with Capacitor**</a>

### <a href="#t06">**Section 06: Debugging**</a>

### <a href="#t07">**Section 07: Navigation & Routing in Ionic Apps**</a>

### <a href="#t08">**Section 08: Ionic Components Overview**</a>

### <a href="#t09">**Section 09: Styling & Theming Ionic Apps**</a>

### <a href="#t10">**Section 10: Handling User Input**</a>

</nav>

<br><br>

<hr>

<br><br>

## **Section 01: Getting Started** <a href="#navi">&#8593;</a> <span id="t01"></span>

<br><br>

1. <a href="#i0100">Introduction</a>
2. <a href="#i0101">What is Ionic?</a>
3. <a href="#i0102">A Closer Look at the Ionic Platform</a>
4. <a href="#i0103">First Ionic App</a>
5. <a href="#i0104">The History of Ionic</a>
6. <a href="#i0105">Ionic 4+ vs Ionic 3</a>
7. <a href="#i0106">How to Build Native Mobile Apps with Ionic</a>
8. <a href="#i0107">Comparing Ionic to Alternatives</a>
9. <a href="#i0108">Course Outline</a>
10. <a href="#i0109">How To Get The Most Out Of The Course</a>

<br><br>

### **Introduction** <span id="i0100"></span><a href="#t01">&#8593;</a>

<br>

Ionic allows you to build cross-platform mobile applications.

<br><br>

### **What is Ionic?** <span id="i0101"></span><a href="#t01">&#8593;</a>

<br>

Ionic is all about having one code base (HTML + CSS + JS) which is the code base for Web App.

You use Web Technologies (HTML/CSS/JS) & Tools added by Ionic to generate Web Apps, Progressive Web Apps, iOS & Android Apps, and even Electron (Desktop) Apps.

Electron is a Web Technology which allows you to wrap a Web App into a Desktop App.

#### What are Progressive Web Apps (PWAs)?

- Progressive Web App is a normal Web App that looks and feels a bit like a native mobile app. It isn't a native mobile app, you don't distribute through the App Stores, it's still a website which you can find via Google, but it's optimized to:
  - be reliable: Load fast and provide offline functionality
  - Fast: Respond quickly to user actions
  - Engaging: Feel like a native app on mobile devices (e.g. using location or camera)

#### Ionic is flexible

With Ionic you can build such a Progressive Web App, you can also build a normal Web App (which isn't particularly fast, and doesn't tap into native device features), and you can also get a real native app out of it. So you can really target the broadest range of channels possible.

<small>tap - meaning: https://ell.stackexchange.com/questions/58077/why-does-tap-into-mean-what-it-means</small>

#### Ionic Platform

- in it's core it's all about Ionic which is a set of Web Components (lots of those)
  - Web Components - Custom HTML Elements (they're just like Angular Components)
    - you get those from Ionic
  - these components are what you can see on the screen
- Capacitor - a tool which is capable of taking your existing Web App and wrapping it into a so-called "Web View" into a Native Mobile App
  - Web app, running as a native mobile app
- Ionic CLI (+ Angular CLI, ...other)
  - Project management, build workflow
    - creation, live-reload, bundling, optimization

<img src="./img/ionic-platform.png" alt="ionic-platform">

<br><br>

### **A Closer Look at the Ionic Platform** <span id="i0102"></span><a href="#t01">&#8593;</a>

<br>

#### Understanding the Ionic Ecosystem

<img src="./img/ionic-ecosystem.png" alt="ionic-ecosystem">

#### An Ionic Project

<img src="./img/ionic-project-overview-0.png" alt="ionic-project-0">

Ionic Framework -> Capacitor: Accesses a bridge between our web JavaScript code, and the Native Platform (iOS / Android / Desktop). So from our JavaScript Code we can trigger certain functions which then will in the end trigger native code on your device to for example open the camera, to get the user location, to show an alert or anything like that. This then can be done with real native code executed on your behalf without you needing to write it by tools like Capacitor (or Cordova).

#### This course covers:

- Ionic
- Angular
- Capacitor
- PWA / Mobile Apps / Possibly Desktop Apps

<img src="./img/ionic-course-overview.png" alt="course-covers">

<br><br>

### **First Ionic App** <span id="i0103"></span><a href="#t01">&#8593;</a>

<br>

Ionic Docs: https://ionicframework.com/docs/

Installation: https://ionicframework.com/docs/intro/cli

Install Ionic CLI: `npm install -g @ionic/cli`

Create app (start): `ionic start`

Starter Template: blank (for now)

Serve the App: `ionic serve`

Ionic UI Components (Web Components): https://ionicframework.com/docs/components

<br><br>

### **The History of Ionic** <span id="i0104"></span><a href="#t01">&#8593;</a>

<br>

Ionic 1, 2, & 3: Angular/Ionic (Angular Components)

Ionic 4+: JavaScript/Angular/React/Vue/Etc (Web Components)

<img src="./img/ionic-history.png" alt="ionic-history">

<br><br>

### **Ionic 4+ vs Ionic 3** <span id="i0105"></span><a href="#t01">&#8593;</a>

<br>

Ionic Migration (e.g. 3.x -> 4.x): https://ionicframework.com/docs/reference/migration

<img src="./img/ionic-3-vs-4.png" alt="v3-vs-v4">

<br><br>

### **How to Build Native Mobile Apps with Ionic** <span id="i0106"></span><a href="#t01">&#8593;</a>

<br>

#### Compilation

- You could compile your code (HTML/JS or TS/CSS) + Ionic (Components) into native Java or Objective C code - but you would have to do it for every single platform, that's why WebView is used (wrap app into WebView)
- or wrap into app with WebView
  - WebView - a special widget you can use in Native App Development which is a fully-fledged browser that doesn't look like one (you don't have url at the top, etc), it just is a full-screen browser
  - WebView - host a web page inside of a native app
    - e.g. you can open websites inside of an app (twitter/messenger, etc) - a built-in browser opens up
      - and that what is Ionic uses - with tools like Capacitor or Cordova you in the end get a mobile app shell that has such a WebView in it, and also then has some capabilites of launching a simple web server running mobile on the device that hosts your Ionic Web App inside of that WebView
        - then Cordova or Capacitor gives you a "bridge" through which you can tap into native device features from inside your Web App

<img src="./img/compiled-web-view.png" alt="compiled-WebView">

#### What's a "WebView"?

WebView - allows you to run your Web App inside of a Native App that renders this full-screen browser:

<img src="./img/webview.png" alt="WebView">

<br><br>

### **Comparing Ionic to Alternatives** <span id="i0107"></span><a href="#t01">&#8593;</a>

<br>

You can build mobile apps with cross-platform technologies (like HTML, JS, CSS) with other technologies, too. For example, React Native and Flutter would be popular alternatives.

Here's my detailed comparison of all these popular approaches: https://academind.com/learn/flutter/react-native-vs-flutter-vs-ionic-vs-nativescript-vs-pwa/

<br><br>

### **Course Outline** <span id="i0108"></span><a href="#t01">&#8593;</a>

<br>

<img src="./img/course-outline.png" alt="course-outline">

<br><br>

### **How To Get The Most Out Of The Course** <span id="i0109"></span><a href="#t01">&#8593;</a>

<br>

Problem Solving & How To Get The Most Out Of The Course

<img src="./img/how-to-get-the-most.png">

<br><br>

<hr>

<br><br>

## **Section 02: Angular Refresher** <a href="#navi">&#8593;</a> <span id="t02"></span>

<br>

#### 4 Types of Data-Binding in Angular

- property binding (e.g. `[property]="tsExpression"`),
- event binding (e.g. `(event)="tsExpression"`),
- string interpolation (e.g. `{{ person.name }}`),
- two-way binding (`[(ngModel)]="tsExpression"`)

<br><br>

<hr>

<br><br>

## **Section 03: Ionic Component Basics** <a href="#navi">&#8593;</a> <span id="t03"></span>

<br><br>

1. <a href="#i0300">Introduction</a>
2. <a href="#i0301">Core App Building Blocks</a>
3. <a href="#i0302">Under the Hood of Ionic Components</a>
4. <a href="#i0303">Setting Up a Non-Angular Ionic Project</a>
5. <a href="#i0304">Using Basic Ionic Components</a>
6. <a href="#i0305">More Basic Components</a>
7. <a href="#i0306">Component Categories</a>
8. <a href="#i0307">Using the Ionic Grid</a>
9. <a href="#i0308">Adding Icons & Using Slots</a>
10. <a href="#i0309">Using CSS Utility Attributes</a>
11. <a href="#i0310">Using Ionic Elements like "Normal" HTML Elements</a>
12. <a href="#i0311">Validating User Input</a>
13. <a href="#i0312">Creating Ionic Elements Programmatically</a>
14. <a href="#i0313">Finishing Up the Base JavaScript Logic</a>
15. <a href="#i0314">Finalizing the Layout</a>
16. <a href="#i0315">Using Controller Components</a>
17. <a href="#i0316">Why Angular?</a>
18. <a href="#i0317">Useful Resources & Links</a>

<br><br>

### **Introduction** <span id="i0300"></span><a href="#t03">&#8593;</a>

<br>

In this module:

- Overview of Ionic Components
- component demos
- how to memorize all the components

<br><br>

### **Core App Building Blocks** <span id="i0301"></span><a href="#t03">&#8593;</a>

<br>

- UI Components (this module)
  - e.g. ion-card, ion-image, ...
- Themes & Styles
  - CSS & CSS Variables
- Navigation
  - custom or built-in router
- State Management
  - Passing data around
- Native Device Features
  - Camera & More
- Ionic CLI & Publishing
  - From Development to Deployment

<br><br>

### **Under the Hood of Ionic Components** <span id="i0302"></span><a href="#t03">&#8593;</a>

<br>

Using the Ionic Components:

- ```html
  <ion-button fill="outline" color="primary"></ion-button>
  ```
  - use like a normal HTML Element
  - supports attributes & properties
  - emits (custom) events

#### How do Ionic 4 Web Components work?

<img src="./img/ionic-4-components.png" alt="ionic-4-components">

Ionic's GitHub: https://github.com/ionic-team/ionic-framework

Components: https://github.com/ionic-team/ionic-framework/tree/main/core/src/components

<br><br>

### **Setting Up a Non-Angular Ionic Project** <span id="i0303"></span><a href="#t03">&#8593;</a>

<br>

Using Ionic without any framework.

Import those: https://ionicframework.com/docs/intro/cdn#ionic-framework-cdn

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Budget Planner</title>
    <script
      type="module"
      src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"
    ></script>
    <script
      nomodule
      src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"
    />
  </head>
  <body></body>
</html>
```

<br><br>

### **Using Basic Ionic Components** <span id="i0304"></span><a href="#t03">&#8593;</a>

<br>

#### `<ion-app></ion-app>`

**Note**: `<ion-app></ion-app>` should always wrap your entire app/code.

You use it as a wrapper once per HTML file.

In Angular you use it as a global component wrapper (only once).

#### `<ion-content></ion-content>` - wrapper for your main content of your app

```html
<body>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Budget Planner</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content> </ion-content>
  </ion-app>
</body>
```

<br><br>

### **More Basic Components** <span id="i0305"></span><a href="#t03">&#8593;</a>

<br>

```html
<ion-content>
  <ion-card>
    <ion-card-header>
      <ion-card-title>New Expense</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-item>
        <ion-label position="floating">Expense Reason</ion-label>
        <ion-input type="text"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Expense Amount</ion-label>
        <ion-input type="number"></ion-input>
      </ion-item>
    </ion-card-content>
  </ion-card>
</ion-content>
```

<br><br>

### **Component Categories** <span id="i0306"></span><a href="#t03">&#8593;</a>

<br>

To find a solution for the problem of our components sometimes not having the right width on different screen sizes, it's important to understand that Ionic at its core has 3 different types of components:

<img src="./img/core-component-types.png" alt="core-comp-types">

<br><br>

### **Using the Ionic Grid** <span id="i0307"></span><a href="#t03">&#8593;</a>

<br>

ion-grid: https://ionicframework.com/docs/api/grid

<br>

Each grid has rows, rows are made up of columns.

`<ion-col size="1 to 12"></ion-col>`

- size - 1 to 12 meaning how much space this column should take (1/12 to 12/12 of the entire width)
  - e.g. size="6" will take half of the width

<br>

Setting different width depending on the screen size:

- size-xs
- size-sm
- size-md
- size-lg

e.g. `size-md="6"` (size for medium-size devices AND higher)

<br>

offsetting columns (centering in this case): `size-md="6" offset="3"`

offset for medium-size devices AND higher: `offset-md="3"`

```html
<ion-col size-md="6" offset-md="3"> </ion-col>
```

offset-md="3" because we want to have 3 columns on the left & 3 columns on the right, total of 12/12 screen width.

<br>

```html
<ion-grid>
  <ion-row>
    <ion-col size-md="6" offset-md="3">
      <ion-card>
        <ion-card-header>
          <ion-card-title>New Expense</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">Expense Reason</ion-label>
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Expense Amount</ion-label>
            <ion-input type="number"></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>
    </ion-col>
  </ion-row>
</ion-grid>
```

<br><br>

### **Adding Icons & Using Slots** <span id="i0308"></span><a href="#t03">&#8593;</a>

<br>

#### Buttons

https://ionicframework.com/docs/api/button

https://ionicframework.com/docs/api/button#fill

#### Icons

https://ionic.io/ionicons

#### Slots

Slots - default Web Component concept which allows Web Components to reserve certain places in their built-in markup where certain content should be rendered, or can be targeted to be redered.

Slots - with slots you can tell the ion-icon where it should go (e.g. in a button).

https://ionicframework.com/docs/api/button#slots

<br>

```html
<ion-button fill="outline" color="danger">
  <ion-icon slot="start" name="close-outline"></ion-icon>
  Clear
</ion-button>
<ion-button>
  <ion-icon slot="start" name="add-outline"></ion-icon>
  Add Expense
</ion-button>
```

<br><br>

### **Using CSS Utility Attributes** <span id="i0309"></span><a href="#t03">&#8593;</a>

<br>

To control general things like a margin, or paddings inside of elements, or position inside of a container or a box, you can use a utility features provided by Ionic. A couple of utility CSS classes or attributes you can add to elements to have some default CSS.

<br>

Guide -> Layout -> CSS Utilities: https://ionicframework.com/docs/layout/css-utilities

<br>

Adding vertical margin (to top & bottom): `ion-margin-vertical`

Align text to the right: `ion-text-right`

<br>

`class="ion-margin-vertical ion-text-right"`

<br>

```html
<div class="ion-margin-vertical ion-text-right">
  <ion-button fill="outline" color="danger">
    <ion-icon slot="start" name="close-outline"></ion-icon>
    Clear
  </ion-button>
  <ion-button>
    <ion-icon slot="start" name="add-outline"></ion-icon>
    Add Expense
  </ion-button>
</div>
```

Note: Keep in mind that this has the advantage of always adding the same default margin, so it means that you don't have to worry about assigning a margin that is too slim, and therefore doesn't fit the general look of the rest of the page. You can always overwrite the default margin.

<br><br>

### **Using Ionic Elements like "Normal" HTML Elements** <span id="i0310"></span><a href="#t03">&#8593;</a>

<br>

```html
<script defer src="app.js"></script>
```

```js
const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtm = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");

confirmBtn.addEventListener("click", () => {
  console.log("it works!");
});
```

<br><br>

### **Validating User Input** <span id="i0311"></span><a href="#t03">&#8593;</a>

<br>

```js
confirmBtn.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }

  console.log(enteredReason, enteredAmount);
});
```

<br><br>

### **Creating Ionic Elements Programmatically** <span id="i0312"></span><a href="#t03">&#8593;</a>

<br>

`ion-list`: element provided by Ionic that helps us structure list data (structure elements beneath each other, and display them as a nice list).

You can use ion-item inside of an ion-list to have a nice looking list item.

<br>

```html
<ion-row>
  <ion-col>
    <ion-list id="expenses-list"></ion-list>
  </ion-col>
</ion-row>
```

```js
const newItem = document.createElement("ion-item");
newItem.textContent = enteredReason + ": $" + enteredAmount;

expensesList.appendChild(newItem);
```

<br><br>

### **Finishing Up the Base JavaScript Logic** <span id="i0313"></span><a href="#t03">&#8593;</a>

<br>

```html
<ion-row>
  <ion-col>
    <p>Total Expenses: <span id="total-expenses"></span></p>
  </ion-col>
</ion-row>
```

```js
// ...
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

confirmBtn.addEventListener("click", () => {
  // ...
  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": $" + enteredAmount;

  expensesList.appendChild(newItem);

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

cancelBtm.addEventListener("click", () => {
  clear();
});
```

<br><br>

### **Finalizing the Layout** <span id="i0314"></span><a href="#t03">&#8593;</a>

<br>

```html
<ion-row>
  <ion-col size-md="6" offset-md="3">
    <p class="ion-margin">Total Expenses: <span id="total-expenses"></span></p>
  </ion-col>
</ion-row>
```

<br><br>

### **Using Controller Components** <span id="i0315"></span><a href="#t03">&#8593;</a>

<br>

Controller Components - for example an alert.

https://ionicframework.com/docs/api/alert

<br>

```js
async function presentAlert() {
  const alert = document.createElement("ion-alert");
  alert.header = "Invalid inputs";
  alert.subHeader = "";
  alert.message = "Please enter valid reason and amount!";
  alert.buttons = ["OK"];

  document.body.appendChild(alert);
  await alert.present();
}
```

<br>

#### Final Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Budget Planner</title>
    <script
      type="module"
      src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"
    ></script>
    <script
      nomodule
      src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"
    />
  </head>
  <body>
    <ion-app>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Budget Planner</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col size-md="6" offset-md="3">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>New Expense</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-item>
                    <ion-label position="floating">Expense Reason</ion-label>
                    <ion-input type="text" id="input-reason"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Expense Amount</ion-label>
                    <ion-input type="number" id="input-amount"></ion-input>
                  </ion-item>
                  <div class="ion-margin-vertical ion-text-right">
                    <ion-button fill="outline" color="danger" id="btn-cancel">
                      <ion-icon slot="start" name="close-outline"></ion-icon>
                      Clear
                    </ion-button>
                    <ion-button id="btn-confirm">
                      <ion-icon slot="start" name="add-outline"></ion-icon>
                      Add Expense
                    </ion-button>
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size-md="6" offset-md="3">
              <ion-list id="expenses-list"></ion-list>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size-md="6" offset-md="3">
              <p class="ion-margin">
                Total Expenses: <span id="total-expenses"></span>
              </p>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-app>
    <script defer src="app.js"></script>
  </body>
</html>
```

```js
const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtm = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");

let totalExpenses = 0;

async function presentAlert() {
  const alert = document.createElement("ion-alert");
  alert.header = "Invalid inputs";
  alert.subHeader = "";
  alert.message = "Please enter valid reason and amount!";
  alert.buttons = ["OK"];

  document.body.appendChild(alert);
  await alert.present();
}

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

confirmBtn.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    presentAlert();
    return;
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": $" + enteredAmount;

  expensesList.appendChild(newItem);

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

cancelBtm.addEventListener("click", () => {
  clear();
});
```

<br><br>

### **Why Angular?** <span id="i0316"></span><a href="#t03">&#8593;</a>

<br>

<img src="./img/angular.png">

<br><br>

### **Useful Resources & Links** <span id="i0317"></span><a href="#t03">&#8593;</a>

<br>

Ionic Component Docs: https://ionicframework.com/docs/components/

<br><br>

<hr>

<br><br>

## **Section 04: Angular + Ionic** <a href="#navi">&#8593;</a> <span id="t04"></span>

<br><br>

1. <a href="#i0400">Creating a New Ionic Angular Project</a>
2. <a href="#i0401">How Angular & Ionic Work Together</a>
3. <a href="#i0402">Using Angular Features on Ionic Components</a>
4. <a href="#i0403">Setting Up Angular Routes</a>
5. <a href="#i0404">Using Angular Features on Ionic Components</a>
6. <a href="#i0405">Extracting and Displaying Route Param Data</a>
7. <a href="#i0406">Navigating Between Pages</a>
8. <a href="#i0407">Deleting a Recipe</a>
9. <a href="#i0408">Injecting Ionic Controllers</a>
10. <a href="#i0409">Angular Components vs Ionic Components</a>

<br><br>

### **Creating a New Ionic Angular Project** <span id="i0400"></span><a href="#t04">&#8593;</a>

<br>

`ionic start`

<br><br>

### **How Angular & Ionic Work Together** <span id="i0401"></span><a href="#t04">&#8593;</a>

<br>

The @ionic/angular package - wrapper around Ionic Web Components (Angular specific) which makes the usage of those easier and more efficient in Angular Projects:

<img src="./img/ionic-angular-wrapper.png">

`IonicModule.forRoot()` - includes those Ionic Web Components

<br>

Run Ionic App: `ionic serve`

<br><br>

### **Adding & Loading a New Page** <span id="i0402"></span><a href="#t04">&#8593;</a>

<br>

`ionic generate`

- page
- component
- service
- module
- class
- directive
- guard

<br>

`ionic generate page` - generates a new "page" - a new component, with a module & routing module.

It also includes that "page" in app-routing module to lazy-load it.

<br>

```html
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```

`ion-app` - wrapper around your entire application

`ion-router-outlet` - directive added by @ionic/angular

<br><br>

### **Using Angular Features on Ionic Components** <span id="i0403"></span><a href="#t04">&#8593;</a>

<br>

- `<ion-avatar></ion-avatar>` - component that wraps the `<ion-img></ion-img>`
- `<ion-img></ion-img>` - it's like an img element, but it is also loaded only when it is visible

<br>

```html
<ion-content>
  <ion-list>
    <ion-item *ngFor="let recipe of recipes">
      <ion-avatar slot="start">
        <ion-img [src]="recipe.imageUrl"></ion-img>
      </ion-avatar>
      <ion-label> {{ recipe.title }} </ion-label>
    </ion-item>
  </ion-list>
</ion-content>
```

<br><br>

### **Managing State with Services** <span id="i0404"></span><a href="#t04">&#8593;</a>

<br>

create a new page (component + routing + lazy loading): `ionic generate page page-name`

<br>

```ts
  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    // find - if returns true - that means this is the object we're looking for
    // compare the id of the recipe I'm looking at with the recipeId I got as an argument
    // if these are equal - I have the recipe I want to return
    // wrap into object, copy everything with spread operator
    return { ...this.recipes.find((recipe) => recipe.id === recipeId) };
  }
```

<br><br>

### **Extracting and Displaying Route Param Data** <span id="i0405"></span><a href="#t04">&#8593;</a>

<br>

CSS Utilities: https://ionicframework.com/docs/layout/css-utilities

<br>

```ts
this.activatedRoute.paramMap.subscribe((paramMap) => {
  if (!paramMap.has("recipeId")) {
    this.router.navigate(["/recipes"]);
    return;
  }
  const recipeId = paramMap.get("recipeId");
  this.loadedRecipe = this.recipesService.getRecipe(recipeId);
});
```

<br><br>

### **Navigating Between Pages** <span id="i0406"></span><a href="#t04">&#8593;</a>

<br>

- `routerLink`
- ```html
  <ion-buttons slot="start">
    <ion-back-button defaultHref="/recipes"></ion-back-button>
  </ion-buttons>
  ```
  - `defaultHref` - if there is no browser history, navigate to `defaultHref="path"`

So you use Angular features, and Ionic just adds animations, Ionic also keeps track of your navigation moves - it constructs a stack of pages under the hood

<br><br>

### **Deleting a Recipe** <span id="i0407"></span><a href="#t04">&#8593;</a>

<br>

```html
<ion-buttons slot="primary">
  <ion-button (click)="onDeleteRecipe()">
    <ion-icon name="trash-outline" slot="icon-only"></ion-icon>
  </ion-button>
</ion-buttons>
```

```ts
deleteRecipe(recipeId: string) {
  // filter: true - keep element, false - discard
  // keep all the elements but the element of id - recipeId
  // so if they are not equal - return true, otherwise false - discard object
  this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  // this.recipes = this.recipes.filter((recipe) => {
  //   if (recipe.id === recipeId) {
  //     return false;
  //   }
  // });
}
```

<br><br>

### **Injecting Ionic Controllers** <span id="i0408"></span><a href="#t04">&#8593;</a>

<br>

```ts
constructor(private alertCtr: AlertController) {}

onDeleteRecipe() {
  this.alertCtr
    .create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          // close dialog (role: 'cancel')
          role: 'cancel',
        },
        {
          text: 'Delete',
          // handler - holds a function that will execute
          // when this button is pressed
          handler: () => {
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          },
        },
      ],
    })
    .then((alertEl) => alertEl.present());
}
```

<br><br>

### **Angular Components vs Ionic Components** <span id="i0409"></span><a href="#t04">&#8593;</a>

<br>

<img src="./img/ng-components-ionic-components.png">

<br><br>

<hr>

<br><br>

## **Section 05: Building Native Apps with Capacitor** <a href="#navi">&#8593;</a> <span id="t05"></span>

<br><br>

### **Creating an Android App** <span id="i0500"></span><a href="#t05">&#8593;</a>

<br>

Capacitor docs: https://capacitorjs.com

Ionic - Android Development docs: https://ionicframework.com/docs/developing/android

<br>

Project Setup:

https://ionicframework.com/docs/developing/android#project-setup

<br>

Steps to create Android App:

- Build your App: `ng build`
- run: `ionic capacitor add android`
- set the Package ID. `capacitor.config.ts`:

  ```ts
  import { CapacitorConfig } from "@capacitor/cli";

  const config: CapacitorConfig = {
    appId: "com.udemy.course.ionic.angular",
    appName: "ionic-angular-course",
    webDir: "www",
    bundledWebRuntime: false,
  };

  export default config;
  ```

  - it has to be unique ID

- run: `ionic capacitor copy android`

<br>

You can also run: `ionic capacitor run android` (usually does not work, use your android device in case it doesn't)

- it will run `ng build`, `ionic capacitor add android` plus it will open your app in Android Studio.

<br>

if something doesn't work try those:

`ionic capacitor sync`

`ionic capacitor open android`

<br>

Live reload: `ionic capacitor run android -l`

<br><br>

<hr>

<br><br>

## **Section 06: Debugging** <a href="#navi">&#8593;</a> <span id="t06"></span>

<br><br>

1. <a href="#i0600">Introduction</a>

<br><br>

### **Introduction** <span id="i0600"></span><a href="#t06">&#8593;</a>

<br>

In this module:

- Debugging in the Browser
- Debugging Native Apps

<br>

Debugging (browser):

- Error Messages & console.log
- browser DevTools (console/elements/sources(breakpoints)/network/performance/memory/etc)

Debugging (android):

- `chrome://inspect/#devices`
- inspect
  - there you can use all of the chrome devTools

<br><br>

<hr>

<br><br>

## **Section 07: Navigation & Routing in Ionic Apps** <a href="#navi">&#8593;</a> <span id="t07"></span>

<br><br>

1. <a href="#i0700">Introduction</a>
2. <a href="#i0701">How Routing Work In An Ionic + Angular App</a>
3. <a href="#i0702">Ionic Page Caching & Extra Lifecycle Hooks</a>
4. <a href="#i0703">Planning the Course Project</a>
5. <a href="#i0704">Creating Our App Pages</a>
6. <a href="#i0705">Adding Tabs to the App</a>
7. <a href="#i0706">Outputting "Places"</a>
8. <a href="#i0707">Adding Forward Navigation</a>
9. <a href="#i0708">Going Back with NavController</a>
10. <a href="#i0709">Navigating via Toolbar Buttons</a>
11. <a href="#i0710">Adding a SideDrawer</a>
12. <a href="#i0711">Assigning an id to menu & using it</a>
13. <a href="#i0712">Opening + Closing the SideDrawer</a>
14. <a href="#i0713">Adding Links & Switching Pages</a>
15. <a href="#i0714">Adding the Auth Service</a>
16. <a href="#i0715">Creating and Opening a Modal</a>
17. <a href="#i0716">Closing the Modal & Passing Data</a>
18. <a href="#i0717">Useful Resources & Links</a>

<br><br>

### **Introduction** <span id="i0700"></span><a href="#t07">&#8593;</a>

<br>

In this module:

- Angular Router & NavController
- Using Tabs
- Using a SideDrawer
- Overlays (Modal)
- Guards

<br><br>

### **How Routing Work In An Ionic + Angular App** <span id="i0701"></span><a href="#t07">&#8593;</a>

<br>

- `ion-router` - provides animations/transitions when switching between different routes/pages
- (stack) pages in Ionic are cached (stored in memory)

<img src="./img/ionic-nav.png">

<br><br>

### **Ionic Page Caching & Extra Lifecycle Hooks** <span id="i0702"></span><a href="#t07">&#8593;</a>

<br>

- `ionViewWillEnter` - runs after `ngOnInit` - executes right after the content of the page has been loaded
- `ionViewDidEnter` - runs right afrer `ionViewWillEnter`

both are called whenever a page becomes visible

<br>

If a page is in cache, and you're not seeing it because another page is on top of it (in the stack of pages), it will actually never be destroyed, so ngOnDestroy will never be called.

<br>

- `ionViewWillLeave`
- `ionViewDidLeave`

both are called whenever a page becomes invisible, whenever a new page is on top of it, but it will also be called in places where ngOnDestroy is not called.

<img src="./img/ng-ion-page-lifecycle.png">

<br>

So this is this stack of pages and how Ionic caches pages. You have to be aware of the fact that ngOnInit and ngOnDestroy will NOT run on every page every time you leave it, it depends whether you're popping the page or pushing a new page on top of it. There you should rely on those ion hooks to manage state data - whenever a page becomes visible or invisible.

<br>

```ts
ngOnInit() {
  console.log('ngOnInit');
  console.log(this.recipes);
}

ionViewWillEnter() {
  this.recipes = this.recipesService.getAllRecipes();
  console.log('ionViewWillEnter');
}

ionViewDidEnter() {
  console.log('ionViewDidEnter');
}

ionViewWillLeave() {
  console.log('ionViewWillLeave');
}

ionViewDidLeave() {
  console.log('ionViewDidLeave');
}

ngOnDestroy(): void {
  console.log('ngOnDestroy');
}
```

<br><br>

### **Planning the Course Project** <span id="i0703"></span><a href="#t07">&#8593;</a>

<br>

<img src="./img/course-project-plan-p0.png">
<img src="./img/course-project-plan-p1.png">

<br><br>

### **Creating Our App Pages** <span id="i0704"></span><a href="#t07">&#8593;</a>

<br>

`ionic generate page ...`

<br><br>

### **Adding Tabs to the App** <span id="i0705"></span><a href="#t07">&#8593;</a>

<br>

Different pages have their own stack, so the navigation stack is not mixed.

<br>

https://ionicframework.com/docs/api/tabs

<br>

```html
<ion-tab-button tab="discover">
  <ion-label>Discover</ion-label>
  <ion-icon name="search"></ion-icon>
</ion-tab-button>
```

- `tab="uniqueIdentifier"`
  - the identifier has to match the name of your route
    - for example: `{ path: 'discover' }`, `tab="discover"`

<br><br>

### **Outputting "Places"** <span id="i0706"></span><a href="#t07">&#8593;</a>

<br>

`<ion-thumbnail></ion-thumbnail>` - it's basically ion-avatar, but doesn't render a rounded image, instead it renders a squre image

```html
<ion-content>
  <ion-grid>
    <ion-row>
      <ion-col size="12" size-sm="8" offset-sm="2" class="ion-text-center">
        <ion-card>
          <ion-card-header>
            <ion-card-title>{{ loadedPlaces[0].title }}</ion-card-title>
            <ion-card-subtitle>
              {{ loadedPlaces[0].price | currency }} / Night
            </ion-card-subtitle>
          </ion-card-header>
          <ion-img [src]="loadedPlaces[0].imageUrl"></ion-img>
          <ion-card-content>
            <p>{{ loadedPlaces[0].description }}</p>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="12" size-sm="8" offset-sm="2" class="ion-text-center">
        <ion-list>
          <ion-item *ngFor="let loadedPlace of loadedPlaces.slice(1)">
            <ion-thumbnail slot="start">
              <ion-img [src]="loadedPlace.imageUrl"></ion-img>
            </ion-thumbnail>
            <ion-label>
              <h2>{{ loadedPlace.title }}</h2>
              <p>{{ loadedPlace.description }}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>
```

<br><br>

### **Adding Forward Navigation** <span id="i0707"></span><a href="#t07">&#8593;</a>

<br>

- `routerDirection="direction"` - this gives Ionic a hint about navigation direction (so it can play different animations)
  - forward
  - backward
- `detail` - (html) attribute - renders arrow icon (e.g. forward arrow)

<br><br>

### **Going Back with NavController** <span id="i0708"></span><a href="#t07">&#8593;</a>

<br>

First Option:

```html
<ion-buttons slot="start">
  <ion-back-button defaultHref="/places/tabs/discover"></ion-back-button>
</ion-buttons>
```

Ionic by default plays the forward animation if it doesn't know what the previous page was (or there could be no previous page).

To use the proper animation we will use navController:

```ts
  constructor(private navController: NavController) {}

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');

    // navigateBack takes either array of path segments or just the url
    this.navController.navigateBack('/places/tabs/discover');
  }
```

Under the hood `navController` uses the Angular Router.

<br>

A different way of navigating back:

```ts
// another way of navigating back - use pop() - it will pop the last page off the stack
// the problem is it won't work if the stack of pages is empty
this.navController.pop();
```

<br><br>

### **Navigating via Toolbar Buttons** <span id="i0709"></span><a href="#t07">&#8593;</a>

<br>

any button you add to your toolbar should always be warpped in ion-buttons group.

<br><br>

### **Adding a SideDrawer** <span id="i0710"></span><a href="#t07">&#8593;</a>

<br>

- official docs: https://ionicframework.com/docs/api/menu

- `ion-menu` - needs contentId="id"
- `ion-router-outlet` - needs id of that contentId set in ion-menu

menu:

```html
<ion-app>
  <ion-menu side="start" contentId="menuContent">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Title</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">Content goes here</ion-content>
  </ion-menu>
  <ion-router-outlet id="menuContent"></ion-router-outlet>
</ion-app>
```

menu content:

```html
<ion-content class="ion-padding">
  <ion-list>
    <ion-item lines="none">
      <ion-icon name="business" slot="start"></ion-icon>
      <ion-label>Discover Places</ion-label>
    </ion-item>
    <ion-item lines="none">
      <ion-icon name="checkbox-outline" slot="start"></ion-icon>
      <ion-label>Your Bookings</ion-label>
    </ion-item>
    <ion-item lines="none">
      <ion-icon name="exit" slot="start"></ion-icon>
      <ion-label>Logout</ion-label>
    </ion-item>
  </ion-list>
</ion-content>
```

<br><br>

### **Assigning an id to menu & using it** <span id="i0711"></span><a href="#t07">&#8593;</a>

<br>

assign an id to a menu:

```html
<ion-menu side="start" contentId="menuContent" menuId="mainMenu">
  <!-- header, content, ... -->
</ion-menu>
<!-- outlet... -->
```

Now use that menu (of this id) anywhere you like:

```html
<ion-buttons slot="start">
  <ion-menu-button menu="mainMenu"></ion-menu-button>
</ion-buttons>
```

<br><br>

### **Opening + Closing the SideDrawer** <span id="i0712"></span><a href="#t07">&#8593;</a>

<br>

To add this functionality, you go to the page/component where you want to add hamburger icon, and you add it to the toolbar.

- opening menu with hamburger icon:

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Component Title</ion-title>
  </ion-toolbar>
</ion-header>
```

- opening menu programmatically:

```html
<ion-buttons slot="start">
  <ion-button (click)="onOpenMenu()">Open</ion-button>
</ion-buttons>
```

```ts
constructor(private menuController: MenuController) {}

onOpenMenu() {
  this.menuController.open('menuId');

  // or toggle it
  this.menuController.toggle('menuId');
}
```

<br><br>

### **Adding Links & Switching Pages** <span id="i0713"></span><a href="#t07">&#8593;</a>

<br>

For an item to behave and look like a button, add `button` attribute:

```html
<ion-item button>
  <!-- ... -->
</ion-item>
```

Closing menu (when you click an item) - we got two options:

- add click listener, inject `MenuController`, then manually call `close()`
- wrap your list items (or anything) with `ion-menu-toggle`

You can wrap your list items with `ion-menu-toggle` to close (or toggle to be precise) the main menu. You can wrap anything with `ion-menu-toggle` in your app that should close/toggle the main menu.

<br>

ion-toggle-menu takes an id in case you're using one (`<ion-menu-toggle menu="mainMenu">`)

<br>

Example:

```html
<ion-menu-toggle menu="mainMenu">
  <ion-item lines="none" routerLink="/places/tabs/discover">
    <ion-icon name="business" slot="start"></ion-icon>
    <ion-label>Discover Places</ion-label>
  </ion-item>
</ion-menu-toggle>
```

<br><br>

### **Adding the Auth Service** <span id="i0714"></span><a href="#t07">&#8593;</a>

<br>

`canLoad` guard - runs before lazy loading code is fetched

<br>

`canLoad` - return true or false - determines whether you can go further or not

<br><br>

### **Creating and Opening a Modal** <span id="i0715"></span><a href="#t07">&#8593;</a>

<br>

Docs: https://ionicframework.com/docs/api/modal

Controller Modals: https://ionicframework.com/docs/api/modal#controller-modals

<br>

**Note**: If you had multiple components in your app which are in different Angular Modules that would open one and the same modal component, then you could create a shared module with that (modal) component in it that you import into all the other components where you need to open it.

<br>

- Creating & Opening a modal
  - `ionic generate component compName`
  - declare it in place where you need it OR create a module for it if you're going to share it across other components
  - use `ModalController` to create/present it

<br>

Example Modal Component

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Modal title</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <h1>Modal content</h1>
</ion-content>
```

Use/call in another component:

```html
<ion-button color="primary" class="ion-margin" (click)="onOpenModal()">
  Open Modal
</ion-button>
```

```ts
constructor(private modalController: ModalController) {}

onOpenModal() {
  this.modalController
    .create({
      component: SampleModalComponent,
    })
    .then((modalElement) => modalElement.present());
}
```

<br><br>

### **Closing the Modal & Passing Data** <span id="i0716"></span><a href="#t07">&#8593;</a>

<br>

- (1/2) Pass data to modal:

```ts
data: someType;

onModalOpen() {
  this.modalController
    .create({
      component: SampleModalComponent,
      componentProps: { modalDataKey: this.data },
      // you can also set the id (can be useful for dismissing)
      // id: 'modalId'
    })
    .then((modalElement) => modalElement.present());
}
```

- (2/2) pass data to modal: `componentProps: { anyKey: value }`

<br>

- Use/retrieve that data in the modal:

```ts
@Input() modalDataKey: someType;
```

```html
<ion-header>
  <ion-toolbar>
    <ion-title>{{ data.title }}</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-text-center ion-padding">
  <p>{{ data.description }}</p>
</ion-content>
```

<br>

Close/dismiss a modal:

```ts
constructor(private modalController: ModalController) {}

onCancel() {
  this.modalController.dismiss();
}
```

<br>

You can pass arguments when dismissing/closing a modal:

- data
- role (e.g. cancel)
- id (it could be useful if you have multiple modals open)

<br>

Adding a listener on modal to listen for modal data:

```ts
  onBookPlace() {
    this.modalController
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place },
      })
      .then((modalElement) => {
        modalElement.present();
        return modalElement.onDidDismiss(); // here
      })
      .then((resultData) => {
        console.log(resultData.data, resultData.role);
      });
  }
```

<br>

(course project's) Modal Code:

- create modal

```html
<!-- ... -->

<ion-content class="ion-text-center ion-padding">
  <p>{{ selectedPlace.description }}</p>
  <ion-button color="primary" (click)="onBookPlace()">Book!</ion-button>
</ion-content>
```

```ts
// ...
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(private modalController: ModalController) {}

  onCancel() {
    this.modalController.dismiss(null, "cancel");
  }

  onBookPlace() {
    this.modalController.dismiss(
      { message: "this is a dummy message" },
      "confirm"
    );
  }
}
```

- present/use modal & get/pass data around:

```html
<!-- ... -->

<ion-content class="ion-padding">
  <ion-button color="primary" class="ion-margin" (click)="onBookPlace()">
    Book
  </ion-button>
</ion-content>
```

```ts
// ...
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private navController: NavController,
    private placesService: PlacesService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController
  ) {}

  // ...

  onBookPlace() {
    // this.navController.navigateBack('/places/tabs/discover');
    this.modalController
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place },
      })
      .then((modalElement) => {
        modalElement.present();
        return modalElement.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData.data, resultData.role);

        if (resultData.role === "confirm") {
          console.log("BOOKED");
        }
      });
  }
}
```

<br><br>

### **Useful Resources & Links** <span id="i0717"></span><a href="#t07">&#8593;</a>

<br>

- Angular + Ionic Navigation Docs: https://ionicframework.com/docs/navigation/angular

<br><br>

<hr>

<br><br>

## **Section 08: Ionic Components Overview** <a href="#navi">&#8593;</a> <span id="t08"></span>

<br><br>

1. <a href="#i0800">Introduction</a>
2. <a href="#i0801">Attributes & Slots</a>
3. <a href="#i0802">Ionic Grid Basics</a>
4. <a href="#i0803">Controlling Grid Column Sizes</a>
5. <a href="#i0804">Controlling Grid Alignment</a>
6. <a href="#i0805">Responsive Grid Sizing</a>
7. <a href="#i0806">Grid Summary</a>
8. <a href="#i0807">ion-list vs ion-grid</a>
9. <a href="#i0808">ion-label & ion-item</a>
10. <a href="#i0809">ion-text</a>
11. <a href="#i0810">Swipeable List Items</a>
12. <a href="#i0811">Swipeable Bookings</a>
13. <a href="#i0812">Understanding Virtual Scrolling</a>
14. <a href="#i0813">Implementing Virtual Scrolling</a>
15. <a href="#i0814">Virtual Scrolling Bugs</a>
16. <a href="#i0815">Adding Image Elements</a>
17. <a href="#i0816">Segmented Buttons</a>
18. <a href="#i0817">Adding a Spinner</a>
19. <a href="#i0818">Using the ActionSheet Controller</a>

<br><br>

### **Introduction** <span id="i0800"></span><a href="#t08">&#8593;</a>

<br>

In this module:

- Understanding Attributes & Slots
- The Grid Layout
- `<ion-list>`, `<ion-item>`, etc
- More Components
- "Controlller" Components

<br><br>

### **Attributes & Slots** <span id="i0801"></span><a href="#t08">&#8593;</a>

<br>

- slot allows you to define a place in your web component where external content can be rendered in:
  - slot="start" - render content at the left (start) of the component
  - (null - default)
  - slot="end" - render content at the right (end) of the component

<br><br>

### **Ionic Grid Basics** <span id="i0802"></span><a href="#t08">&#8593;</a>

<br>

<img src="./img/ionic-grid-layout.png" alt="ionic-grid-layout">

<br>

Remove padding (class): `ion-no-padding`

<br>

By default if you add one column it will take the full width.

<br><br>

### **Controlling Grid Column Sizes** <span id="i0803"></span><a href="#t08">&#8593;</a>

<br>

- offset="4" - "push" by 4

```html
<ion-grid>
  <ion-row>
    <ion-col size="4" offset="4">Row 1 Col 1</ion-col>
    <ion-col size="4">Row 1 Col 2</ion-col>
  </ion-row>
</ion-grid>
```

<br>

- "push" by 2 - in this case - center:

<br>

```html
<ion-grid>
  <ion-row>
    <ion-col size="4" offset="2">Row 1 Col 1</ion-col>
    <ion-col size="4">Row 1 Col 2</ion-col>
  </ion-row>
</ion-grid>
```

<br><br>

### **Controlling Grid Alignment** <span id="i0804"></span><a href="#t08">&#8593;</a>

<br>

by default row is as high as its tallest child

<br>

https://ionicframework.com/docs/layout/grid

https://ionicframework.com/docs/api/grid

<br>

Vertical Positioning (align-items):

- `ion-align-items-start` - each item's height will be set according to its content, and also align the items at the start (top) - just like flex's `align-items="start"`
- `ion-align-items-end` - does the same thing except items will be placed in the "end" - just like flex's `align-items="end"`
- `ion-align-items-center` - does the same thing AND centers the items vertically

<br>

Horizontal positioning (justify-content):

- `ion-justify-content-start` - align items horizontally to the left
- `ion-justify-content-end` - align items horizontally to the right
- `ion-justify-content-center` - center items horizontally

<br><br>

### **Responsive Grid Sizing** <span id="i0805"></span><a href="#t08">&#8593;</a>

<br>

Default breakpoints: https://ionicframework.com/docs/layout/grid#default-breakpoints

<br>

E.g.:

- size-sm="value"
- offset-sm="value"
  - value: 1-12

<br><br>

### **Grid Summary** <span id="i0806"></span><a href="#t08">&#8593;</a>

<br>

Using fixed pixel width instead of the full width:

By default the grid will take the full width of the screen, with `fixed` attribute it takes breakpoints into account.

<br>

`<ion-grid fixed>...</ion-grid>`

<br>

it can be useful if at some breakpoint you don't want it to take the full width...

<br><br>

### **ion-list vs ion-grid** <span id="i0807"></span><a href="#t08">&#8593;</a>

<br>

- `ion-list`
  - used to render `ion-item`s vertically
  - use when you want to structure content from top to bottom, and you don't need specific control across its width
  - should ONLY contain `ion-item`s
  - used for scrollable, vertical list content
  - you can wrap `ion-list` with `ion-grid` (col)
- `ion-grid`
  - renders ANY content inside of `ion-col`s
  - ion-grid>ion-row>ion-col\*(1-12)
  - ion-col can contain any other content you need - div/p/h1, ion-list, any other component or element

<br>

Summary:

- Use Grid to render more complex structure - where you need to control width/height, breakpoints, alignment
- Use List to render items vertically - from top to bottom
  - set width either via CSS or by wrapping it into grid
    - (ion-grid>ion-row>ion-col>ion-list>ion-item>...)

<br><br>

### **ion-label & ion-item** <span id="i0808"></span><a href="#t08">&#8593;</a>

<br>

Note: Remember that in an `ion-list` you should ONLY have `ion-item`s. Of course you can use `ion-item`s outside of `ion-list`.

<br>

- `ion-label` - you use it typically inside of `ion-item`s to wrap any text-related content

Example:

```html
<ion-list>
  <ion-item>
    <ion-label position="floating">E-Mail</ion-label>
    <ion-input></ion-input>
  </ion-item>
</ion-list>
```

- `ion-item` - is a nice wrapper for any content inside of an `ion-list`, it is usually used to wrap ion-label and ion-input to apply special styling.

<br>

Summary:

<br>

<img src="./img/ion-item.png" alt="ion-item">

<br>

<img src="./img/ion-label.png" alt="ion-label">

<br><br>

### **ion-text** <span id="i0809"></span><a href="#t08">&#8593;</a>

<br>

```html
<p>
  <ion-text color="danger"> {{ loadedPlaces[0].description }} </ion-text>
</p>
```

You usually use `ion-text` when you want to just style some text - for example change the color.

If you want to have multiple text elements (h1, p, etc) in an `ion-item` - use `ion-label`

<br><br>

### **Swipeable List Items** <span id="i0810"></span><a href="#t08">&#8593;</a>

<br>

ion-divider and ion-group are components used to split your list into multiple sections:

- https://ionicframework.com/docs/api/item-group
- https://ionicframework.com/docs/api/item-divider

<br>

Sliding ion-items:

https://ionicframework.com/docs/api/item-sliding

<br>

- `ion-item-sliding` - used to wrap the `ion-item`
- `ion-item-options` - placed inside of `ion-item-sliding`, next to `ion-item`
  - `ion-item-option` - option of a slided item
    - `color` attribute - set the color of the button (of the slided item)
    - `side="start"` - slide from left to right
    - `side="end"` - default - slide from right to left

<br><br>

### **Swipeable Bookings** <span id="i0811"></span><a href="#t08">&#8593;</a>

<br>

```html
<ion-grid>
  <ion-row>
    <ion-col size-md="6" offset-md="3">
      <ion-list>
        <ion-item-sliding
          *ngFor="let booking of loadedBookings"
          #slidingBooking
        >
          <ion-item>
            <ion-label>
              <h5>{{ booking.placeTitle }}</h5>
              <p>Guests: {{ booking.guestNumber }}</p>
            </ion-label>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option
              color="danger"
              (click)="onCancelBooking(booking.id, slidingBooking)"
            >
              <ion-icon name="trash" slot="icon-only"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-col>
  </ion-row>
</ion-grid>
```

```ts
onCancelBooking(offerId: string, slidingEl: IonItemSliding) {
  slidingEl.close();
}
```

<br><br>

### **Understanding Virtual Scrolling** <span id="i0812"></span><a href="#t08">&#8593;</a>

<br>

https://ionicframework.com/docs/api/virtual-scroll

<br>

What is Virtual Scrolling?

- list items that are not visible in viewport (at the moment)
- virtual scrolling - you don't render items that are far away from being visible (3-4 items away from your viewport)
  - certain items are pre-rendered (close to your viewport)
- whenever you scroll, items that are not visible are removed, and items that are visible are added (in advance)
- rendered items are re-used (which are just having with different content)

<br>

Overall it's a performance optimization - which can be a disadvantage if you use it in a short list. Use it only for big lists (e.g. 30/50+ items).

<br>

<img src="./img/ion-virtual-scroll.png" alt="virtual scrolling">

<br><br>

### **Implementing Virtual Scrolling** <span id="i0813"></span><a href="#t08">&#8593;</a>

<br>

- to use virtual scrolling you replace `ion-list` with `ion-virtual-scroll`.
- instead of \*ngFor you use define `[items]` property
  - the `[items]` property takes an array which you want to render
    - e.g.: `[items]="loadedPlaces.slice(1)"`
  - on `ion-item` you use `*virualItem` which works similar to `*ngFor`
    - e.g.: `*virtualItem="let loadedPlace"`
- you should always provide approximate item height (so the pre-rendering works properly):
  - `approxItemHeight="70px"`

<br>

```html
<ion-row>
  <ion-col size="12" sizeSm="8" offsetSm="2" class="ion-text-center">
    <ion-virtual-scroll [items]="listedLoadedPlaces" approxItemHeight="70px">
      <ion-item
        [routerLink]="['/', 'places', 'tabs', 'discover', loadedPlace.id]"
        detail
        *virtualItem="let loadedPlace"
      >
        <ion-thumbnail slot="start">
          <ion-img [src]="loadedPlace.imageUrl"></ion-img>
        </ion-thumbnail>
        <ion-label>
          <h2>{{ loadedPlace.title }}</h2>
          <p>{{ loadedPlace.description }}</p>
        </ion-label>
      </ion-item>
    </ion-virtual-scroll>
  </ion-col>
</ion-row>
```

<br><br>

### **Virtual Scrolling Bugs** <span id="i0814"></span><a href="#t08">&#8593;</a>

<br>

Virtual scrolling is quite a complex technique behind the scenes and hence the component unfortunately can behave buggy.

At the point of time I recorded the course, more than 3 items weren't rendered correctly for example.

By using an `<ion-list>` (as we did before) instead of `<ion-virtual-scroll>` you can get rid of any bugs you might be facing - of course you lose the virtual scrolling functionality and might have to work around performance issues with other means (e.g. by loading less data).

<br><br>

### **Adding Image Elements** <span id="i0815"></span><a href="#t08">&#8593;</a>

<br>

Note: always use `ion-img`.

<br>

- `ion-img` - img tag with extra optimizations
  - if you have items with images inside of `ion-virtual-scroll` you should ALWAYS use `ion-img`
    - thanks to that images will be loaded in advance
- `ion-img` loads images lazily (only when visible)

<br>

- `ion-thumbnail` & `ion-avatar`
  - these are simply wrappers around `ion-img`
    - `ion-thumbnail` renders square image
    - `ion-avatar` renders rounded image
- into `ion-thumbnail` or `ion-avatar` you don't have to pass an `ion-img`

```html
<ion-thumbnail slot="">
  <ion-img src=""></ion-img>
</ion-thumbnail>

<ion-avatar slot="">
  <ion-img src=""></ion-img>
</ion-thumbnail>
```

<br><br>

### **Segmented Buttons** <span id="i0816"></span><a href="#t08">&#8593;</a>

<br>

https://ionicframework.com/docs/api/segment

<br>

- `ion-segment` - allows you to add "segmented buttons" - buttons where only 1 button of the set of buttons can be active at a time
  - `value=""` - set which button should be checked initially
- `ion-segment-button` - segment buttons, use like normal buttons
  - `value=""` - it is basically an identifier (e.g. you pass it to event)

<br>

- `(ion-change)` - Ionic event emitted whenever a new selection is made

<br>

```html
<ion-segment value="all" (ionChange)="onFilterUpdate($event)">
  <ion-segment-button value="all">All Places</ion-segment-button>
  <ion-segment-button value="bookable">Bookable Places</ion-segment-button>
</ion-segment>
```

```ts
onFilterUpdate(event: Event) {
  console.log((event as CustomEvent<SegmentChangeEventDetail>).detail.value);
}
```

<br><br>

### **Adding a Spinner** <span id="i0817"></span><a href="#t08">&#8593;</a>

<br>

https://ionicframework.com/docs/api/spinner

<br>

#### Basic spinner:

```html
<div class="ion-text-center">
  <ion-spinner color="primary" *ngIf="isLoading"></ion-spinner>
</div>
```

#### Using the Loading Controller (spinner):

https://ionicframework.com/docs/api/loading

```html
<ion-button color="primary" (click)="onLogin()"> Login </ion-button>
```

```ts
onLogin() {
  this.isLoading = true;
  this.authService.login();
  this.loadingController
    .create({
      keyboardClose: true,
      spinner: 'bubbles',
      message: 'Logging in...',
    })
    .then((loadingEl) => {
      loadingEl.present();
      setTimeout(() => {
        loadingEl.dismiss();
        this.router.navigate(['/places/tabs/discover']);
        this.isLoading = false;
      }, 1500);
    });
}
```

Note: Use async await instead of `.then()`s

<br><br>

### **Using the ActionSheet Controller** <span id="i0818"></span><a href="#t08">&#8593;</a>

<br>

ActionSheet - a set of options that slides up from the bottom of the page.

<br>

https://ionicframework.com/docs/api/action-sheet

<br>

- buttons:
  - text: '' - text to be displayed
  - role: 'cancel' - will not color it to red, but it will be always the bottommost button
  - role: 'destructive' will set the color of the button to red
  - handler: ... - the code to be executed (e.g. a method)

<br>

```ts
onBookPlace() {
  // this.navController.navigateBack('/places/tabs/discover');
  this.actionSheetController
    .create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('select');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.openBookingModal('random');
          },
        },
      ],
    })
    .then((actionSheetEl) => {
      actionSheetEl.present();
    });
}

openBookingModal(mode: 'select' | 'random') {
  console.log(mode);

  this.modalController
    .create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place },
    })
    .then((modalElement) => {
      modalElement.present();
      return modalElement.onDidDismiss();
    })
    .then((resultData) => {
      console.log(resultData.data, resultData.role);

      if (resultData.role === 'confirm') {
        console.log('BOOKED');
      }
    });
}
```

<br>

Check other Ionic Controllers like for example ion-toast: https://ionicframework.com/docs/api/toast

<br><br>

<hr>

<br><br>

## **Section 09: Styling & Theming Ionic Apps** <a href="#navi">&#8593;</a> <span id="t09"></span>

<br><br>

1. <a href="#i0900">Introduction</a>
2. <a href="#i0901">How Styling & Theming Works in Ionic Apps</a>
3. <a href="#i0902">Docs & Utility Attributes</a>
4. <a href="#i0903">Setting Global Theme Variables</a>
5. <a href="#i0904">Setting Global Styles</a>
6. <a href="#i0905">Setting All Colors at Once</a>
7. <a href="#i0906">Setting Platform-Specific Styles</a>
8. <a href="#i0907">Styling Core Components with Variables</a>
9. <a href="#i0908">Adding Custom CSS Rules</a>
10. <a href="#i0909">Component-specific CSS Variables</a>
11. <a href="#i0910">Useful Resources & Links</a>

<br><br>

### **Introduction** <span id="i0900"></span><a href="#t09">&#8593;</a>

<br>

In this module:

- Ionic Styling Overview (tools)
- Setting & Using a Theme (colors, font, etc)
- CSS Variables
- Custom CSS Styles (SASS)

<br><br>

### **How Styling & Theming Works in Ionic Apps** <span id="i0901"></span><a href="#t09">&#8593;</a>

<br>

CSS Variables - variables you define in CSS where you store values (e.g. color, padding, etc), then you assign that CSS variable as a value to your normal CSS properties

<img src="./img/styling-theming-ionic.png" alt="">

<br><br>

### **Docs & Utility Attributes** <span id="i0902"></span><a href="#t09">&#8593;</a>

<br>

CSS Utilites - text alignment, text transformation, element floating, padding/margin, flex, etc:

- https://ionicframework.com/docs/layout/css-utilities

<br><br>

### **Setting Global Theme Variables** <span id="i0903"></span><a href="#t09">&#8593;</a>

<br>

https://ionicframework.com/docs/theming

<br>

Global Theme Variables: `variables.scss`

Global Theme Variables (docs): https://ionicframework.com/docs/theming/advanced#global-variables

variables.css should be only used for variables

<br><br>

### **Setting Global Styles** <span id="i0904"></span><a href="#t09">&#8593;</a>

<br>

If you have any global styling you want to get up, you should use the `global.scss` file: e.g. `body {margin: 20px }` - here you set specific CSS property.

<br><br>

### **Setting All Colors at Once** <span id="i0905"></span><a href="#t09">&#8593;</a>

<br>

Here you can generate all (9 main) colors: https://ionicframework.com/docs/theming/color-generator

After that you copy & paste generated CSS variables

Note: Replace only (primary/secondary/teritary/success/warning/danger)

<br><br>

### **Setting Platform-Specific Styles** <span id="i0906"></span><a href="#t09">&#8593;</a>

<br>

styling `mode="md"` or `mode="ios"` in any component OR `variables.scss`:

- `:root {}` - styles for the entire app - both platforms
- `.ios body {}` - ios
- `.md body {}` - material design (android)

<br><br>

### **Styling Core Components with Variables** <span id="i0907"></span><a href="#t09">&#8593;</a>

<br>

**Note**: Use developer tools, and see how the elements are styled, so for example it will help greatly when changing themes (dark/light).

<br>

Theming toolbar: https://ionicframework.com/docs/api/toolbar#theming

<br>

```html
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>Authenticate</ion-title>
  </ion-toolbar>
</ion-header>
```

Manually adding that color prop to every toolbar is pretty cumbersome, there is an easier way: setting themes & application colors:

- https://ionicframework.com/docs/theming/themes (!!)

<br>

Application Colors: https://ionicframework.com/docs/theming/themes#application-colors

<br>

```scss
--ion-toolbar-background: var(--ion-color-primary);
--ion-toolbar-color: var(--ion-color-primary-contrast);
```

`var()` function takes 2 arguments - values, the 2nd argument is a fallback value in case 1st argument is broken.

- you can also apply themes on component level with `color="value"`

<br><br>

### **Adding Custom CSS Rules** <span id="i0908"></span><a href="#t09">&#8593;</a>

<br>

```html
<ion-item detail>
  <ion-thumbnail slot="start">
    <ion-img [src]="offer.imageUrl"></ion-img>
  </ion-thumbnail>
  <ion-label>
    <h1>{{ offer.title }}</h1>
    <div class="offer-details">
      <ion-icon name="calendar-outline" color="primary"></ion-icon>
      <ion-text color="tertiary" class="space-left">
        {{ getDummyDate() | date }}
      </ion-text>
      <span class="space-left"> to </span>
      <ion-icon name="calendar-outline" color="primary"></ion-icon>
      <ion-text color="tertiary" class="space-left">
        {{ getDummyDate() | date }}
      </ion-text>
    </div>
  </ion-label>
</ion-item>
```

```scss
h1 {
  font-size: 18px;
  border: 1px solid var(--ion-color-primary);
  padding: 8px;
  color: var(--ion-color-primary);
}

.offer-details {
  display: flex;
  align-items: center;
}

.space-left {
  margin: 5px;
}
```

<br><br>

### **Component-specific CSS Variables** <span id="i0909"></span><a href="#t09">&#8593;</a>

<br>

Docs: Ionic -> Components -> For each component you can find any settable CSS properties for that specific component, if there are any.

For example ion-button component: https://ionicframework.com/docs/api/button#css-custom-properties-1

<br>

You also can set/generate stepped colors for each component (if exists): https://ionicframework.com/docs/theming/themes#stepped-colors

<br>

`variables.scss` (or in a specific component)

```scss
ion-button {
  --background: #0000ff;
  --box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.6);
}
```

<br><br>

### **Useful Resources & Links** <span id="i0910"></span><a href="#t09">&#8593;</a>

<br>

- Styling & Theming Basics Docs: https://ionicframework.com/docs/theming/basics

- Themes & Application Colors: https://ionicframework.com/docs/theming/themes

- More on the CSS Variables: https://ionicframework.com/docs/theming/css-variables

- The Color Generator: https://ionicframework.com/docs/theming/color-generator

- Dive deeper into Theming: https://ionicframework.com/docs/theming/advanced

- More CSS Resources: https://academind.com/learn/css/

<br><br>

<hr>

<br><br>

## **Section 10: Handling User Input** <a href="#navi">&#8593;</a> <span id="t10"></span>

<br><br>

1. <a href="#i1000">Introduction</a>
2. <a href="#i1001">Setting Up a Form Template</a>
3. <a href="#i1002">Adding a Template-driven Form</a>
4. <a href="#i1003">Handling Validation</a>
5. <a href="#i1004">Switching Between Auth Modes</a>
6. <a href="#i1005">Finishing the Auth Form</a>
7. <a href="#i1006">Starting Work on a New Offer Form</a>
8. <a href="#i1007">Finishing the Offer Form Template</a>
9. <a href="#i1008">Creating a Reactive Form</a>
10. <a href="#i1009">Adding the Edit Offer Form</a>
11. <a href="#i1010">Starting with the Booking Form</a>
12. <a href="#i1011">(Updated) ion-datetime, ion-datetime-button</a>
13. <a href="#i1012">Wrap Up / Useful Links</a>

<br><br>

### **Introduction** <span id="i1000"></span><a href="#t10">&#8593;</a>

<br>

In this module:

- Ionic Form Controls (text inputs, date-time selectors)
- Template-driven & Reactive Forms (using Ionic Form Controls in the context of Angular Forms)
- Validation

<br><br>

### **Setting Up a Form Template** <span id="i1001"></span><a href="#t10">&#8593;</a>

<br>

- `expand` attribute:
  - `expand="block"` - adds `display: block;` to an element (button), and makes it rounded
  - `expand="full"` - adds `display: block;`, and expands it to full width (plus it makes it squared)
  - `expand="solid"` - default
- fill attr:
  - `fill="outline"` - removes the background color, but leaves the border (outline)

<br>

More about styling buttons here:

https://ionicframework.com/docs/api/button#expand

<br>

```html
<ion-button color="primary" fill="clear" expand="block">
  Switch to Login
</ion-button>
<ion-button (click)="onLogin()" expand="block"> Login </ion-button>
```

<br><br>

### **Adding a Template-driven Form** <span id="i1002"></span><a href="#t10">&#8593;</a>

<br>

```html
<form #f="ngForm" (ngSubmit)="onSubmit(f)">
  <ion-grid>
    <ion-row>
      <ion-col size-sm="6" offset-sm="3">
        <ion-list>
          <ion-item>
            <ion-label position="floating">E-Mail</ion-label>
            <ion-input
              type="email"
              ngModel
              name="email"
              required
              email
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input
              type="password"
              ngModel
              name="password"
              required
              minlength="6"
            ></ion-input>
          </ion-item>
        </ion-list>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size-sm="6" offset-sm="3">
        <ion-button color="primary" fill="clear" expand="block" type="button">
          Switch to Login
        </ion-button>
        <ion-button (click)="onLogin()" expand="block" type="submit">
          Login
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</form>
```

Notes - reminder:

- in template-driven approach you add a local reference to from element, then you pass it to (ngSubmit)="onSubmit(form)"
- you add ngModel and name="ctrlName" attributes to input element
- you add type="submit" to a button that submits the form OR type="button" to a button that does not submit the form

<br><br>

### **Handling Validation** <span id="i1003"></span><a href="#t10">&#8593;</a>

<br>

Apply x styles to an element which parent has those classes:

```scss
.ion-invalid.ion-touched ion-label {
  color: var(--ion-color-danger) !important;
}
```

The visual representation:

```html
<element class="ion-invalid ion-touched">
  …
  <ion-label></ion-label>
</element>
```

<br>

Email validation:

```html
<ion-item>
  <ion-label position="floating">E-Mail</ion-label>
  <ion-input
    type="email"
    ngModel
    name="email"
    required
    email
    #emailCtrl="ngModel"
  ></ion-input>
</ion-item>
<ion-item
  *ngIf="!emailCtrl.valid && (emailCtrl.touched || emailCtrl.dirty)"
  lines="none"
>
  <ion-label>Should be a valid email address.</ion-label>
</ion-item>
```

Password validation:

```html
<ion-item>
  <ion-label position="floating">Password</ion-label>
  <ion-input
    type="password"
    ngModel
    name="password"
    required
    minlength="6"
    #passwordCtrl="ngModel"
  ></ion-input>
</ion-item>
<ion-item
  *ngIf="!passwordCtrl.valid && (passwordCtrl.touched || passwordCtrl.dirty)"
  lines="none"
>
  <ion-label>Should at least be 6 characters long.</ion-label>
</ion-item>
```

Submit button:

```html
<ion-button
  (click)="onLogin()"
  expand="block"
  type="submit"
  [disabled]="!f.valid"
>
  Login
</ion-button>
```

<br><br>

### **Switching Between Auth Modes** <span id="i1004"></span><a href="#t10">&#8593;</a>

<br>

Normally you should use two different components for logging in or signing up.

<br><br>

### **Finishing the Auth Form** <span id="i1005"></span><a href="#t10">&#8593;</a>

<br>

```ts
  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    if (this.isLogin) {
      // Send a request to login servers
    } else {
      // Send a request to signup servers
    }
  }
```

<br><br>

### **Starting Work on a New Offer Form** <span id="i1006"></span><a href="#t10">&#8593;</a>

<br>

- https://ionicframework.com/docs/api/searchbar#autocomplete
- https://ionicframework.com/docs/api/searchbar#autocorrect
- https://ionicframework.com/docs/api/textarea

<br>

```html
<ion-grid>
  <ion-row>
    <ion-col size-sm="6" offset-sm="3">
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" autocomplete="on" autocorrect="on"></ion-input>
      </ion-item>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col size-sm="6" offset-sm="3">
      <ion-item>
        <ion-label position="floating">Short description</ion-label>
        <ion-textarea rows="3"></ion-textarea>
      </ion-item>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col size-sm="6" offset-sm="3">
      <ion-item>
        <ion-label position="floating">Price</ion-label>
        <ion-input type="number"></ion-input>
      </ion-item>
    </ion-col>
  </ion-row>
</ion-grid>
```

<br><br>

### **Finishing the Offer Form Template** <span id="i1007"></span><a href="#t10">&#8593;</a>

<br>

ion-datetime / ion-datetime-button:

- https://ionicframework.com/docs/api/datetime
- https://ionicframework.com/docs/api/datetime-button

<br>

Basic datetime picker:

```html
<ion-col size-sm="6" offset-sm="3">
  <ion-item class="ion-text-center">
    <ion-label>Pick a date</ion-label>
  </ion-item>
  <ion-datetime-button datetime="datePicker"></ion-datetime-button>
  <ion-modal [keepContentsMounted]="true">
    <ng-template>
      <ion-datetime
        id="datePicker"
        min="2022-01-01T00:00:00"
        max="2025-12-31T23:59:59"
      >
      </ion-datetime>
    </ng-template>
  </ion-modal>
</ion-col>
```

<br><br>

### **Creating a Reactive Form** <span id="i1008"></span><a href="#t10">&#8593;</a>

<br>

Note: import ReactiveFormsModule into a module that will use it

<br>

Using FormGroup:

```ts
ngOnInit() {
  this.newOfferForm = new FormGroup({
    title: new FormControl(null, {
      updateOn: 'blur', // blur / change / submit
      validators: [Validators.required],
    }),
    description: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required, Validators.maxLength(180)],
    }),
    price: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required, Validators.min(1)],
    }),
    dateFrom: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required],
    }),
    dateTo: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required],
    }),
  });
}
```

<br>

Using FormBuilder:

```ts
constructor(private formBuilder: FormBuilder) {}

ngOnInit() {
  this.newOfferForm = this.formBuilder.group({
    title: [
      '',
      {
        updateOn: 'blur', // blur / change / submit
        validators: [Validators.required],
      },
    ],
    description: [
      '',
      {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)],
      },
    ],
    price: [
      '',
      {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)],
      },
    ],
    dateFrom: [
      '',
      {
        updateOn: 'blur',
        validators: [Validators.required],
      },
    ],
    dateTo: [
      '',
      {
        updateOn: 'blur',
        validators: [Validators.required],
      },
    ],
  });
}
```

<br>

`updateOn` property:

- `blur` - update form on blur (when it loses focus)
- `change` - update form on every change
- `submit` - ... on submit

<br><br>

### **Syncing the Form to the Template** <span id="i1008"></span><a href="#t10">&#8593;</a>

<br>

- `formControlName="ctrlName"`

<br>

```html
<ion-buttons slot="primary">
  <ion-button (click)="onCreateOffer()" type="submit">
    <ion-icon name="checkmark" slot="icon-only"></ion-icon>
  </ion-button>
</ion-buttons>
```

```html
<form [formGroup]="newOfferForm">
  <!-- ... -->
  <ion-input
    type="text"
    autocomplete="on"
    autocorrect="on"
    formControlName="title"
  ></ion-input>
  <!-- ... -->
</form>
```

<br><br>

### **Adding the Edit Offer Form** <span id="i1009"></span><a href="#t10">&#8593;</a>

<br>

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button
        [defaultHref]="'/places/tabs/offers/' + place.id"
      ></ion-back-button>
    </ion-buttons>
    <ion-title>Edit {{ place.title }}</ion-title>
    <ion-buttons slot="end">
      <ion-button [disabled]="!editOfferForm.valid" (click)="onUpdateOffer()">
        <ion-icon name="checkmark" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <form [formGroup]="editOfferForm">
    <ion-grid>
      <ion-row>
        <ion-col size-sm="6" offset-sm="3">
          <ion-item>
            <ion-label position="floating">Title</ion-label>
            <ion-input type="text" formControlName="title"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size-sm="6" offset-sm="3">
          <ion-item>
            <ion-label position="floating">Short description</ion-label>
            <ion-textarea rows="3" formControlName="description"></ion-textarea>
          </ion-item>
        </ion-col>
      </ion-row>
    </ion-grid>
  </form>
</ion-content>
```

```ts
place: Place;
editOfferForm: FormGroup;

constructor(
  private activatedRoute: ActivatedRoute,
  private placesService: PlacesService,
  private navController: NavController
) {}

ngOnInit() {
  this.activatedRoute.params.subscribe((params) => {
    if (!params.placeId) {
      this.navController.navigateBack('/places/tabs/offers');
    }
    this.place = this.placesService.getPlace(params.placeId);

    this.editOfferForm = new FormGroup({
      title: new FormControl(this.place.title, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      description: new FormControl(this.place.description, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  });
}

onUpdateOffer() {
  if (!this.editOfferForm) {
    return;
  }
  console.log(this.editOfferForm);
}
```

<br><br>

### **Starting with the Booking Form** <span id="i1010"></span><a href="#t10">&#8593;</a>

<br>

- `ion-select`: https://ionicframework.com/docs/api/select

<br>

```html
<ion-item>
  <ion-label position="floating">Number of Guests</ion-label>
  <ion-select [ngModel]="2" name="guest-number">
    <ion-select-option value="1">1</ion-select-option>
    <ion-select-option value="2">2</ion-select-option>
    <ion-select-option value="3">3</ion-select-option>
  </ion-select>
</ion-item>
```

<br><br>

### (Updated) ion-datetime, ion-datetime-button <span id="i1011"></span><a href="#t10">&#8593;</a>

<br>

```html
<ion-header>
  <ion-toolbar color="tertiary">
    <ion-title> Date Time </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-item>
    <ion-label position="fixed">Date</ion-label>
    <ion-datetime-button slot="end" datetime="date"></ion-datetime-button>
  </ion-item>

  <ion-item>
    <ion-label position="fixed">Time</ion-label>
    <ion-datetime-button slot="end" datetime="time"></ion-datetime-button>
  </ion-item>

  <ion-item>
    <ion-label position="fixed">Month Year</ion-label>
    <ion-datetime-button slot="end" datetime="monthYear"></ion-datetime-button>
  </ion-item>

  <ion-item>
    <ion-label position="fixed" class="ion-text-wrap"
      >Wheel Date-Time</ion-label
    >
    <ion-datetime-button
      slot="end"
      datetime="wheelDateTime"
    ></ion-datetime-button>
  </ion-item>

  <ion-modal [keepContentsMounted]="true">
    <ng-template>
      <ion-datetime
        locale="es-ES"
        value="2022-04-21T00:00:00"
        min="2022-03-01T00:00:00"
        max="2022-05-31T23:59:59"
        id="date"
        presentation="date"
        (ionChange)="onChange($event)"
      ></ion-datetime>
    </ng-template>
  </ion-modal>

  <ion-modal [keepContentsMounted]="true">
    <ng-template>
      <ion-datetime
        id="time"
        presentation="time"
        (ionChange)="onChange($event)"
      ></ion-datetime>
    </ng-template>
  </ion-modal>

  <ion-modal [keepContentsMounted]="true">
    <ng-template>
      <ion-datetime
        id="monthYear"
        presentation="month-year"
        (ionChange)="onChange($event)"
      ></ion-datetime>
    </ng-template>
  </ion-modal>

  <ion-modal [keepContentsMounted]="true">
    <ng-template>
      <ion-datetime
        id="wheelDateTime"
        presentation="date-time"
        [preferWheel]="true"
        (ionChange)="onChange($event)"
        [showDefaultButtons]="true"
        doneText="All Set"
        cancelText="Nevermind"
        #wheelDateTime
      >
        <ion-buttons slot="buttons">
          <ion-button color="danger" (click)="wheelDateTime.reset()"
            >Reset</ion-button
          >
          <ion-button color="primary" (click)="wheelDateTime.cancel(true)"
            >Never mind</ion-button
          >
          <ion-button color="primary" (click)="wheelDateTime.confirm(true)"
            >All Set</ion-button
          >
        </ion-buttons>
      </ion-datetime>
    </ng-template>
  </ion-modal>

  <ion-datetime
    presentation="date"
    [multiple]="true"
    [value]="['2022-06-03', '2022-06-13', '2022-06-29']"
    (ionChange)="onChange($event)"
    color="success"
    size="cover"
    class="multi"
  >
    <span slot="title">Select Multiple Date</span>
  </ion-datetime>
</ion-content>
```

<br><br>

### **Wrap Up / Useful Links** <span id="i1012"></span><a href="#t10">&#8593;</a>

<br>

Updating ion-datetime to Ionic 6: https://ionicframework.com/docs/intro/upgrading-to-ionic-6#datetime

<br>

#### Documentation

<br>

ion-datetime / ion-datetime-button:

- https://ionicframework.com/docs/api/datetime
- https://ionicframework.com/docs/api/datetime-button

<br><br>

<hr>
