import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [
        NavbarComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarModule { }