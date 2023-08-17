import React from 'react';
import { classnames } from 'shared/helpers/classnames/classnames'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string;
}

export default function Sidebar  ({className} : SidebarProps ) {


    return (
        <div className={classnames(cls.Sidebar, {}, [className])}>
            
        </div>
    );
};

