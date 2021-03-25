import React from 'react';
import Profile from './Profile';
class ProfileContainer extends React.Component{

    constructor(){
        super();
    }
  
   
    render(){

      const columns = [{

            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <p>{text}</p>
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            render: (text) => <p>{text}</p>
        }
    ];

        const data =[{
            key: '1',
            name: 'Mayur',
            username: 'Mayurjikar'
        }];

        return <Profile 
            columns={columns}
            data={data}
        />
    }
}

export default ProfileContainer