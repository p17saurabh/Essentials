import { HomePage } from "./home.page";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
    children: [
      {
        path: "feed",
        loadChildren: () =>
          import("../pages/feed/feed.module").then(m => m.FeedPageModule)
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("../pages/notifications/notifications.module").then(
            m => m.NotificationsPageModule
          )
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../pages/settings/settings.module").then(
            m => m.SettingsPageModule
          )
      },
      {
        path: "messages",
        loadChildren: () =>
          import("../pages/messages/messages.module").then(
            m => m.MessagesPageModule
          )
      },
      {
        path: "user",
        loadChildren: () =>
          import("../pages/user/user.module").then(m => m.UserPageModule)
      },
      {
        path: "video",
        loadChildren: () =>
          import("../pages/video/video.module").then(m => m.VideoPageModule)
      },
      {
        path: "quote",
        loadChildren: () =>
          import("../pages/quote/quote.module").then(m => m.QuotePageModule)
      },
      {
        path: "link",
        loadChildren: () =>
          import("../pages/link/link.module").then(m => m.LinkPageModule)
      },
      {
        path: "credit",
        loadChildren: () =>
          import("../pages/credit/credit.module").then(m => m.CreditPageModule)
      },
      {
        path: "comments",
        loadChildren: () =>
          import("../pages/comments/comments.module").then(
            m => m.CommentsPageModule
          )
      },
      {
        path: "payment",
        loadChildren: () =>
          import("../pages/payment/payment.module").then(
            m => m.PaymentPageModule
          )
      },
      {
        path: "aboutus",
        loadChildren: () =>
          import("../pages/aboutus/aboutus.module").then(
            m => m.AboutusPageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouter {}
