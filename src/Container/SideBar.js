import { useLocation, Link } from 'react-router-dom';
import { Header, Icon, Menu } from 'semantic-ui-react';

export function SideBar(){
    let path = useLocation().pathname;
    return (
        <div>
            <Header as='h5' className='headerNav'>
                Map Option
                <Header.Subheader>
                Set maps display
                </Header.Subheader>
            </Header>
            <Menu.Item active={path==='/peta1'? true:false} as='a'>
                <Link to='/peta1'>
                    <Icon name='th' size='large' />
                    Peta Marker Blok
                </Link> 
            </Menu.Item>
            <Menu.Item active={path==='/peta2'? true:false} as='a'>
                <Link to='/peta2'>
                    <Icon name='map pin' size='large' />
                    Peta Titik
                </Link> 
            </Menu.Item>
            <Menu.Item active={path==='/peta3'? true:false} as='a'>
                <Link to='/peta3'>
                    <Icon name='chart area' size='large' />
                    Peta Cluster
                </Link> 
            </Menu.Item>
            <Menu.Item active={path==='/peta4'? true:false} as='a'>
                <Link to='/peta4'>
                    <Icon name='road' size='large' />
                    Peta Jalan
                </Link> 
            </Menu.Item>
            <Menu.Item active={path==='/peta5'? true:false} as='a'>
                <Link to='/peta5'>
                    <Icon name='tint' size='large' />
                    Peta Sungai
                </Link> 
            </Menu.Item>
        </div>
    );
}