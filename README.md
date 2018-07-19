# React
React In Action 
-
#What is React? 
-
  - A libarary for user interfaces  
  - Created at Facebook and instagram  
  - React Native for mobile  
----------------------------------------------------------------
#React makes udate in the DOM fasted using DOM Diffing 
  - Compares rendered content with the new UI changes
  - Makes only the minimal changes necessary 
  - Compares JavaScript Objects
  - Is faster than writing to or reacing from DOM 
###-----------------------------------------------------------------
# What is webpack?

- 1) Is a module bundler
- 2) Creates static files
- 3) Automates processes

- webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a   dependency graph which maps every module your project needs and generates one or more bundles.

- webpack only understands JavaScript files. 
  To get started you only need to understand its Core Concepts:
	Entry -> 
			An entry point indicates which module webpack should use to begin building out its internal dependency graph, 
			webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).
	Output -> 
			Configuring the output configuration options tells webpack how to write the compiled files to disk. 
	Loaders ->
			Out of the box, webpack only understands JavaScript files. Loaders allow webpack to process other types of files and converting them into valid modules that can be consumed by your application and added to the dependency graph.
	
	Plugins -> 
			While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, assets management and injection of environment variables

Hot Module Replacement
	Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

		Retain application state which is lost during a full reload.
		Save valuable development time by only updating what's changed.
		Tweak styling faster 
			-- almost comparable to changing styles in the browser's debugger.
-----------------------------------------------------------------
# Introduction to JSX?
- JSX is a preprocessor step that adds XML syntax to JavaScript. 
You can definitely use React without JSX but JSX makes React a lot more elegant.
Just like XML, JSX tags have a tag name, attributes, and children. 
If an attribute value is enclosed in quotes, the value is a string. Otherwise, 
wrap the value in braces and the value is the enclosed JavaScript expression.
Why JSX?
React embraces the fact that rendering logic is inherently coupled with other
 UI logic: how events are handled, 
 how the state changes over time, 
 and how the data is prepared for display.
Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called "components" that contain both. 
We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.
-----------------------------------------------------------------
Thinking in React
-----------------------------------------------------------------
# Step 1: Break The UI Into A Component Hierarchy
	single responsibility principle
	i.e., A component should ideally only do one thing. 
	        If it ends up growing, 
	       it should be decomposed into smaller subcomponents.

# Step 2: Build A Static Version in React
The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. 
It’s best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing. 
props are a way of passing data from parent to child
State is reserved only for interactivity, that is, data that changes over time. 
You can build top-down or bottom-up. 
React’s one-way data flow (also called one-way binding) keeps everything modular and fast.

# Step 3: Identify The Minimal (but complete) Representation Of UI State
you need to be able to trigger changes to your underlying data model. React makes this easy with state.
key here is DRY: Don’t Repeat Yourself

# Step 4: Identify Where Your State Should Live

# Step 5: Add Inverse Data Flow
--------------------------------------------------------------
# React mixins
Components are React's preferred reuse mechanism, but it's not the only one. Sometimes different components share the same functions. It may be awkward to wrap these cross-cutting concerns in a higher order component, or the common code may need access to a component's state. In these scenarios, React mixins are useful.
-------------------------------------------------------------
# What is controlled components?

HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.
In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
	
----------------------------------------------------------
# Ref
In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

----------------------------------------------------------------

# Props in Initial State
From docs:
> Using props to generate state in getInitialState often leads to duplication of “source of truth”, i.e. where the real data is.
> This is because getInitialState is only invoked when the component is first created.

The danger is that if the props on the component are changed without the component being ‘refreshed’,
the new prop value will never be displayed because the constructor function (or getInitialState) will never update the current state of the component.
The initialization of state from props only runs when the component is first created.

#### Bad
```javascript
class SampleComponent extends Component {
  // constructor function (or getInitialState)
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      inputVal: props.inputValue
    };
  }

  render() {
    return <div>{this.state.inputVal && <AnotherComponent/>}</div>
  }
}
```
#### Good
```javascript
class SampleComponent extends Component {
  // constructor function (or getInitialState)
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }

  render() {
    return <div>{this.props.inputValue && <AnotherComponent/>}</div>
  }
}
```
 

----------------------------------------------------------------

##### findDOMNode(this)

###### Before:
```javascript
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }

  render() {
    return <div />
  }
}
```
###### After
```javascript
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render() {
    return <div ref={node => this.node = node}/>
  }
}
```
##### findDOMNode(stringDOMRef)
###### Before
```javascript
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this.refs.something).scrollIntoView();
  }

  render() {
    return (
      <div>
        <div ref='something'/>
      </div>
    )
  }
}
```
###### After
```javascript
class MyComponent extends Component {
  componentDidMount() {
    this.something.scrollIntoView();
  }

  render() {
    return (
      <div>
        <div ref={node => this.something = node}/>
      </div>
    )
  }
}
```

----------------------------------------------------------------

