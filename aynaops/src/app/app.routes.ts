import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',

      },
      {
        path: 'mydashboard',
        loadComponent: () => import('./mydashboard/mydashboard.component')
            .then(m => m.MydashboardComponent),

      },
      {
        path:'followup',
        loadComponent: () => import('./followup/followup.component')
          .then(m => m.FollowupComponent),
      },      
      {
        path: 'requirement',
        loadComponent: () => import('./requirement/requirement.component')
          .then(m => m.RequirementComponent),
      },
      {
        path: 'trainer',
        loadComponent: () => import('./trainer/trainer.component')
          .then(m => m.TrainerComponent),
      },
      {
        path: 'po',
        loadComponent: () => import('./po/po.component')
          .then(m => m.PoComponent),
      },
      {
        path: 'batch',
        loadComponent: () => import('./batch/batch.component')
          .then(m => m.BatchComponent),
      },
      {
        path: 'pageheader',
        loadComponent: () => import('./pageheader/pageheader.component')
          .then(m => m.PageheaderComponent),
      },
      {
        path: 'pagefooter',
        loadComponent: () => import('./pagefooter/pagefooter.component')
          .then(m => m.PagefooterComponent),
      },
      {
        path: 'billingtovendor',
        loadComponent: () => import('./billingtovendor/billingtovendor.component')
          .then(m => m.BillingtovendorComponent),
      },
];
