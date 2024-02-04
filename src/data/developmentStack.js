import bootstrap from '@/assets/techstack/bootstrap.png';
import eslint from '@/assets/techstack/eslint.png';
import firebase from '@/assets/techstack/firebase.jpg';
import git from '@/assets/techstack/git.png';
import godaddy from '@/assets/techstack/godaddy.jpg';
import hostinger from '@/assets/techstack/hostinger.png';
import laravel from '@/assets/techstack/laravel.png';
import livewire from '@/assets/techstack/livewire.png';
import MSSql from '@/assets/techstack/MSSql.png';
import MySql from '@/assets/techstack/MySql.png';
import npm from '@/assets/techstack/npm.png';
import PHP from '@/assets/techstack/PHP.png';
import sanctum from '@/assets/techstack/sanctum.png';
import tailwind from '@/assets/techstack/tailwind.png';
import vscode from '@/assets/techstack/vscode.png';
import VueJS from '@/assets/techstack/VueJS.png';
import webpack from '@/assets/techstack/webpack.png';

const devStack = [
    {
        id:1,
        frontend: [
            {
                id:1,
                tech:'Vue JS',
                level: 'Novice',
                img: VueJS
            },
            {
                id:2,
                tech:'Laravel-livewire',
                level: 'Intermediate',
                img: livewire
            }
        ],
        backend: [
            {
                id:1,
                tech: 'Laravel',
                level: 'Intermediate',
                img: laravel
            }
        ],
        database: [
            {
                id:1,
                tech:'MySql',
                level: 'Expert',
                img: MySql
            },
            {
                id:2,
                tech:'MSSql',
                level: 'Expert',
                img: MSSql
            }
        ],
        serverside: [
            {
                id:1,
                tech:'PHP',
                level: 'Intermediate',
                img: PHP
            }
        ],
        api: [
            {
                id:1,
                tech:'Laravel Sanctum',
                level: 'Intermediate',
                img: sanctum
            }
        ],
        version: [
            {
                id:1,
                tech:'git',
                level: 'Expert',
                img: git
            }
        ],
        package: [
            {
                id:1,
                tech:'npm',
                level: 'Expert',
                img: npm
            }
        ],
        tools: [
            {
                id:1,
                tech:'Webpack',
                level: 'Intermediate',
                img: webpack
            },
            {
                id:2,
                tech:'ESLint',
                level: 'Intermediate',
                img: eslint
            },
            {
                id:3,
                tech:'VS Code',
                level: 'Expert',
                img: vscode
            }
        ],
        css: [
            {
                id:1,
                tech:'Bootstrap',
                level: 'Expert',
                img: bootstrap
            },
            {
                id:2,
                tech:'Tailwind CSS',
                level: 'Intermediate',
                img: tailwind
            }
        ],
        hosting:[
            {
                id:1,
                tech:'Hostinger',
                level: 'Intermediate',
                img: hostinger
            },
            {
                id:2,
                tech:'GoDaddy',
                level: 'Intermediate',
                img: godaddy
            },
            {
                id:3,
                tech:'Firebase',
                level: 'Intermediate',
                img: firebase
            }
        ]
    }
];

export {devStack};