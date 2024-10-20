const menuItems = [
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Services',
    path: '#',
    children: [
      { title: 'Copywriting', path: '/copywriting' },
      { title: 'SEO', path: '/seo' },
      { title: 'Web Development', path: '/web-development' },
    ],
  },
  {
    title: 'Showcase',
    path: '/showcase',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Pricing',
    path: '/pricing',
  },
];

export default menuItems;
