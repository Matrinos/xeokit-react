import React from 'react';
import ChangeModels from './component-demos/ChangeModels';
import BCFViewpoint from './component-demos/BCFViewpoint';
import Highlighting from './component-demos/Highlighting';
import NavCube from './component-demos/NavCube';
import Screenshot from './component-demos/Screenshot';
import ConditionalRender from './component-demos/ConditionalRender';
import XKT from './component-demos/XKT';

const App = () => (
  <div className="container my-5">
    <h1 className="text-center text-light my-5">
      Xeokit-SDK React integration demo
    </h1>
    <div className="card bg-light my-5">
      <div className="card-header">Feature</div>
      <div className="card-body">
        <h4 className="card-title mb-5">XKT file support</h4>
        <XKT />
      </div>
    </div>
    <div className="card bg-light my-5">
      <div className="card-header">Feature</div>
      <div className="card-body">
        <h4 className="card-title mb-5">Changing models</h4>
        {/* <ChangeModels /> */}
      </div>
    </div>
    <div className="card bg-light my-5">
      <div className="card-header">Feature</div>
      <div className="card-body">
        <h4 className="card-title mb-5">Load BCF Viewpoint</h4>
        {/* <BCFViewpoint /> */}
      </div>
    </div>
    <div className="card bg-light my-5">
      <div className="card-header">Feature</div>
      <div className="card-body">
        <h4 className="card-title mb-5">Highlight/pick entities</h4>
        {/* <Highlighting /> */}
      </div>
    </div>
    <div className="card bg-light my-5">
      <div className="card-header">Feature</div>
      <div className="card-body">
        <h4 className="card-title mb-5">Camera control with NavCube</h4>
        {/* <NavCube /> */}
      </div>
    </div>
    <div className="card bg-light my-5">
      <div className="card-header">Feature</div>
      <div className="card-body">
        <h4 className="card-title mb-5">Take screenshot of scene</h4>
        {/* <Screenshot /> */}
      </div>
    </div>
    <div className="card bg-light my-5">
      <div className="card-header">Feature</div>
      <div className="card-body">
        <h4 className="card-title mb-5">Open/close viewer</h4>
        {/* <ConditionalRender /> */}
      </div>
    </div>
  </div>
);

export default App;
