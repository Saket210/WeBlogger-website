import React from 'react'

const subsTableItem = ({email,mongoId,date,deleteEmail}) => {
    const subsDate = new Date(date);
    return (
        <tr>
            <td colSpan={7} style={{textAlign:'center', padding:'10px 0px'}}>
                {email?email:"Anonymous"}
            </td>
            <td colSpan={4} style={{textAlign:'center'}}>
                {subsDate.toDateString()}
            </td>
            <td onClick={()=> deleteEmail(mongoId)} colSpan={4} style={{textAlign:'center'}}>
                X
            </td>
        </tr>
      )
}

export default subsTableItem