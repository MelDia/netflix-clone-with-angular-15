import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BannerComponent } from "./banner.component";

@NgModule({
    declarations: [
        BannerComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [
        BannerComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerModule { }