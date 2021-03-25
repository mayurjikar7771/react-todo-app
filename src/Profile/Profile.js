import React from 'react';
import {Card,Table} from 'antd';
import Layout from './../Layout';

const carddesign = {
    width: '600px',
    margin: '150px auto'


}

const Profile = (props) => {
     
    return <Layout>
        <Card style={carddesign}>
         <Table
              columns={props.columns}
              dataSource={props.data}

         />
                
          </Card>
        
    </Layout>
}

export default Profile;