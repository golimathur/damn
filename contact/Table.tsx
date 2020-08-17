import React  from 'react';
import { DetailsList,IColumn } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';

const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
        fontWeight: 'bold',

    }

});

const operations = [
    {
        SNO: '',
        ClientID : '',
        BusinessName: '',
        Type: '',        
        ContactPerson: '',
        Manager: '',
        Email: '',
        Phone: '',
    


    }
    
]
    
    
    const columns: IColumn[] = [
    {key : 'column1', name: 'SNO', fieldName: 'SNO', minWidth: 200, maxWidth: 200, },
    {key : 'column2', name: 'ClientID', fieldName: 'ClientID', minWidth: 200, maxWidth: 200, },
    {key : 'column3', name: 'BusinessName', fieldName: 'BusinessName', minWidth: 200, maxWidth: 200, },
    {key : 'column4', name: 'Type', fieldName: 'Type', minWidth: 200, maxWidth: 200, },
    {key : 'column5', name: 'ContactPerson', fieldName: 'ContactPerson', minWidth: 200, maxWidth: 200, },
    {key : 'column6', name: 'Manager', fieldName: 'Manager', minWidth: 200, maxWidth: 200, },
    {key : 'column7', name: 'Email', fieldName: 'Email', minWidth: 200, maxWidth: 200, },
    {key : 'column8', name: 'Phone', fieldName: 'Phone', minWidth: 200, maxWidth: 200, },

]


const Table = () => {

 const items = []
     return (

        <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
                <DetailsList
                items={operations}
                columns={columns}
                selectionMode={0}/>
               
                </div>
                
        </div>

);


};


export default Table;