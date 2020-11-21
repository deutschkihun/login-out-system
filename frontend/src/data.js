import React from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaWpforms,
  FaGithub,
  FaLockOpen,
  FaRegHandPointUp
} from 'react-icons/fa';
export const links_login = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },

  {
    id: 5,
    url: '/login',
    text: 'login',
    icon: <FaLockOpen/>,
  },

   {
    id: 6,
    url: '/register',
    text: 'Register',
    icon: <FaRegHandPointUp/>,
  },
];

export const links_logout = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },

  {
    id: 5,
    url: '/logout',
    text: 'Logout',
    icon: <FaLockOpen/>,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
];
