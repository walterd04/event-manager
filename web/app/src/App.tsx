import React from 'react';

export interface HelloWorldProps {
  username: string;
}

const App = (props: HelloWorldProps) => (
  <h1>Hi {props.username} from React!</h1>
);

export default App;
