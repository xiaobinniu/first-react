import React, { useState, useEffect } from 'react';
import { PieChartOutlined, UserOutlined, } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem('Page1', '/page1', <PieChartOutlined />),
//     getItem('Page2', 'page2', <UserOutlined />, [
//         getItem('page2-1', '/page2/2-1'),
//         getItem('page2-2', '/page2/2-2')
//     ]),
//     getItem('Page3', 'page3', <UserOutlined />, [
//         getItem('page3-1', '/page3/3-1')
//     ])
// ];

const items = [
    {
        label: 'Page1',
        key: '/page1',
        icon: <PieChartOutlined />,
    },
    {
        label: 'Page2',
        key: 'page2',
        icon: <UserOutlined />,
        children: [
            {
                label: 'page2-1',
                key: '/page2/2-1',
            },
            {
                label: 'page2-2',
                key: '/page2/2-2',
            }
        ]
    },
    {
        label: 'Page3',
        key: 'page3',
        icon: <UserOutlined />,
        children: [
            {
                label: 'page3-1',
                key: '/page3/3-1',
            }

        ]
    }
]

export default function index() {
    const route = useLocation()
    const [openKey, setOpenKeys] = useState(['']);
    const routerto = useNavigate()

    useEffect(() => {
        findGroup()

        return () => {

        }
    }, [])

    const findGroup = () => {
        for (let i = 0; i < items.length; i++) {
            if (route.pathname.indexOf(items[i]['key']) !== -1) {
                setOpenKeys([items[i]['key']])
                break
            }
        }
    }

    // 点击item
    const clickMenuItem = (e: { key: string }) => {
        routerto(e.key)
    }
    // 点击展开按钮
    const openChange = (openKeys: string[]) => {
        setOpenKeys([openKeys[openKeys.length - 1]])
    }

    return (
        <Menu
            theme="light"
            defaultSelectedKeys={[route.pathname]}
            mode="inline" items={items}
            onClick={clickMenuItem}
            onOpenChange={openChange}
            openKeys={openKey}
        />
    )
}
