import { NgModule } from "@angular/core";
import { HomePage } from "./home.page";
import { NavbarModule } from "src/app/components/navbar/navbar.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BannerModule } from "src/app/components/banner/banner.module";

@NgModule({
    declarations: [HomePage],
    imports: [
        NavbarModule,
        BannerModule,
        CommonModule,
        RouterModule.forChild([
            { path: '', component: HomePage }
        ])
    ],
    providers: []
})
export class HomeModule { }