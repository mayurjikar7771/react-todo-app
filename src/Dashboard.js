import React from 'react';
import Layout from './Layout';

import Todos from './Todos/Todos';



const dashboard = (props) => {

     return <Layout>
      <Todos />
     </Layout>

}

export default dashboard;