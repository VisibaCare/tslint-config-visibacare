>_This is for code going into 2019_

# Visiba Care's Style Guide 🌟
>_The bare minimum for clean code._

The point of these guides is to get a quick overview of how Visiba Care's code standard should look like!

# JavaScript
_This style guide is based on the standards of prevalent JavaScript - it's based on [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript) but it's written more encapsulated to highlight the basics. Its intent is to follow the conventional code standard that the JavaScript community is used to._

We're using primarily [TypeScript](https://www.typescriptlang.org/) but doing small libs in an `es6+` standard is fine too.

[CommonJS](https://requirejs.org/) is only allowed when dealing with [Node.js](https://nodejs.org/en/) related issues or scripts.

### Table of Contents
  1. [Basic rules](#Basic-rules)
  2. [Performance](#Performance)
  3. [Transpile](#Transpile)
  4. [Declaration & Naming Convention](#Declaration-&-Naming-Convention)
  5. [Object & Arrays](#Object-&-Arrays)
  6. [Destructuring](#Destructuring)
  7. [Blocks, Comparison Operators & Equality](#Blocks,-Comparison-Operators-&-Equality)
  8. [Module](#Module)

## Basic rules
  * Simple code is **good** code.
    > Anything that gets complex becomes hard to understand. Code needs to be maintainable, testable and reusable. Refactoring with a reason is encourage.
    >
    > What defines _"good code"_?
    > 1. It's well-organized. Naming conventions represent its content. Properties and methods in classes fit together. The code should look **visually clean** and not like **“spaghetti”**. 
    >
    > 2. It's testable. Tests serve as an executable specification of the code and examples of its use.
    >
    > 3. It's not “clever”. **It does things in straightforward, obvious ways.**
    >
    > 4. It's developed in small, easy to read modules and files. These modules are reused throughout the code. The **DRY principle (Don't repeat yourself)** should always be applied if seems fit.
    >
    > 5. It's taking performence into account. We want to deliver smooth applications for the users. Not having a performance budget hurts everyone.
    >
    > Sometimes it's easier to cut corners to save time, but in reality it'll make the application less performant, less efficent and less readable. In the long run it'll cause more headache than if it was made in the right way from the begining.
    >
    > Try to keep that in mind.
  * Use tabs over spaces.
    > Why? Helps with developer happiness. Some developers want to have an indentation of two spaces, other four. Tabs allow both.
  * Do group properties & variables with a line separation.
    > Why? If it makes sense for them to be grouped, then it'll do no harm and will most likely help with readability.
  * Do initialize variables and properties that is meant to hold a value with `null`.
    > Why? It helps to unify the code with nullable API responses. A value that's set to null is purposefully set to "no value".
  * Break stuff into modules.
    > Once a something become too large or is complex enough that it is interfering with understanding the rest of the file, make a module out of it. It will easier to maintain, test and - if wrote well - reuse.
  * TypeScrpt
    * Don't/Avoid using `any`.
      > Why? Encourages lazy patterns that will be hard to debug and test. Should only be used when something is truly **_any_**.
    * Don't type what's already typed.
      > Why? Unnecessary to type stuff more than once. e.g.: `const baz: Bar = new Bar() as Bar;`
    * Avoid using `NameSpace` in code.
      > Why? A file should be viewed as a module. Once each file is a module the need to NameSpace modules becomes irrelevant.
    * Use strict mode
      > Why? Increases type safety.

## Performance
  * Be aware of bundle size.
    > Why? Not everyone is sitting on a fiber connection, every byte matter.
  * Animations should be 60 FPS.
    > Why? Looks good yo.
  * Don't intruduce large node modules (> ~40Kb gzip) that doesn't support tree shaking.
    > Why? Bundle size matter.
  * Avoid using third party framework components.
    > Why? Often they do not correspond with our setup or standard. 
  * Avoid intruducing large libs without a real purpose.
    > Why? You don't need jQuery. :-)

## Transpile
_To be researched_

## Declaration & Naming Convention
* **Naming:**
  * Be descriptive with your naming. Avoid single letter names and over prefixed/suffixed names.
    > Why? Readability. Other developers should not have to spend hours to contextualize the code.
  * Use whole words when possible.
    > Why? Readability. Other developers should not have to spend hours to contextualize the code.
  * To be consistent with naming conventions, do use the following:
    * is`Boolean`
    * has`Boolean`
    * on`Function`
    * handle`Function`
    > Why? Enforces consistency.

* **Files:** When naming a file.
  * A filename should exactly match the name of its default export.
    > Why? Logical. When entering a file that's called `foo.ts` then `class Bar { }` shouldn't be there.
  * If there's no defualt exports then the naming should represent what being exported.
    > Why? Provides the intent with the file to other developers.

* **Variable:** When declaring a reference.
  * Use `camelCase` for name.
    > Why? Conventional JavaScript
  * Don't use `var`.
    > Why? Variables declared with `var` are not block-scoped.
  * Use `const` for all references.
    > Why? This ensures that you can’t reassign your references. Const is also block-scoped.
  * Use `let` if an references must be reassign.
    > Why? `let` is block-scoped rather than function-scoped like `var`.
  
  ```TypeScript
  // ❌
  var wowVariable = 'wow';
  var sickVariable;
  sickVariable = 'sick';

  // ✔️
  const wowVariable = 'wow';
  let sickVariable;
  sickVariable = 'sick';
  ```

  ### *~ _Exeptions_*:
  Some times you may occasionally uppercase a constant. But only if it's exported or used in the upper scope of a file.
    > Why? This is an additional tool to assist in situations where the programmer would be unsure if a variable might ever change. UPPERCASE_VARIABLES are letting the programmer know that they can trust the variable not to change.
  ```TypeScript
  // Example
  export const API_KEY = '1234567890';
  ```

* **Function:** When declaring a function.
  * Use `camelCase` for name.
    > Why? Conventional JavaScript.
  * Don't space a function signature or a function call.
    > Why? Conventional JavaScript. You shouldn’t have to add or remove a space when adding or removing a name.
  * Use use arrow functions.
    > Why? (1) Arrow functions lexically bind their context, so `this` refers to the originating context. (2) Declaring functions like this with a `type` also makes sense from a `TypeScript` perspective. I.e.: `const bar: Foo = () => foo;` (3) And sometimes it just results in cleaner code, especially when the function only takes an argument and returns it: `const foo = value => something(value);`
  * Use arrow functions in callbacks.
    > Why? Less side effects. It will result in cleaner code and `this` will be lexically binded.
  * Do use named function expression.
    > Why? 
  * Don't declare a function in a non-block (`if`, `for`, `while`, etc).
    > Why? Browsers will all interpret it differently, aka not nice.
  * Don't use underscore to conventionally ignore parameters. 
    > Why? There's no reason to. It will just cause confusion for other developers.
  ```TypeScript
  // ❌
  [{ name: 'Luke' }].map(function (person) { return person.name });
  function Foo () { }
  const Bar = _ => { };
  Baz ();

  // ✔️
  [{ name: 'Luke' }].map(person => person.name);
  function foo() { }
  const bar = () => { };
  baz();

  // ✔️ Also valid
  const short = function superLongNameThatIsReallyAdvanced() { };
  ```
  ### *~ _Note_*:
    >If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module.

* **Class:** When declaring classes.
  * Use `PascalCase` for name.
    > Why? Conventional JavaScript.
  * Use `camelCase` for members. (properties and methods)
    > Why? Naturally follows from variable and function naming convention.
  * Don't space methods.
    > Why? Conventional JavaScript.
  * Do use arrow functions if needed.
    > Why? Arrow functions lexically bind their context so `this` refers to the originating context. Should follow function rules.
  ```TypeScript
  // ❌
  class foo {
    private Bar: string;
    public Baz () { }
    public Qux = () => { };
  }

  // ✔️
  class Foo {
    private bar: string;
    public baz() { }
    public qux = () => { };
  }
  ```
* **Access Modifiers:** When declaring public / private.
  * Always declare the classes own members with `public or private`
  * Don't use leading underscore for private fields.
    > Why? TypeScript: There's no need to use an extra clarification for it, the IDE will show what fields are public anyhow. A developer will also have to make a lot of unnecessary renaming when changing a `public` to `private` or vice versa, and the risk is that developers will forget or ignore about it.
    >
    > Regular EcmaScript: https://github.com/tc39/proposal-class-fields  
    > Once class fields become a standard, the naming will be a clear indication from the start.
  * Don't use `public` when overwriting extended members.
    > Why? Creates an distinction between inherited members and the current class's members.

* **Namespace:** When declaring interfaces.
  * Use `PascalCase` for name.
    > Why? Convention followed by the TypeScript team and community.
  ```TypeScript
  // ❌
  namespace foo {
    export class Bar { }
  }

  // ✔️
  namespace Foo {
    export class Bar { }
  }
  ```

* **Interface:** When declaring interfaces. tslint: [semicolon](https://palantir.github.io/tslint/rules/semicolon/)
  * Use `PascalCase` for name.
    > Why? Similar to class. A class may implement an interface as if it were a class.
  * Use `camelCase` for members.
    > Why? Similar to class. A class may implement an interface as if it were a class.
  * Use semicolon at end of statement.
    > Why? Similar to class. A class may implement an interface as if it were a class.
  * Don't prefix with `I`.
    > Why? Unconventional. The interface ends up as an extra declaration of the same class, it losses its meaning to exist. 
    >
  ```TypeScript
  // ❌
  interface IFoo {
    Bar: string;
  }

  class Foo implements IFoo { }

  // ✔️
  interface Foo {
    bar: string;
  }

  class Bas implements Foo { }
  ```

  ### *~ _Exeptions_*:
  When writing types for respones, match its convention exactly. 

  The most common case for us is to use `PascalCase` for members when mapping interfaces for `.NET` responses.
  > Why? A response should always be typed as how it will be fetched. We'll alternate the data that will be use onto another object.

* **Type:** When declaring types.
  * Use `PascalCase` for name.
    > Why? Convention followed by the TypeScript team and community.
  * Use `camelCase` for members.
    > Why? Types are similar to primitives and complex types. If could have members they should be asigned like conventional JavaScript.
  ```TypeScript
  // ❌
  type sickString = string;

  // ✔️
  type SickString = string;
  ```
* **Enum:** When declaring enums.
  * Use `PascalCase` for name.
    > Why? Convention followed by the TypeScript team and community.
  * Use `camelCase` for properties.
    > Why? Similar to object.
  ```TypeScript
  // ❌
  enum sickEnum {
  };

  // ✔️
  enum SickEnum {
  };
  ```

* **Array:** Declare primitives and type references as `foos: Foo[]`. tslint: [array-type](https://palantir.github.io/tslint/rules/array-type/)
  > Why? It's the standard way to define it. It's used by the TypeScript team types generated for DefinitelyTyped repos. Consistency is good.

  ```TypeScript
  // ❌
  const foos: Array<Foo> = [];
  const foos: Array<number> = [];

  // ✔️
  const foos: Foo[] = [];
  const foos: number[] = [];

  // Do use a generic array for complex types, i.e. functions / objects / arrays:
  const foo: Array<() => boolean> = [];
  const bar: Array<Bar[]> = [];
  const baz: Array<{ name: 'Leia' }> = [];

  // Instead of:
  const foo: (() => boolean)[] = [];
  const bar: Bar[][] = [];
  const baz: { name: 'Leia' }[] = [];
  ```

## Object & Arrays
  * Use array spreads `...` to copy arrays.
  > Why? Reduces the amount of steps for doing this 

  * Use object spread operator over Object.assign
  > Why? Much easier way to handle shallow-copying.

  * Group shorthand properties at the beginning of your object declaration.
  > Why? It’s easier to tell which properties are using the shorthand.

## Destructuring
  * Use object destructuring when accessing and using multiple properties of an object.
  > Why? Destructuring saves you from creating temporary references for those properties.

  * Use array destructuring.
  > Why? Destructuring saves you from creating temporary references for those properties.

  ```TypeScript
  // For Objects
  // ❌
  function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
  }

  // ✔️
  function getFullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
  }

  // ✔️✔️
  function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }

  // For Arrays  
  // ❌
  const first = arr[0];
  const second = arr[1];

  // ️✔️
  const [first, second] = arr;
  ```

## Blocks, Comparison Operators & Equality
  * **Blocks:**
    * Use braces with all multi-line blocks.
      > Why? Enforce consistency. A new line after a staement should always result into a clear block.
    * When on multi-line, don't put `else` under the `if`'s closing bracket.
      > Why? Don't be evil. Conventional JavaScript.
    ```TypeScript
    // ❌
    if (foo)
      return false;
    else
      return true;

    // ❌
    if (foo) 
      return false;

    // ❌
    function bar() { return false; }

    // ❌
    if (bar) {
      return 'Luke';
    }
    else {
      return 'Vader';
    }

    // ✔️
    if (foo) {
      return false;
    } else {
      return true;
    }

    // ✔️
    if (foo) return false;

    // ✔️
    function bar() {
      return false;
    }

    // ✔️
    if (bar) {
      return 'Luke';
    } else {
      return 'Vader';
    }
    ```
  * **Comparison Operators.** tslint: [triple-equals](https://palantir.github.io/tslint/rules/triple-equals/)
    * Use strict comparison operators, i.e. `===` and `!==` over `==` and `!=`
      > Why? Non type-safe equality operators does not account for type equality.
    * Use shortcuts for booleans, but explicit comparisons for strings and numbers.
      > Why? The intent of the comparison will be more clear for strings and numbers.
      > For booleans it will essential mean `true === true/false`, instead of just `true/false`.
    * Use shortcuts to check if an object exist.
      > Why? The world of JavaScript have both undefined and null:
      >```TypeScript
      > // ❌ instead of ending up with code like this:
      > if (value !== undefined || value !== null) { } // value -> array
      >
      > // ✔️ just evaluate it like this:
      > if (value) { }
      >```

      ### *~ _Note_*:
      > Will not work for deep properties comparison that may not have been set.
      >```TypeScript
      > // ❌ this will throw an exception if "doesNotExist" is undefined:
      > if (value.doesNotExist) { }
      >
      > // ✔️ this will won't:
      > if (typeof value.doesNotExist !== 'undefined') { }
      >```

    ```TypeScript
      // ❌
      if (isValid === true) { // isValid -> boolean
        return true;
      }

      // ❌
      if (name) { // name -> string
        return true;
      }

      // ❌
      if (list.length) { // name -> array
        return true;
      }

      // ✔️
      if (isValid) { // isValid -> boolean
        return true;
      }

      // ✔️
      if (name !== '') { // name -> string
        return true;
      }

      // ✔️
      if (list.length > 0) { // list -> array
        return true;
      }
    ```

    ### *~ _Note_*:
      > Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:
      > * **Objects** evaluate to **true**
      > * **Undefined** evaluates to **false**
      > * **Null** evaluates to **false**
      > * **Booleans** evaluate to the value of the **boolean**
      > * **Numbers** evaluate to **false** if **+0**, **-0**, or **NaN**, otherwise **true**
      > * **Strings** evaluate to **false** if an empty **string** '', otherwise **true**

## Module
  * Use `import/export` over any unconventional module system.
    > Why? Conventional JavaScript.
  * In a module with a single export, use default over named.
    > Why? To encourage more files that only ever export one thing, which is better for readability and maintainability.
  * Don't use wildcard imports.
    > Why? This makes sure you have a single default export.
  * Avoid exporting mutable bindings.
    > Why? It'll be a mess if.
  * Do use following structure:
    ```TypeScript
    // Typical structure:
    import { v4 } from 'uuid'; // dependencies imports ↓ 
    import VCareMediaStream, { getStream } from '../VCareMedia'; // relative imports ↓ 

    export type VCareMediaStream = MediaTrack; // typings ↓ (may be exported over here)

    const API_KEY = '1234567890'; // variables in module scope ↓ 

    function getTicket() { } // function ↓ 

    class MediaStreamHook { } // class ↓ 

    export { getTicket }; // named export ↓ 

    export default MediaStreamHook; // default export (file name is MediaStreamHook.ts)
    // or
    export default getTicket; // default export (file name is getTicket.ts)

    // For a file that exports many constants or functions:
    export const oneConst = '123';
    export const anotherConst = '456';
    // ... etc

    export oneFunction() { }
    export anotherFunction() { }
    // ... etc
    ```
