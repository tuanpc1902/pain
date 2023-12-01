import { Layout, Menu, MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}
const items: MenuItem[] = [
    getItem('Account', 'sub1', <></>, [
        getItem('Profile', '1'),
        getItem('Personal Settings', '2'),
        getItem('Log out', '3'),
    ]),
    getItem('Tools', 'sub2', <></>, [
        getItem('Option 4', '4'),
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
    ]),

    getItem('Navigation Two', 'sub3', <></>, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),

        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
];
function Sider() {
    return (
        <Layout.Sider width={200} className="rounded-[12px] h-[600px]">
            <Menu
                mode="inline"
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                style={{
                    height: '100%',
                }}
                items={items}
                className="rounded-[10px]"
            />
        </Layout.Sider>
    );
}
export default Sider;
