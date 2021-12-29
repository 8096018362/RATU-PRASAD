import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [

  {
    id: 'navigation',
    title: 'Home',
    type: 'group',
    icon: 'feather icon-grid',
    children: [
      {
        id: 'dashboard',
        title: 'Admin Home',
        type: 'item',
        icon: 'feather icon-grid',
        url: '/admin-home'
      }
    ]
  },

  // User Management
  {
    id: 'navigation',
    title: 'User Management',
    type: 'group',
    icon: 'feather icon-users',
    children: [
      {
        id: 'dashboard',
        title: 'Users',
        type: 'collapse',
        icon: 'feather icon-users',
        children: [
          // {
          //   id: 'default',
          //   title: 'Add User',
          //   type: 'item',
          //   url: '/users/add'
          // },
          {
            id: 'sale',
            title: 'View Users',
            type: 'item',
            url: '/users/view'
          },
          {
            id: 'sale',
            title: 'Agent Requests',
            type: 'item',
            url: '/users/agent-request'
          },
          // {
          //   id: 'crm',
          //   title: 'Blocked Streamers',
          //   type: 'item',
          //   url: '/users/decline'
          // },
          // {
          //   id: 'analytics',
          //   title: 'Streamers',
          //   type: 'item',
          //   url: '/users/streamers'
          // },
          // {
          //   id: 'analytics',
          //   title: 'Agents',
          //   type: 'item',
          //   url: '/users/agent'
          // }
        ]
      }
    ],

  },

  // Agent Management
  {
    id: 'navigation',
    title: 'Agent Management',
    type: 'group',
    icon: 'feather icon-users',
    children: [

      // Streamer Profile
      {
        id: 'dashboard',
        title: 'Streamer Profile',
        type: 'collapse',
        icon: 'feather icon-users',
        children: [
          {
            id: 'default',
            title: 'Accept Streamer',
            type: 'item',
            url: '/streamerprofile/accept'
          },
          {
            id: 'default',
            title: 'Streamer List',
            type: 'item',
            url: '/streamerprofile/list'
          },

        ]
      },

      // Live Streamer
      {
        id: 'dashboard',
        title: 'Live Streamer',
        type: 'item',
        icon: 'feather icon-users',
        url: '/livestreamer'
      },

      // Agent Transaction
      {
        id: 'dashboard',
        title: 'Agent Transactions',
        type: 'collapse',
        icon: 'feather icon-users',
        children: [
          {
            id: 'default',
            title: 'Streamer Transaction',
            type: 'item',
            url: '/agenttransaction/streamer'
          },
          {
            id: 'default',
            title: 'Agent Turnover',
            type: 'item',
            url: '/agenttransaction/agentturnover'
          },

        ]
      },

      {
        id: 'dashboard',
        title: 'Agent Withdraw',
        type: 'item',
        icon: 'feather icon-users',
        url: '/agentwithdraw'
      },

    ],

  },

  // Reports
  {
    id: 'navigation',
    title: 'Reports',
    type: 'group',
    icon: 'fas fa-bell',
    children: [
      {
        id: 'dashboard',
        title: 'Reports',
        type: 'collapse',
        icon: 'fas fa-bell',
        children: [
          {
            id: 'default',
            title: 'Streamers',
            type: 'item',
            url: '/reports/streamerreport'
          },
          {
            id: 'default',
            title: 'Viewer',
            type: 'item',
            url: '/reports/viewer'
          },
          {
            id: 'default',
            title: 'Turnover Report',
            type: 'item',
            url: '/crown/withdraw',
          },
        ]
      },
    ],

  },

  // Gift Management
  {
    id: 'navigation',
    title: 'Gift Management',
    type: 'group',
    icon: 'fas fa-gift',
    children: [
      {
        id: 'dashboard',
        title: 'Gifts',
        type: 'collapse',
        icon: 'fas fa-gift',
        children: [
          {
            id: 'default',
            title: 'Add Gift',
            type: 'item',
            url: '/gift/add'
          },
          {
            id: 'default',
            title: 'View Gifts',
            type: 'item',
            url: '/gift/view'
          },
          // {
          //   id: 'default',
          //   title: 'Crown to Pearl',
          //   type: 'item',
          //   url: '/crown/crown-to-pearl',
          // },

          {
            id: 'default',
            title: 'Gift Utilization',
            type: 'item',
            url: '/gift/giftutilize',
          },
        ]
      },

      {
        id: 'dashboard',
        title: 'Crowns',
        type: 'collapse',
        icon: 'fas fa-crown',
        children: [
          {
            id: 'default',
            title: 'List',
            type: 'item',
            url: '/crown/view',
          },
          {
            id: 'default',
            title: 'Set Crow Value',
            type: 'item',
            url: '/crown/add',
          }
        ]

      }
    ],

  },

  {
    id: 'navigation',
    title: 'Streaming',
    type: 'group',
    icon: 'fas fa-camera',
    children: [
      {
        id: 'dashboard',
        title: 'Streams',
        type: 'collapse',
        icon: 'fas fa-camera',
        children: [
          {
            id: 'default',
            title: 'View Live Streams',
            type: 'item',
            url: '/videos/list'
          }
        ]
      }
    ]
  },

  // Bonus Management
  //{
  //   id: 'navigation',
  //   title: 'Bonus Management',
  //   type: 'group',
  //   icon: 'fas fa-award',
  //   children: [
  //     {
  //       id: 'dashboard',
  //       title: 'Daily Bonus',
  //       type: 'collapse',
  //       icon: 'fas fa-award',
  //       children: [
  //         {
  //           id: 'default',
  //           title: 'Daily Bonus List',
  //           type: 'item',
  //           url: '/bonus/view'
  //         },

  //       ]
  //     }
  //   ],

  // },
  //Withdrawable Management
  {
    id: 'navigation',
    title: 'Withdrawable Management',
    type: 'group',
    icon: 'fas fa-bell',
    children: [
      {
        id: 'dashboard',
        title: 'Withdrawable',
        type: 'collapse',
        icon: 'fas fa-bell',
        children: [
          {
            id: 'default',
            title: 'View List',
            type: 'item',
            url: '/withdrawable/list'
          },
          {
            id: 'sale',
            title: 'process',
            type: 'item',
            url: '/withdrawable/process'
          }
        ]
      },
      {
        id: 'dashboard',
        title: 'Pearl to RM Convert',
        type: 'collapse',
        icon: 'fas fa-bell',
        children: [
          {
            id: 'default',
            title: 'Pearl to RM',
            type: 'item',
            url: '/withdrawable/pearl-to-rm',
          }
        ]
      }
    ],

  },

  // Alert Management
  // {
  //   id: 'navigation',
  //   title: 'Alerts Management',
  //   type: 'group',
  //   icon: 'fas fa-bell',
  //   children: [
  //     {
  //       id: 'dashboard',
  //       title: 'Notifications',
  //       type: 'collapse',
  //       icon: 'fas fa-bell',
  //       children: [
  //         {
  //           id: 'default',
  //           title: 'Add Notifications',
  //           type: 'item',
  //           url: '/notifications/add'
  //         },
  //         {
  //           id: 'sale',
  //           title: 'View Notifications',
  //           type: 'item',
  //           url: '/notifications/views'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'dashboard',
  //       title: 'Announcements',
  //       type: 'collapse',
  //       icon: 'fas fa-bullhorn',
  //       children: [
  //         {
  //           id: 'default',
  //           title: 'Add Announcements',
  //           type: 'item',
  //           url: '/announcements/add'
  //         },
  //         {
  //           id: 'sale',
  //           title: 'View Announcements',
  //           type: 'item',
  //           url: '/announcements/views'
  //         }
  //       ]
  //     }
  //   ],

  // },

  // Control Center
  // {
  //   id: 'navigation',
  //   title: 'Control Center',
  //   type: 'group',
  //   icon: 'fas fa-cog',
  //   children: [
  //     {
  //       id: 'data-table',
  //       title: 'Settings',
  //       type: 'item',
  //       icon: 'fas fa-cog',
  //       url: '/settings'
  //     },
  //     {
  //       id: 'data-table',
  //       title: 'Email',
  //       type: 'item',
  //       icon: 'fas fa-cog',
  //       url: '/email/mail-inbox'
  //     },
  //   ]
  // }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
