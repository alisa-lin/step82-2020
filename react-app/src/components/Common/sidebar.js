import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClinks, setCurrClink, setTitle } from '../../features/clink'
import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Menu } from 'antd';
import NewButton  from './newbutton';
import { useHistory } from 'react-router-dom';


const { Sider } = Layout;

const Sidebar = () => {

  const currentToken = localStorage.getItem('currentToken');
  const clinks = useSelector(state => state.clink.clinks);
  const isCurrentUserFetched = useSelector(state => state.users.isCurrentUserFetched);
  const history = useHistory();
  const dispatch = useDispatch();
  const currentId = useSelector(state => state.clink.currentClinkId);

  useEffect(() => {
    if (isCurrentUserFetched) {
      dispatch(fetchClinks(currentToken));
    }
  }, []);

  const changeClink = (title, id) => {
    dispatch(setCurrClink(id))
    dispatch(setTitle(title))
    history.push(`/dashboard/${id}`)
  }

  return (
    <Sider className="sidebar">
      <Menu theme="dark" mode="inline">
        <div className="logo" />
        <NewButton />
      </Menu>
      <Menu className="sidebar-scroll" theme="dark" mode="inline" defaultSelectedKeys={[currentId+""]} >
        <Menu.Item key="All" onClick={(() => changeClink("All", "All"))}>
          All
        </Menu.Item>
        
        {clinks.map(item => (
            <Menu.Item key={item.id} onClick={(() => changeClink(item.title, item.id))}>{item.title}</Menu.Item>
        ))}
      </Menu>
    </Sider >
  );
};

export default Sidebar;
