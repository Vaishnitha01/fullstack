import React from 'react'
import PropTypes from 'prop-types'
const AdminLayout = ({children}) => {
  return (
    <div className='admin_container'>
      <aside>
        {/*SideNav*/}
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}
AdminLayout.PropTypes = {
    children: PropTypes.node.isRequired
}
export default AdminLayout
