This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Skeleton Component

### Basic Usage Example

```javascript

import Skeleton from './Skeleton'

<Skeleton width="200px" height="30px" loaded={false} backgroundColor="#e1e9ee">
  <span>Test</span>
</Skeleton>

<Skeleton width="200px" height="30px" loaded={false} backgroundColor="#e1e9ee">
  <SomeComponent/>
</Skeleton>

```
When loaded prop becomes true, child components will be shown.


### You can set styles for skeleton

```javascript

import Skeleton from './Skeleton'

<Skeleton 
  width="200px"
  height="30px"
  loaded={false} 
  backgroundColor="#e1e9ee" 
  style={{margin: "10px", marginTop: "20px"}}> //you can put styles as 'style' prop
  
  <SomeComponent/>
  
</Skeleton>

```

### Circle shape skeleton

```javascript

import Skeleton from './Skeleton'

<Skeleton width="60px" height="60px" loaded={false} shape="circle">
  <img
    src="https://picsum.photos/id/231/60/60"
    style={{ borderRadius: "50%" }}
  />
</Skeleton>

```

### You can set duration for skeleton

```javascript

import Skeleton from './Skeleton'

<Skeleton 
  width="200px"
  height="30px"
  loaded={false} 
  backgroundColor="#e1e9ee" 
  style={{margin: "10px", marginTop: "20px" }}
  duration={8000} > // 8000 == 8 second
  
  <SomeComponent/>
  
</Skeleton>

```

After 8 second child component will be shown.

### Props
width="200px"  =>  Width of skeleton component

height="20px"  =>  Height of skeleton component

loaded={isLoaded}  =>  if isLoaded == false, skeleton component will appear, if isLoaded == true, skeleton will be hidden and child component will appear.

*backgroundColor="#e1e9ee"  =>  Background color of skeleton.*

*style={{margin: "20px"}}   =>  You can set custom style for skeleton component.(Not for child components.)*

*duration={8000}   =>  After 8000ms child component will be appeared automatically*

*shape="circle"   => if you use this prop as "circle" skeleton will be circle shaped. In other cases skeleton will be rectangle shaped.*

*italic ones are optimal*
