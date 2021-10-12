//dependencies
import React from "react";
import {Provider} from 'react-redux';
import Unity, { UnityContext } from "react-unity-webgl";

//local
import './App.css';
import './assets/dest/css/test.min.css'
import Bugs from './components/Bugs';
import configureStore from './store/configureStore';

const store = configureStore();

const buildUrl = "Unity_WebGL_Build";

const unityContext = new UnityContext({
    loaderUrl: `${buildUrl}/Builds.loader.js`,
    dataUrl: `${buildUrl}/Builds.data`,
    frameworkUrl: `${buildUrl}/Builds.framework.js`,
    codeUrl: `${buildUrl}/Builds.wasm`,
  });

function App() {
  return (
    <Provider store={store}>
      {/* <Bugs/> */}
      <h1>111<h2>222</h2>111</h1>
      <Unity unityContext={unityContext} />
    </Provider>
  );
}

export default App;
