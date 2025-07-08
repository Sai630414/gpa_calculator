import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'cgpa',
    loadComponent: () =>
      import('./cgpa/cgpa.page').then((m) => m.CgpaPage),
  },
  {
    path: 'gpa',
    loadComponent: () =>
      import('./gpa/gpa.page').then((m) => m.GpaPage),
  },
  {
    path: 'attendance',
    loadComponent: () =>
      import('./attendance/attendance.page').then((m) => m.AttendancePage),
  },
  {
    path: 'cgpa',
    loadComponent: () => import('./cgpa/cgpa.page').then( m => m.CgpaPage)
  },
  {
    path: 'gpa',
    loadComponent: () => import('./gpa/gpa.page').then( m => m.GpaPage)
  },
  {
    path: 'attendance',
    loadComponent: () => import('./attendance/attendance.page').then( m => m.AttendancePage)
  },
  {
  path: 'users',
  loadComponent: () => import('./users/users.page').then(m => m.UsersPage),
},
{
  path: 'cgpa-user',
  loadComponent: () => import('./cgpa-user/cgpa-user.page').then(m => m.CgpaUserPage),
},

];
