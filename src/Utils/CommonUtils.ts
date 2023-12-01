import { MenuProps } from 'antd';

export default class CommonUtils {
    static getMenuItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: Required<MenuProps>['items'][number][],
        type?: 'group',
    ) {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as Required<MenuProps>['items'][number];
    }
}