##### findDOMNode(childComponentStringRef)
###### Before:
```javascript
class Field extends Component {
  render() {
    return <input type='text'/>
  }
}

class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this.refs.myInput).focus();
  }

  render() {
    return (
      <div>
        Hello,
        <Field ref='myInput'/>
      </div>
    )
  }
}
```
###### After
```javascript
class Field extends Component {
  render() {
    return (
      <input type='text' ref={this.props.inputRef}/>
    )
  }
}

class MyComponent extends Component {
  componentDidMount() {
    this.inputNode.focus();
  }

  render() {
    return (
      <div>
        Hello,
        <Field inputRef={node => this.inputNode = node}/>
      </div>
    )
  }
}
```

----------------------------------------------------------------

# Use Higher order components over Mixins

#### Simple Example
```javascript
// With Mixin
var WithLink = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function () {
    return {message: 'Hello!'};
  },
  render: function () {
    return <input type="text" valueLink={this.linkState('message')}/>;
  }
});

// Move logic to a HOC
var WithLink = React.createClass({
  getInitialState: function () {
    return {message: 'Hello!'};
  },
  render: function () {
    return <input type="text" valueLink={LinkState(this,'message')}/>;
  }
});
```

----------------------------------------------------------------

#### Detailed Example

```javascript
// With Mixin
var CarDataMixin = {
  componentDidMount: {
    // fetch car data and
    // call this.setState({carData: fetchedData}),
    // once data has been (asynchronously) fetched
  }
};

var FirstView = React.createClass({
  mixins: [CarDataMixin],
  render: function () {
    return (
      <div>
        <AvgSellingPricesByYear country="US" dataset={this.state.carData}/>
        <AvgSellingPricesByYear country="UK" dataset={this.state.carData}/>
        <AvgSellingPricesByYear country="FI" dataset={this.state.carData}/>
      </div>
    )
  }
});

// With HOC
var bindToCarData = function (Component) {
  return React.createClass({
    componentDidMount: {
      // fetch car data and
      // call this.setState({carData: fetchedData}),
      // once data has been (asynchronously) fetched
    },

    render: function () {
      return <Component carData={ this.state.carData }/>
    }
  });
};

// Then wrap your component when you define it.
var FirstView = bindToCarData(React.createClass({
  render: function () {
    return (
      <div>
        <AvgSellingPricesByYear country="US" dataset={this.props.carData}/>
        <AvgSellingPricesByYear country="UK" dataset={this.props.carData}/>
        <AvgSellingPricesByYear country="FI" dataset={this.props.carData}/>
      </div>
    )
  }
}));
```

----------------------------------------------------------------

# setState() in componentWillMount()
Avoid async initialization in ``componentWillMount()``

``componentWillMount()`` is invoked immediately before mounting occurs.
It is called before ``render()``, therefore setting state in this method will not trigger a re-render.
Avoid introducing any side-effects or subscriptions in this method.


Make async calls for component initialization in ``componentDidMount`` instead of ``componentWillMount``
```javascript
function componentDidMount() {
  axios.get(`api/messages`)
    .then((result) => {
      const messages = result.data
      console.log("COMPONENT WILL Mount messages : ", messages);
      this.setState({
        messages: [...messages.content]
      })
    })
}
```
# Mutating State without setState()
- Causes state changes without making component re-render.
- Whenever setState gets called in future, the mutated state gets applied.

#### Bad
``` javascript
class SampleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['foo', 'bar']
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // BAD: We mutate state here
    this.state.items.push('lorem');

    this.setState({
      items: this.state.items
    });
  }

  render() {
    return (
      <div>
        {this.state.items.length}
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
```

#### Good
``` javascript
class SampleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['foo', 'bar']
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // We update using setState() - concat return new array after appending new item.
    this.setState({
      items: this.state.items.concat('lorem')
    });
  }

  render() {
    return (
      <div>
        {this.state.items.length}
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
```

----------------------------------------------------------------

# Using indexes as keys
Keys should be stable, predictable, and unique so that React can keep track of elements.

#### Bad
In this snippet each element's key will be based on ordering, rather than tied to the data that is being represented. This limits the optimizations that React can do.
```javascript
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}
```

#### Good
Assuming `todo.id` is unique to this list and stable, React would be able to reorder elements without needing to reevaluate them as much.
```javascript
{todos.map((todo) =>
  <Todo {...todo}
    key={todo.id} />
)}
```

----------------------------------------------------------------

# Spreading props on DOM elements
When we spread props we run into the risk of adding unknown HTML attributes, which is a bad practice.

#### Bad
This will try to add the unknown HTML attribute `flag` to the DOM element.
```javascript
const Sample = () => (<Spread flag={true} className="content"/>);
const Spread = (props) => (<div {...props}>Test</div>);
```
#### Good
By creating props specifically for DOM attribute, we can safely spread.
```javascript
const Sample = () => (<Spread flag={true} domProps={{className: "content"}}/>);
const Spread = (props) => (<div {...props.domProps}>Test</div>);
```

Or alternatively we can use prop destructuring with `...rest`:
```javascript
const Sample = () => (<Spread flag={true} className="content"/>);
const Spread = ({ flag, ...domProps }) => (<div {...domProps}>Test</div>);
```
